import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { timeAgo } from "./slideDeckTypes";

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
  const threadEndRef = useRef(null);
  const pollRef = useRef(null);
  const activeIdRef = useRef(null);
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

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
              return { ...c, last_message_at: row.created_at, unread: bumpUnread ? (c.unread || 0) + 1 : c.unread };
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
      .select("id, user_a_id, user_b_id, last_message_at")
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
      .select("id, user_a_id, user_b_id, last_message_at")
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
    supabase.from("conversations").update({ last_message_at: now }).eq("id", activeId);
    setConversations((prev) => {
      const updated = prev.map((c) => (c.id === activeId ? { ...c, last_message_at: now } : c));
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

  return (
    <div className="mg-shell">
      <style>{CSS}</style>
      <div className="mg-topbar">
        <button type="button" className="mg-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="mg-brand-logo" />entivo
        </button>
        <h1 className="mg-topbar-title">Small Talk</h1>
      </div>

      {!user ? (
        <p className="mg-signin">Sign in to use Small Talk.</p>
      ) : (
        <div className="mg-body">
          <div className={`mg-list ${activeId ? "mg-list--hidden-mobile" : ""}`}>
            {loadingList ? (
              <p className="mg-empty-text">Loading…</p>
            ) : conversations.length === 0 ? (
              <div className="mg-empty-state">
                <EmptyChatIcon />
                <p>No conversations yet. Message a teacher from Homeroom to start one.</p>
              </div>
            ) : (
              conversations.map((c) => {
                const otherId = c.user_a_id === user.id ? c.user_b_id : c.user_a_id;
                const p = profiles[otherId];
                const name = p ? displayName(p) : "…";
                return (
                  <button
                    type="button"
                    key={c.id}
                    className={`mg-conv ${c.id === activeId ? "is-active" : ""}`}
                    onClick={() => setActiveId(c.id)}
                  >
                    <span className="mg-avatar">{p?.avatar_url ? <img src={p.avatar_url} alt="" /> : initials(name)}</span>
                    <span className="mg-conv-text">
                      <span className="mg-conv-name">{name}</span>
                      <span className="mg-conv-time">{timeAgo(c.last_message_at)}</span>
                    </span>
                    {c.unread > 0 && <span className="mg-unread-dot" />}
                  </button>
                );
              })
            )}
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
                  {messages.map((m) => (
                    <div key={m.id} className={`mg-bubble-row ${m.sender_id === user.id ? "is-mine" : ""}`}>
                      <span className="mg-bubble">{m.content}</span>
                    </div>
                  ))}
                  <div ref={threadEndRef} />
                </div>

                <div className="mg-composer">
                  <textarea
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

.mg-body { flex: 1; min-height: 0; display: flex; max-width: 920px; width: 100%; margin: 0 auto; }

.mg-list {
  width: 300px; flex-shrink: 0; border-right: 1px solid var(--hair);
  overflow-y: auto; padding: 10px;
}
.mg-empty-text { font-size: 13px; color: var(--muted); padding: 20px 14px; }
.mg-empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center;
  color: var(--muted); padding: 40px 20px;
}
.mg-empty-state svg { width: 28px; height: 28px; opacity: 0.4; }
.mg-empty-state p { margin: 0; font-size: 12.5px; line-height: 1.5; }

.mg-conv {
  position: relative; display: flex; align-items: center; gap: 10px; width: 100%;
  background: none; border: none; border-radius: 12px; padding: 10px; cursor: pointer; text-align: left;
}
.mg-conv:hover { background: rgba(43,42,74,0.05); }
.mg-conv.is-active { background: var(--coral-pale); }
.mg-avatar {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; overflow: hidden;
  background: var(--navy); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px;
  display: flex; align-items: center; justify-content: center;
}
.mg-avatar img { width: 100%; height: 100%; object-fit: cover; }
.mg-avatar--sm { width: 30px; height: 30px; font-size: 11px; }
.mg-conv-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.mg-conv-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.mg-conv-time { font-size: 11px; color: var(--muted); }
.mg-unread-dot { flex-shrink: 0; width: 8px; height: 8px; border-radius: 50%; background: var(--coral); }

.mg-thread { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.mg-thread-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  color: var(--muted); text-align: center; padding: 20px;
}
.mg-thread-empty svg { width: 30px; height: 30px; opacity: 0.35; }
.mg-thread-empty p { margin: 0; font-size: 13px; }

.mg-thread-head { display: flex; align-items: center; gap: 10px; padding: 12px 18px; border-bottom: 1px solid var(--hair); flex-shrink: 0; }
.mg-back { display: none; background: none; border: none; color: var(--muted); cursor: pointer; padding: 4px; }
.mg-back svg { width: 18px; height: 18px; }
.mg-thread-name { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px; }

.mg-error {
  display: flex; align-items: center; justify-content: space-between; gap: 10px;
  background: var(--coral-pale); color: var(--ink); font-size: 12.5px; padding: 8px 16px; margin: 8px 16px 0; border-radius: 10px;
}
.mg-error button { background: none; border: none; color: var(--muted); font-size: 16px; cursor: pointer; line-height: 1; }

.mg-messages { flex: 1; overflow-y: auto; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px; }
.mg-bubble-row { display: flex; }
.mg-bubble-row.is-mine { justify-content: flex-end; }
.mg-bubble {
  max-width: 72%; padding: 9px 14px; border-radius: 16px 16px 16px 4px;
  background: var(--navy-pale); color: var(--ink); font-size: 13.5px; line-height: 1.45; white-space: pre-wrap; word-break: break-word;
}
.mg-bubble-row.is-mine .mg-bubble { background: var(--coral); color: #fff; border-radius: 16px 16px 4px 16px; }

.mg-composer { display: flex; align-items: flex-end; gap: 8px; padding: 12px 16px; border-top: 1px solid var(--hair); flex-shrink: 0; }
.mg-composer-input {
  flex: 1; resize: none; border: 1px solid var(--hair); border-radius: 18px; padding: 10px 16px;
  font: inherit; font-size: 13.5px; color: var(--ink); outline: none; max-height: 100px;
}
.mg-composer-input:focus { border-color: var(--coral); }
.mg-send-btn {
  flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: none;
  background: var(--coral); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.mg-send-btn:disabled { opacity: 0.4; cursor: default; }
.mg-send-btn svg { width: 16px; height: 16px; }

@media (max-width: 720px) {
  .mg-list { width: 100%; border-right: none; }
  .mg-list--hidden-mobile { display: none; }
  .mg-thread--hidden-mobile { display: none; }
  .mg-back { display: flex; align-items: center; justify-content: center; }
}
`;
