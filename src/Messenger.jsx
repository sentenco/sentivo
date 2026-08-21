import { Fragment, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

const POLL_MS = 30000; // fallback safety net; realtime handles the instant path

function displayName(profile, fallbackEmail) {
  if (profile?.display_name?.trim()) return profile.display_name.trim();
  if (!fallbackEmail) return "Teacher";
  const raw = fallbackEmail.split("@")[0].replace(/[._-]+/g, " ").trim();
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

function shortTime(dateStr) {
  return new Date(dateStr).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function listTime(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86400000);
  if (diffDays === 0) return shortTime(dateStr);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return d.toLocaleDateString(undefined, { weekday: "short" });
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function dateDivider(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  return d.toLocaleDateString(undefined, { month: "long", day: "numeric", year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined });
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12.5 4.5 6 10l6.5 5.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="m17 17-4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 8.5 3 3 7-7" />
    </svg>
  );
}

function EmptyChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  );
}

export default function Messenger() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, loading: authLoading } = useAuth();
  const targetUserId = searchParams.get("to");

  const [conversations, setConversations] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [loadingList, setLoadingList] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [convSearch, setConvSearch] = useState("");
  const threadEndRef = useRef(null);
  const pollRef = useRef(null);
  const activeIdRef = useRef(null);
  const composerRef = useRef(null);
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

  useEffect(() => {
    const el = composerRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [draft]);

  useEffect(() => {
    if (!user) { setLoadingList(false); return; }
    loadConversations();
    pollRef.current = setInterval(loadConversations, POLL_MS);
    return () => clearInterval(pollRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user || !targetUserId || targetUserId === user.id) return;
    openWith(targetUserId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, targetUserId]);

  useEffect(() => {
    if (!activeId) { setMessages([]); return; }
    loadMessages(activeId);
    const poll = setInterval(() => loadMessages(activeId, true), POLL_MS);
    return () => clearInterval(poll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  useEffect(() => {
    if (!activeId || !user) return;
    const channel = supabase
      .channel(`messages-${activeId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${activeId}` },
        (payload) => {
          const row = payload.new;
          setMessages((prev) => (prev.some((m) => m.id === row.id) ? prev : [...prev, row]));
          if (row.sender_id !== user.id) {
            supabase.from("messages").update({ read_at: new Date().toISOString() }).eq("id", row.id).then(() => {
              setConversations((prev) => prev.map((c) => (c.id === activeId ? { ...c, unread: 0 } : c)));
            });
          }
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [activeId, user]);

  useEffect(() => {
    if (!user) return;
    const channel = supabase
      .channel(`inbox-${user.id}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          const row = payload.new;
          setConversations((prev) => {
            if (!prev.some((c) => c.id === row.conversation_id)) return prev;
            const updated = prev.map((c) => {
              if (c.id !== row.conversation_id) return c;
              const isOpen = c.id === activeIdRef.current;
              const bumpUnread = row.sender_id !== user.id && !isOpen;
              return { ...c, last_message_at: row.created_at, last_message: row.content, unread: bumpUnread ? (c.unread || 0) + 1 : c.unread };
            });
            return updated.sort((a, b) => new Date(b.last_message_at) - new Date(a.last_message_at));
          });
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "conversations" },
        (payload) => {
          const row = payload.new;
          if (row.user_a_id !== user.id && row.user_b_id !== user.id) return;
          setConversations((prev) => {
            if (prev.some((c) => c.id === row.id)) return prev;
            return [{ ...row, unread: 0 }, ...prev];
          });
          const otherId = row.user_a_id === user.id ? row.user_b_id : row.user_a_id;
          loadProfiles([otherId]);
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, activeId]);

  async function loadProfiles(ids) {
    const missing = ids.filter((id) => !profiles[id]);
    if (!missing.length) return;
    const { data } = await supabase.from("profiles").select("id, display_name, avatar_url").in("id", missing);
    if (data) {
      setProfiles((prev) => {
        const next = { ...prev };
        data.forEach((p) => { next[p.id] = p; });
        return next;
      });
    }
  }

  async function loadConversations() {
    if (!user) return;
    const { data, error: convError } = await supabase
      .from("conversations")
      .select("id, user_a_id, user_b_id, last_message_at, last_message")
      .or(`user_a_id.eq.${user.id},user_b_id.eq.${user.id}`)
      .order("last_message_at", { ascending: false });
    if (convError) { console.error("loadConversations failed:", convError); setLoadingList(false); return; }
    const rows = data || [];
    setConversations(rows);
    setLoadingList(false);

    const otherIds = rows.map((c) => (c.user_a_id === user.id ? c.user_b_id : c.user_a_id));
    if (otherIds.length) loadProfiles(otherIds);

    if (rows.length) {
      const ids = rows.map((c) => c.id);
      const { data: unread } = await supabase
        .from("messages")
        .select("conversation_id")
        .in("conversation_id", ids)
        .is("read_at", null)
        .neq("sender_id", user.id);
      const counts = {};
      (unread || []).forEach((m) => { counts[m.conversation_id] = (counts[m.conversation_id] || 0) + 1; });
      setConversations((prev) => prev.map((c) => ({ ...c, unread: counts[c.id] || 0 })));
    }
  }

  async function loadMessages(conversationId, silent) {
    const { data, error: msgError } = await supabase
      .from("messages")
      .select("id, conversation_id, sender_id, content, created_at, read_at")
      .eq("conversation_id", conversationId)
      .order("created_at", { ascending: true });
    if (msgError) { if (!silent) setError(msgError.message); return; }
    setMessages(data || []);
    const unreadIds = (data || []).filter((m) => m.sender_id !== user.id && !m.read_at).map((m) => m.id);
    if (unreadIds.length) {
      supabase.from("messages").update({ read_at: new Date().toISOString() }).in("id", unreadIds).then(() => {
        setConversations((prev) => prev.map((c) => (c.id === conversationId ? { ...c, unread: 0 } : c)));
      });
    }
  }

  async function openWith(otherUserId) {
    setError(null);
    const [a, b] = [user.id, otherUserId].sort();
    const { data: existing } = await supabase
      .from("conversations")
      .select("id")
      .eq("user_a_id", a)
      .eq("user_b_id", b)
      .maybeSingle();
    if (existing) {
      setActiveId(existing.id);
      loadProfiles([otherUserId]);
      return;
    }
    const { data: created, error: createError } = await supabase
      .from("conversations")
      .insert({ user_a_id: a, user_b_id: b })
      .select("id, user_a_id, user_b_id, last_message_at, last_message")
      .single();
    if (createError) { setError("Couldn't start that conversation."); return; }
    setConversations((prev) => [{ ...created, unread: 0 }, ...prev]);
    setActiveId(created.id);
    loadProfiles([otherUserId]);
  }

  async function sendMessage() {
    const content = draft.trim();
    if (!content || !activeId || sending) return;
    setSending(true);
    setDraft("");
    const { data, error: sendError } = await supabase
      .from("messages")
      .insert({ conversation_id: activeId, sender_id: user.id, content })
      .select()
      .single();
    setSending(false);
    if (sendError) { setError(sendError.message); return; }
    setMessages((prev) => [...prev, data]);
    const now = new Date().toISOString();
    supabase.from("conversations").update({ last_message_at: now, last_message: content }).eq("id", activeId);
    setConversations((prev) => {
      const updated = prev.map((c) => (c.id === activeId ? { ...c, last_message_at: now, last_message: content } : c));
      return updated.sort((x, y) => new Date(y.last_message_at) - new Date(x.last_message_at));
    });
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  if (authLoading) return null;

  const activeConv = conversations.find((c) => c.id === activeId);
  const activeOtherId = activeConv ? (activeConv.user_a_id === user?.id ? activeConv.user_b_id : activeConv.user_a_id) : null;
  const activeProfile = activeOtherId ? profiles[activeOtherId] : null;
  const activeName = activeProfile ? displayName(activeProfile) : "…";

  const filteredConversations = conversations.filter((c) => {
    if (!convSearch.trim()) return true;
    const otherId = c.user_a_id === user.id ? c.user_b_id : c.user_a_id;
    const name = profiles[otherId] ? displayName(profiles[otherId]) : "";
    return name.toLowerCase().includes(convSearch.trim().toLowerCase());
  });

  return (
    <div className="mg-shell">
      <style>{CSS}</style>
      <div className="mg-topbar">
        <button type="button" className="mg-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="mg-brand-logo" />entivo
        </button>
        <h1 className="mg-topbar-title">Convo</h1>
      </div>

      {!user ? (
        <p className="mg-signin">Sign in to use Convo.</p>
      ) : (
        <div className="mg-frame">
          <div className="mg-body">
            <div className={`mg-list ${activeId ? "mg-list--hidden-mobile" : ""}`}>
              <div className="mg-search">
                <SearchIcon />
                <input
                  type="text"
                  value={convSearch}
                  onChange={(e) => setConvSearch(e.target.value)}
                  placeholder="Search conversations"
                />
              </div>
              <div className="mg-conv-list">
                {loadingList ? (
                  <p className="mg-empty-text">Loading…</p>
                ) : conversations.length === 0 ? (
                  <div className="mg-empty-state">
                    <EmptyChatIcon />
                    <p>No conversations yet. Message a teacher from Homeroom to start one.</p>
                  </div>
                ) : filteredConversations.length === 0 ? (
                  <p className="mg-empty-text">No matches for "{convSearch}".</p>
                ) : (
                  filteredConversations.map((c) => {
                    const otherId = c.user_a_id === user.id ? c.user_b_id : c.user_a_id;
                    const p = profiles[otherId];
                    const name = p ? displayName(p) : "…";
                    const unread = c.unread > 0;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        className={`mg-conv ${c.id === activeId ? "is-active" : ""} ${unread ? "is-unread" : ""}`}
                        onClick={() => setActiveId(c.id)}
                      >
                        <span className="mg-avatar">{p?.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(name)}</span>
                        <span className="mg-conv-text">
                          <span className="mg-conv-row">
                            <span className="mg-conv-name">{name}</span>
                            <span className="mg-conv-time">{c.last_message_at ? listTime(c.last_message_at) : ""}</span>
                          </span>
                          <span className="mg-conv-preview">{c.last_message || "Start the conversation"}</span>
                        </span>
                        {unread && <span className="mg-unread-badge">{c.unread > 9 ? "9+" : c.unread}</span>}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            <div className={`mg-thread ${activeId ? "" : "mg-thread--hidden-mobile"}`}>
              {!activeId ? (
                <div className="mg-thread-empty">
                  <EmptyChatIcon />
                  <p>Select a conversation to start messaging.</p>
                </div>
              ) : (
                <>
                  <div className="mg-thread-head">
                    <button type="button" className="mg-back" onClick={() => setActiveId(null)} aria-label="Back to conversations">
                      <BackIcon />
                    </button>
                    <span className="mg-avatar mg-avatar--sm">{activeProfile?.avatar_url ? <img src={activeProfile.avatar_url} alt="" /> : initials(activeName)}</span>
                    <span className="mg-thread-name">{activeName}</span>
                  </div>

                  {error && (
                    <div className="mg-error">
                      {error}
                      <button type="button" onClick={() => setError(null)} aria-label="Dismiss">&times;</button>
                    </div>
                  )}

                  <div className="mg-messages">
                    {messages.length === 0 ? (
                      <div className="mg-thread-empty mg-thread-empty--inline">
                        <p>Say hello to {activeName}.</p>
                      </div>
                    ) : (
                      messages.map((m, i) => {
                        const prev = messages[i - 1];
                        const next = messages[i + 1];
                        const showDivider = !prev || dateDivider(prev.created_at) !== dateDivider(m.created_at);
                        const isTight = prev && !showDivider && prev.sender_id === m.sender_id
                          && (new Date(m.created_at) - new Date(prev.created_at)) <= 5 * 60 * 1000;
                        const isLastInGroup = !next || next.sender_id !== m.sender_id
                          || (new Date(next.created_at) - new Date(m.created_at)) > 5 * 60 * 1000;
                        const isVeryLast = i === messages.length - 1;
                        const mine = m.sender_id === user.id;
                        return (
                          <Fragment key={m.id}>
                            {showDivider && (
                              <div className="mg-date-divider"><span>{dateDivider(m.created_at)}</span></div>
                            )}
                            <div className={`mg-bubble-row ${mine ? "is-mine" : ""} ${isTight ? "is-tight" : ""}`}>
                              <span className="mg-bubble">{m.content}</span>
                            </div>
                            {isLastInGroup && (
                              <div className={`mg-bubble-meta ${mine ? "is-mine" : ""}`}>
                                {shortTime(m.created_at)}
                                {isVeryLast && mine && m.read_at && (
                                  <span className="mg-seen"><CheckIcon /> Seen</span>
                                )}
                              </div>
                            )}
                          </Fragment>
                        );
                      })
                    )}
                    <div ref={threadEndRef} />
                  </div>

                  <div className="mg-composer">
                    <textarea
                      ref={composerRef}
                      className="mg-composer-input"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={`Message ${activeName}…`}
                      rows={1}
                    />
                    <button type="button" className="mg-send-btn" onClick={sendMessage} disabled={!draft.trim() || sending} aria-label="Send">
                      <SendIcon />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.mg-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  height: 100vh;
  display: flex; flex-direction: column;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.mg-shell * { box-sizing: border-box; }

.mg-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card); flex-shrink: 0;
}
.mg-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.mg-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.mg-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); margin: 0; }

.mg-signin { text-align: center; color: var(--muted); padding: 60px 0; }

.mg-frame { flex: 1; min-height: 0; display: flex; padding: 22px; }

.mg-body {
  flex: 1; min-height: 0; display: flex; max-width: 980px; width: 100%; margin: 0 auto;
  background: var(--card); border-radius: 20px; overflow: hidden;
  box-shadow: 0 1px 2px rgba(27,42,74,0.04), 0 12px 32px -16px rgba(27,42,74,0.16);
  border: 1px solid var(--hair);
}

.mg-list {
  width: 320px; flex-shrink: 0; border-right: 1px solid var(--hair);
  display: flex; flex-direction: column; min-height: 0; background: #FDFCFA;
}
.mg-search {
  display: flex; align-items: center; gap: 8px; margin: 14px 14px 6px; padding: 8px 12px;
  background: #fff; border: 1px solid var(--hair); border-radius: 12px; flex-shrink: 0;
}
.mg-search svg { width: 15px; height: 15px; color: var(--muted); flex-shrink: 0; }
.mg-search input {
  border: none; outline: none; background: none; font: inherit; font-size: 12.5px; color: var(--ink); width: 100%;
}
.mg-search input::placeholder { color: var(--muted); }
.mg-conv-list { flex: 1; overflow-y: auto; padding: 6px 10px 10px; }
.mg-empty-text { font-size: 13px; color: var(--muted); padding: 20px 14px; }
.mg-empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center;
  color: var(--muted); padding: 40px 20px;
}
.mg-empty-state svg { width: 28px; height: 28px; opacity: 0.4; }
.mg-empty-state p { margin: 0; font-size: 12.5px; line-height: 1.5; }

.mg-conv {
  position: relative; display: flex; align-items: center; gap: 11px; width: 100%;
  background: none; border: none; border-radius: 14px; padding: 10px 12px; cursor: pointer; text-align: left;
  margin-bottom: 2px; transition: background 0.12s ease;
}
.mg-conv:hover { background: rgba(43,42,74,0.05); }
.mg-conv.is-active { background: var(--coral-pale); }
.mg-avatar {
  flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%; overflow: hidden;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
}
.mg-avatar img { width: 100%; height: 100%; object-fit: cover; }
.mg-avatar--sm { width: 32px; height: 32px; font-size: 11px; }
.mg-conv-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.mg-conv-row { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.mg-conv-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-conv-time { flex-shrink: 0; font-size: 10.5px; color: var(--muted); }
.mg-conv-preview { font-size: 12px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-conv.is-unread .mg-conv-name { color: var(--ink); }
.mg-conv.is-unread .mg-conv-preview { color: var(--ink); font-weight: 600; }
.mg-unread-badge {
  flex-shrink: 0; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; background: var(--coral); color: #fff;
  font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;
}

.mg-thread { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.mg-thread-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  color: var(--muted); text-align: center; padding: 20px;
}
.mg-thread-empty svg { width: 30px; height: 30px; opacity: 0.35; }
.mg-thread-empty p { margin: 0; font-size: 13px; }
.mg-thread-empty--inline { flex: 0 0 auto; margin: auto 0; }

.mg-thread-head { display: flex; align-items: center; gap: 10px; padding: 14px 20px; border-bottom: 1px solid var(--hair); flex-shrink: 0; }
.mg-back { display: none; background: none; border: none; color: var(--muted); cursor: pointer; padding: 4px; }
.mg-back svg { width: 18px; height: 18px; }
.mg-thread-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; }

.mg-error {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: var(--coral-pale); color: var(--ink); font-size: 12.5px; padding: 8px 16px; margin: 8px 16px 0; border-radius: 10px;
}
.mg-error button { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; line-height: 1; }

.mg-messages { flex: 1; overflow-y: auto; padding: 20px 22px; display: flex; flex-direction: column; gap: 2px; }
.mg-date-divider { display: flex; align-items: center; justify-content: center; margin: 14px 0 10px; }
.mg-date-divider span {
  font-size: 10.5px; font-weight: 600; letter-spacing: 0.03em; text-transform: uppercase; color: var(--muted);
  background: var(--navy-pale); padding: 4px 12px; border-radius: 999px;
}
.mg-bubble-row { display: flex; margin-top: 8px; }
.mg-bubble-row.is-tight { margin-top: 2px; }
.mg-bubble-row.is-mine { justify-content: flex-end; }
.mg-bubble {
  max-width: 68%; padding: 10px 14px; border-radius: 17px 17px 17px 5px;
  background: var(--navy-pale); color: var(--ink); font-size: 13.5px; line-height: 1.48; white-space: pre-wrap; word-break: break-word;
}
.mg-bubble-row.is-mine .mg-bubble { background: var(--coral); color: #fff; border-radius: 17px 17px 5px 17px; }
.mg-bubble-meta {
  display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: var(--muted); margin: 3px 2px 4px;
}
.mg-bubble-meta.is-mine { justify-content: flex-end; }
.mg-seen { display: inline-flex; align-items: center; gap: 3px; color: var(--coral); font-weight: 600; }
.mg-seen svg { width: 10px; height: 10px; }

.mg-composer { display: flex; align-items: flex-end; gap: 10px; padding: 14px 20px; border-top: 1px solid var(--hair); flex-shrink: 0; }
.mg-composer-input {
  flex: 1; resize: none; border: 1px solid var(--hair); border-radius: 20px; padding: 11px 16px;
  font: inherit; font-size: 13.5px; color: var(--ink); outline: none; max-height: 120px; background: #FDFCFA;
  transition: border-color 0.12s ease;
}
.mg-composer-input:focus { border-color: var(--coral); background: #fff; }
.mg-send-btn {
  flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: none;
  background: var(--coral); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform 0.1s ease, opacity 0.1s ease;
}
.mg-send-btn:not(:disabled):hover { transform: scale(1.06); }
.mg-send-btn:disabled { opacity: 0.35; cursor: default; }
.mg-send-btn svg { width: 16px; height: 16px; }

@media (max-width: 720px) {
  .mg-frame { padding: 0; }
  .mg-body { border-radius: 0; border: none; box-shadow: none; }
  .mg-list { width: 100%; border-right: none; }
  .mg-list--hidden-mobile { display: none; }
  .mg-thread--hidden-mobile { display: none; }
  .mg-back { display: flex; align-items: center; justify-content: center; }
}
`;
