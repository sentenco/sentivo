import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { timeAgo } from "./slideDeckTypes";

const ADMIN_EMAIL = "caldrin1999@gmail.com";

function displayName(email) {
  if (!email) return "Teacher";
  const raw = email.split("@")[0].replace(/[._-]+/g, " ").trim();
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(email) {
  const name = displayName(email);
  const parts = name.split(" ").filter(Boolean);
  return (parts[0]?.[0] || "T") + (parts[1]?.[0] || "");
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 4.5h11" />
      <path d="M5.5 4.5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.5" />
      <path d="M6 7.5v4M10 7.5v4" />
      <path d="M3.5 4.5 4.1 13a1 1 0 0 0 1 .9h5.8a1 1 0 0 0 1-.9l0.6-8.5" />
    </svg>
  );
}

export default function Community() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;

  const [authMode, setAuthMode] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [draft, setDraft] = useState("");
  const [posting, setPosting] = useState(false);

  const [expanded, setExpanded] = useState(new Set());
  const [commentsByPost, setCommentsByPost] = useState({});
  const [commentDrafts, setCommentDrafts] = useState({});
  const [pendingComments, setPendingComments] = useState([]);

  async function loadPosts() {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from("community_posts")
      .select("id, author_id, author_email, content, status, created_at")
      .order("created_at", { ascending: false });
    setPosts(error ? [] : data || []);
    setLoadingPosts(false);
  }

  async function loadPendingComments() {
    if (!isAdmin) { setPendingComments([]); return; }
    const { data, error } = await supabase
      .from("community_comments")
      .select("id, post_id, author_email, content, status, created_at")
      .eq("status", "pending")
      .order("created_at", { ascending: true });
    setPendingComments(error ? [] : data || []);
  }

  useEffect(() => {
    if (!user) { setPosts([]); setLoadingPosts(false); return; }
    loadPosts();
    loadPendingComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function submitPost() {
    const content = draft.trim();
    if (!content || !user || posting) return;
    setPosting(true);
    const { data, error } = await supabase
      .from("community_posts")
      .insert({ author_id: user.id, author_email: user.email, content, status: "pending" })
      .select()
      .single();
    setPosting(false);
    if (!error && data) {
      setDraft("");
      setPosts((prev) => [data, ...prev]);
    }
  }

  async function approvePost(id) {
    const { error } = await supabase.from("community_posts").update({ status: "approved" }).eq("id", id);
    if (!error) setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, status: "approved" } : p)));
  }

  async function rejectPost(id) {
    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (!error) setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function deletePost(id) {
    if (!window.confirm("Delete this post? This can't be undone.")) return;
    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (!error) setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function loadComments(postId) {
    const { data, error } = await supabase
      .from("community_comments")
      .select("id, post_id, author_id, author_email, content, status, created_at")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });
    setCommentsByPost((prev) => ({ ...prev, [postId]: error ? [] : data || [] }));
  }

  function toggleExpand(postId) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
        if (!commentsByPost[postId]) loadComments(postId);
      }
      return next;
    });
  }

  async function submitComment(postId) {
    const content = (commentDrafts[postId] || "").trim();
    if (!content || !user) return;
    const { data, error } = await supabase
      .from("community_comments")
      .insert({ post_id: postId, author_id: user.id, author_email: user.email, content, status: "pending" })
      .select()
      .single();
    if (!error && data) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: [...(prev[postId] || []), data] }));
      setCommentDrafts((prev) => ({ ...prev, [postId]: "" }));
    }
  }

  async function approveComment(id, postId) {
    const { error } = await supabase.from("community_comments").update({ status: "approved" }).eq("id", id);
    if (!error) {
      setCommentsByPost((prev) => ({
        ...prev,
        [postId]: (prev[postId] || []).map((c) => (c.id === id ? { ...c, status: "approved" } : c)),
      }));
      setPendingComments((prev) => prev.filter((c) => c.id !== id));
    }
  }

  async function rejectComment(id, postId) {
    const { error } = await supabase.from("community_comments").delete().eq("id", id);
    if (!error) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: (prev[postId] || []).filter((c) => c.id !== id) }));
      setPendingComments((prev) => prev.filter((c) => c.id !== id));
    }
  }

  async function deleteComment(id, postId) {
    if (!window.confirm("Delete this comment?")) return;
    const { error } = await supabase.from("community_comments").delete().eq("id", id);
    if (!error) setCommentsByPost((prev) => ({ ...prev, [postId]: (prev[postId] || []).filter((c) => c.id !== id) }));
  }

  const approvedPosts = posts.filter((p) => p.status === "approved");
  const myPendingPosts = user ? posts.filter((p) => p.status === "pending" && p.author_id === user.id) : [];
  const adminPendingPosts = isAdmin ? posts.filter((p) => p.status === "pending") : [];

  return (
    <div className="cm-shell">
      <style>{CSS}</style>
      <header className="cm-topbar">
        <button type="button" className="cm-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentivo.png" alt="" className="cm-brand-logo" />entivo
        </button>
        <span className="cm-topbar-title">Community</span>
        <span className="cm-topbar-spacer" aria-hidden="true" />
      </header>

      <div className="cm-page">
        <div className="cm-stage">
          <div className="cm-hero">
            <span className="cm-hero-badge">💬</span>
            <span className="cm-eyebrow">Sentivo · Today</span>
            <h1 className="cm-hero-title">Teacher Community</h1>
            <p className="cm-hero-blurb">
              Share a tip, ask a question, or say hello to other Sentivo teachers. Posts are reviewed before they go live.
            </p>
          </div>

          {authLoading ? null : !user ? (
            <div className="cm-signin-card">
              <p>Sign in to post and comment.</p>
              <button type="button" className="cm-btn" onClick={() => setAuthMode("login")}>Log in</button>
            </div>
          ) : (
            <>
              <div className="cm-composer">
                <div className="cm-avatar">{initials(user.email)}</div>
                <div className="cm-composer-body">
                  <textarea
                    className="cm-composer-input"
                    placeholder="Share something with other teachers…"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    rows={3}
                    maxLength={2000}
                  />
                  <div className="cm-composer-row">
                    <span className="cm-composer-hint">Posts are reviewed before they appear publicly.</span>
                    <button type="button" className="cm-btn" disabled={!draft.trim() || posting} onClick={submitPost}>
                      {posting ? "Posting…" : "Post"}
                    </button>
                  </div>
                </div>
              </div>

              {myPendingPosts.length > 0 && (
                <div className="cm-mine-pending">
                  <div className="cm-section-label">Awaiting approval</div>
                  {myPendingPosts.map((p) => (
                    <div className="cm-pending-row" key={p.id}>
                      <p className="cm-pending-text">{p.content}</p>
                      <span className="cm-pending-tag">Pending</span>
                    </div>
                  ))}
                </div>
              )}

              {isAdmin && (adminPendingPosts.length > 0 || pendingComments.length > 0) && (
                <div className="cm-modqueue">
                  <div className="cm-section-label">Moderation queue</div>
                  {adminPendingPosts.map((p) => (
                    <div className="cm-mod-row" key={p.id}>
                      <div className="cm-mod-meta">{displayName(p.author_email)} · {timeAgo(p.created_at)}</div>
                      <p className="cm-mod-text">{p.content}</p>
                      <div className="cm-mod-actions">
                        <button type="button" className="cm-btn cm-btn--sm" onClick={() => approvePost(p.id)}>Approve</button>
                        <button type="button" className="cm-btn cm-btn--sm cm-btn--ghost" onClick={() => rejectPost(p.id)}>Reject</button>
                      </div>
                    </div>
                  ))}
                  {pendingComments.map((c) => (
                    <div className="cm-mod-row" key={c.id}>
                      <div className="cm-mod-meta">{displayName(c.author_email)} · comment · {timeAgo(c.created_at)}</div>
                      <p className="cm-mod-text">{c.content}</p>
                      <div className="cm-mod-actions">
                        <button type="button" className="cm-btn cm-btn--sm" onClick={() => approveComment(c.id, c.post_id)}>Approve</button>
                        <button type="button" className="cm-btn cm-btn--sm cm-btn--ghost" onClick={() => rejectComment(c.id, c.post_id)}>Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="cm-feed">
            {loadingPosts ? (
              <p className="cm-empty">Loading…</p>
            ) : approvedPosts.length === 0 ? (
              <p className="cm-empty">No posts yet. Be the first to share something!</p>
            ) : (
              approvedPosts.map((p) => {
                const isOpen = expanded.has(p.id);
                const comments = (commentsByPost[p.id] || []).filter(
                  (c) => c.status === "approved" || c.author_id === user?.id || isAdmin
                );
                const canManage = user && (p.author_id === user.id || isAdmin);
                return (
                  <div className="cm-post" key={p.id}>
                    <div className="cm-post-head">
                      <div className="cm-avatar cm-avatar--sm">{initials(p.author_email)}</div>
                      <div>
                        <div className="cm-post-author">{displayName(p.author_email)}</div>
                        <div className="cm-post-time">{timeAgo(p.created_at)}</div>
                      </div>
                      {canManage && (
                        <button type="button" className="cm-icon-btn" title="Delete post" onClick={() => deletePost(p.id)}>
                          <TrashIcon />
                        </button>
                      )}
                    </div>
                    <p className="cm-post-text">{p.content}</p>
                    <div className="cm-post-foot">
                      <button type="button" className="cm-link-btn" onClick={() => toggleExpand(p.id)}>
                        {isOpen ? "Hide comments" : "Comments"}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="cm-comments">
                        {comments.map((c) => (
                          <div className="cm-comment" key={c.id}>
                            <div className="cm-avatar cm-avatar--xs">{initials(c.author_email)}</div>
                            <div className="cm-comment-body">
                              <div className="cm-comment-meta">
                                <span className="cm-comment-author">{displayName(c.author_email)}</span>
                                <span className="cm-comment-time">{timeAgo(c.created_at)}</span>
                                {c.status === "pending" && <span className="cm-pending-tag">Pending</span>}
                              </div>
                              <p className="cm-comment-text">{c.content}</p>
                            </div>
                            {user && (c.author_id === user.id || isAdmin) && (
                              <button type="button" className="cm-icon-btn cm-icon-btn--xs" title="Delete comment" onClick={() => deleteComment(c.id, p.id)}>
                                <TrashIcon />
                              </button>
                            )}
                          </div>
                        ))}
                        {user && (
                          <div className="cm-comment-composer">
                            <input
                              type="text"
                              className="cm-comment-input"
                              placeholder="Write a comment…"
                              value={commentDrafts[p.id] || ""}
                              onChange={(e) => setCommentDrafts((prev) => ({ ...prev, [p.id]: e.target.value }))}
                              onKeyDown={(e) => { if (e.key === "Enter") submitComment(p.id); }}
                              maxLength={600}
                            />
                            <button
                              type="button"
                              className="cm-btn cm-btn--sm"
                              disabled={!(commentDrafts[p.id] || "").trim()}
                              onClick={() => submitComment(p.id)}
                            >
                              Reply
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {authMode && <AuthForm mode={authMode} onClose={() => setAuthMode(null)} />}
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.cm-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --hair: rgba(43,42,74,0.11);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.cm-shell * { box-sizing: border-box; }

.cm-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 28px;
  border-bottom: 1px solid var(--hair);
  background: var(--card);
}
.cm-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--ink);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.cm-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.cm-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 14px; font-weight: 600; color: var(--muted); }
.cm-topbar-spacer { width: 90px; }

.cm-page { padding: 24px; }
.cm-stage { max-width: 680px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }

.cm-hero { text-align: center; margin: 12px 0 8px; }
.cm-hero-badge {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px; margin: 0 auto 12px;
  border-radius: 50%; background: var(--coral-pale);
  font-size: 20px;
}
.cm-eyebrow { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--coral); margin-bottom: 6px; }
.cm-hero-title { font-family: 'Fredoka', sans-serif; font-size: 26px; font-weight: 600; margin: 0 0 8px; color: var(--ink); }
.cm-hero-blurb { font-size: 14px; line-height: 1.5; color: var(--muted); max-width: 480px; margin: 0 auto; }

.cm-signin-card {
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px;
  padding: 20px; text-align: center; display: flex; flex-direction: column; gap: 12px; align-items: center;
  font-size: 14px; color: var(--muted);
}

.cm-composer {
  display: flex; gap: 12px;
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 16px;
  box-shadow: 0 8px 22px rgba(43,42,74,0.05);
}
.cm-composer-body { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.cm-composer-input {
  width: 100%; resize: vertical; min-height: 60px;
  border: 1px solid var(--hair); border-radius: 12px; padding: 10px 12px;
  font: inherit; font-size: 14px; color: var(--ink); background: #FDFCFA;
}
.cm-composer-input:focus { outline: none; border-color: var(--coral); }
.cm-composer-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.cm-composer-hint { font-size: 11.5px; color: var(--muted); }

.cm-avatar {
  flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%;
  background: var(--coral); color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.cm-avatar--sm { width: 34px; height: 34px; font-size: 12.5px; }
.cm-avatar--xs { width: 26px; height: 26px; font-size: 10.5px; }

.cm-btn {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13.5px;
  color: #fff; background: var(--coral); border: none; border-radius: 999px;
  padding: 9px 20px; cursor: pointer; white-space: nowrap;
}
.cm-btn:disabled { opacity: 0.45; cursor: default; }
.cm-btn--sm { padding: 6px 14px; font-size: 12.5px; }
.cm-btn--ghost { background: none; color: var(--muted); border: 1px solid var(--hair); }

.cm-section-label { font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }

.cm-mine-pending, .cm-modqueue {
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 14px 16px;
}
.cm-pending-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0; }
.cm-pending-text { font-size: 13.5px; color: var(--ink); line-height: 1.4; margin: 0; }
.cm-pending-tag {
  flex-shrink: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--coral); background: var(--coral-pale); border-radius: 999px; padding: 3px 9px;
}

.cm-mod-row { padding: 10px 0; border-top: 1px solid var(--hair); }
.cm-mod-row:first-of-type { border-top: none; padding-top: 2px; }
.cm-mod-meta { font-size: 11.5px; color: var(--muted); margin-bottom: 4px; }
.cm-mod-text { font-size: 13.5px; color: var(--ink); line-height: 1.4; margin: 0 0 8px; }
.cm-mod-actions { display: flex; gap: 8px; }

.cm-feed { display: flex; flex-direction: column; gap: 14px; }
.cm-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 20px 0; }

.cm-post {
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 16px;
  box-shadow: 0 6px 18px rgba(43,42,74,0.05);
}
.cm-post-head { display: flex; align-items: center; gap: 10px; }
.cm-post-author { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink); }
.cm-post-time { font-size: 11.5px; color: var(--muted); }
.cm-post-text { font-size: 14px; line-height: 1.55; color: var(--ink); margin: 10px 0 8px; white-space: pre-wrap; }
.cm-post-foot { display: flex; }
.cm-link-btn {
  background: none; border: none; padding: 0; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
}
.cm-link-btn:hover { color: var(--coral); }

.cm-icon-btn {
  margin-left: auto; flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
  border: none; background: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.cm-icon-btn:hover { background: var(--coral-pale); color: var(--coral); }
.cm-icon-btn svg { width: 14px; height: 14px; }
.cm-icon-btn--xs { width: 22px; height: 22px; }
.cm-icon-btn--xs svg { width: 12px; height: 12px; }

.cm-comments { margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--hair); display: flex; flex-direction: column; gap: 10px; }
.cm-comment { display: flex; align-items: flex-start; gap: 8px; }
.cm-comment-body { flex: 1; }
.cm-comment-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
.cm-comment-author { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 12px; color: var(--ink); }
.cm-comment-time { font-size: 10.5px; color: var(--muted); }
.cm-comment-text { font-size: 13px; line-height: 1.45; color: var(--ink); margin: 0; }
.cm-comment-composer { display: flex; gap: 8px; align-items: center; margin-top: 4px; }
.cm-comment-input {
  flex: 1; border: 1px solid var(--hair); border-radius: 999px; padding: 8px 14px;
  font: inherit; font-size: 12.5px; color: var(--ink); background: #FDFCFA;
}
.cm-comment-input:focus { outline: none; border-color: var(--coral); }

@media (max-width: 640px) {
  .cm-page { padding: 14px; }
}
`;
