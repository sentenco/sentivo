import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import AuthForm from "./AuthForm";
import { timeAgo } from "./slideDeckTypes";
import communityBannerImg from "./assets/community/banner.jpg";

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const AVATAR_HUES = ["#FF6B4A", "#7C5CFC", "#16BFAE", "#E0A72E", "#FF8A4C"];

// ESL-teaching conversation starters -- one per day, same deterministic
// rotation pattern as the Today hero's tagline (Library.jsx HERO_TAGLINES).
const ESL_PROMPTS = [
  "What's one grammar mistake your students make again and again?",
  "What's your go-to icebreaker for a shy class?",
  "Which word do your students always mix up?",
  "Share your best trick for teaching phrasal verbs.",
  "What's a warm-up activity that never fails?",
  "What's the most common pronunciation issue you correct?",
  "How do you keep a low-level class engaged for a full hour?",
];

function todaysPrompt() {
  const dayIndex = Math.floor(Date.now() / 86400000);
  return ESL_PROMPTS[((dayIndex % ESL_PROMPTS.length) + ESL_PROMPTS.length) % ESL_PROMPTS.length];
}

// "Day streak" = consecutive days with at least one post, counting back from
// today; if nobody has posted yet today, still counts back from yesterday
// so the streak doesn't zero out until the day is fully over.
function computeDayStreak(posts) {
  if (!posts.length) return 0;
  const days = new Set(posts.map((p) => new Date(p.created_at).toDateString()));
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function avatarHue(email) {
  if (!email) return AVATAR_HUES[0];
  let hash = 0;
  for (let i = 0; i < email.length; i++) hash = (hash * 31 + email.charCodeAt(i)) >>> 0;
  return AVATAR_HUES[hash % AVATAR_HUES.length];
}

function displayName(name, email) {
  if (name && name.trim()) return name.trim();
  if (!email) return "Teacher";
  const raw = email.split("@")[0].replace(/[._-]+/g, " ").trim();
  return raw.replace(/\b\w/g, (c) => c.toUpperCase());
}

function initials(name, email) {
  const full = displayName(name, email);
  const parts = full.split(" ").filter(Boolean);
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

function HeartIcon({ filled }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17.2s-6.6-4.1-8.6-8.1C.3 6.4 1.7 3.4 4.6 2.7c1.8-.4 3.6.4 4.6 2 .9-1.6 2.8-2.4 4.6-2 2.9.7 4.3 3.7 3.2 6.4-2 4-8.6 8.1-8.6 8.1Z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 9.8c0-3.9 3.4-7 7.5-7s7.5 3.1 7.5 7-3.4 7-7.5 7c-.9 0-1.7-.1-2.5-.4L3.3 17l1-3.2c-1.1-1.1-1.8-2.5-1.8-4Z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.3" cy="6.8" r="3" />
      <path d="M1.8 17c0-3.1 2.4-5.2 5.5-5.2s5.5 2.1 5.5 5.2" />
      <path d="M13 12.2c2.4.3 4.2 2.2 4.2 4.8" />
      <circle cx="14.2" cy="7.3" r="2.1" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.3a5.4 5.4 0 0 0-3 9.9c.6.4 1 1.2 1 1.9v.4h4v-.4c0-.7.4-1.5 1-1.9a5.4 5.4 0 0 0-3-9.9Z" />
      <path d="M8 17.7h4M8.7 15.2h2.6" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 2.2s3.3 3.5 3.3 6.8c0 1-.3 1.8-.8 2.5.9-.4 1.7-1.2 2-2.2.9 1.4 1.4 3 1.4 4.3a5.9 5.9 0 0 1-11.8 0c0-2.2 1-4.1 2.3-5.7-.1.6-.1 1.3.1 1.9.4-3.9 2-6.9 3.5-7.6Z" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.4 7.3a2.6 2.6 0 1 1 3.9 2.3c-.8.5-1.3 1-1.3 1.9v.3" />
      <circle cx="10" cy="14.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DotsIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <circle cx="4.8" cy="10" r="1.6" />
      <circle cx="10" cy="10" r="1.6" />
      <circle cx="15.2" cy="10" r="1.6" />
    </svg>
  );
}

const POST_TYPES = [
  { key: "tip", label: "Tip", Icon: BulbIcon },
  { key: "question", label: "Question", Icon: QuestionIcon },
  { key: "other", label: "Something else", Icon: DotsIcon },
];

function postTypeMeta(key) {
  return POST_TYPES.find((t) => t.key === key) || null;
}

function Avatar({ name, email, size }) {
  return (
    <div className={`cm-avatar${size ? ` cm-avatar--${size}` : ""}`} style={{ background: avatarHue(email) }}>
      {initials(name, email)}
    </div>
  );
}

export default function Community() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [myName] = useState(() => localStorage.getItem("sentivo_teacher_name") || "");

  const [authMode, setAuthMode] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [draft, setDraft] = useState("");
  const [postType, setPostType] = useState(null);
  const [posting, setPosting] = useState(false);

  const [expanded, setExpanded] = useState(new Set());
  const [commentsByPost, setCommentsByPost] = useState({});
  const [commentCounts, setCommentCounts] = useState({});
  const [commentDrafts, setCommentDrafts] = useState({});

  const [likeCounts, setLikeCounts] = useState({});
  const [likedByMe, setLikedByMe] = useState(new Set());

  const composerRef = useRef(null);
  const prompt = todaysPrompt();
  const teacherCount = new Set(posts.map((p) => p.author_id)).size;
  const tipsShared = posts.filter((p) => p.post_type === "tip").length;
  const dayStreak = computeDayStreak(posts);

  function usePrompt() {
    if (!user) { setAuthMode("login"); return; }
    setDraft(prompt);
    requestAnimationFrame(() => {
      composerRef.current?.focus();
      composerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  async function loadPosts() {
    setLoadingPosts(true);
    const { data, error } = await supabase
      .from("community_posts")
      .select("id, author_id, author_email, author_name, content, post_type, created_at")
      .order("created_at", { ascending: false });
    setPosts(error ? [] : data || []);
    setLoadingPosts(false);
  }

  async function loadCommentCounts() {
    const { data } = await supabase.from("community_comments").select("post_id");
    const counts = {};
    (data || []).forEach((c) => { counts[c.post_id] = (counts[c.post_id] || 0) + 1; });
    setCommentCounts(counts);
  }

  async function loadLikes() {
    const { data } = await supabase.from("community_likes").select("post_id, user_id");
    const counts = {};
    const mine = new Set();
    (data || []).forEach((l) => {
      counts[l.post_id] = (counts[l.post_id] || 0) + 1;
      if (l.user_id === user?.id) mine.add(l.post_id);
    });
    setLikeCounts(counts);
    setLikedByMe(mine);
  }

  useEffect(() => {
    if (!user) { setPosts([]); setLoadingPosts(false); return; }
    loadPosts();
    loadCommentCounts();
    loadLikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function submitPost() {
    const content = draft.trim();
    if (!content || !user || posting) return;
    setPosting(true);
    const { data, error } = await supabase
      .from("community_posts")
      .insert({ author_id: user.id, author_email: user.email, author_name: myName.trim() || null, content, post_type: postType, status: "approved" })
      .select()
      .single();
    setPosting(false);
    if (!error && data) {
      setDraft("");
      setPostType(null);
      setPosts((prev) => [data, ...prev]);
    }
  }

  async function deletePost(id) {
    if (!window.confirm("Delete this post? This can't be undone.")) return;
    const { error } = await supabase.from("community_posts").delete().eq("id", id);
    if (!error) setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function toggleLike(postId) {
    if (!user) return;
    const alreadyLiked = likedByMe.has(postId);
    setLikedByMe((prev) => {
      const next = new Set(prev);
      alreadyLiked ? next.delete(postId) : next.add(postId);
      return next;
    });
    setLikeCounts((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + (alreadyLiked ? -1 : 1) }));
    if (alreadyLiked) {
      await supabase.from("community_likes").delete().eq("post_id", postId).eq("user_id", user.id);
    } else {
      await supabase.from("community_likes").insert({ post_id: postId, user_id: user.id });
    }
  }

  async function loadComments(postId) {
    const { data, error } = await supabase
      .from("community_comments")
      .select("id, post_id, author_id, author_email, author_name, content, created_at")
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
      .insert({ post_id: postId, author_id: user.id, author_email: user.email, author_name: myName.trim() || null, content, status: "approved" })
      .select()
      .single();
    if (!error && data) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: [...(prev[postId] || []), data] }));
      setCommentDrafts((prev) => ({ ...prev, [postId]: "" }));
      setCommentCounts((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }));
    }
  }

  async function deleteComment(id, postId) {
    if (!window.confirm("Delete this comment?")) return;
    const { error } = await supabase.from("community_comments").delete().eq("id", id);
    if (!error) {
      setCommentsByPost((prev) => ({ ...prev, [postId]: (prev[postId] || []).filter((c) => c.id !== id) }));
      setCommentCounts((prev) => ({ ...prev, [postId]: Math.max(0, (prev[postId] || 1) - 1) }));
    }
  }

  return (
    <div className="cm-shell">
      <style>{CSS}</style>
      <header className="cm-topbar">
        <button type="button" className="cm-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentivo.png" alt="" className="cm-brand-logo" />entivo
        </button>
        <h1 className="cm-topbar-title">Teacher Community</h1>
      </header>

      <div className="cm-page">
        <div className="cm-stage">
          <div className="cm-banner-block">
            <img
              className="cm-banner-img"
              src={communityBannerImg}
              alt="Illustration of teachers around the world connecting over Sentivo"
            />
            <div className="cm-stats">
              <div className="cm-stat">
                <PeopleIcon />
                <div className="cm-stat-num">{teacherCount}</div>
                <div className="cm-stat-label">Teachers</div>
              </div>
              <div className="cm-stat">
                <BulbIcon />
                <div className="cm-stat-num">{tipsShared}</div>
                <div className="cm-stat-label">Tips Shared</div>
              </div>
              <div className="cm-stat">
                <FlameIcon />
                <div className="cm-stat-num">{dayStreak}</div>
                <div className="cm-stat-label">Day Streak</div>
              </div>
            </div>
          </div>

          <button type="button" className="cm-prompt" onClick={usePrompt}>
            <div>
              <span className="cm-prompt-eyebrow">Prompt of the day</span>
              <p className="cm-prompt-text">{prompt}</p>
            </div>
            <span className="cm-prompt-dice" aria-hidden="true">&#8635;</span>
          </button>

          {authLoading ? null : !user ? (
            <div className="cm-signin-card">
              <p>Sign in to post and comment.</p>
              <button type="button" className="cm-btn" onClick={() => setAuthMode("login")}>Log in</button>
            </div>
          ) : (
            <div className="cm-composer">
              <Avatar name={myName} email={user.email} />
              <div className="cm-composer-body">
                <div className="cm-type-picker">
                  {POST_TYPES.map(({ key, label, Icon }) => (
                    <button
                      key={key}
                      type="button"
                      className={`cm-type-pill${postType === key ? " is-active" : ""}`}
                      onClick={() => setPostType(postType === key ? null : key)}
                    >
                      <Icon />
                      {label}
                    </button>
                  ))}
                </div>
                <textarea
                  ref={composerRef}
                  className="cm-composer-input"
                  placeholder="Share something with other teachers…"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  rows={3}
                  maxLength={2000}
                />
                <div className="cm-composer-row">
                  <button type="button" className="cm-btn" disabled={!draft.trim() || posting} onClick={submitPost}>
                    {posting ? "Posting…" : "Post"}
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="cm-feed">
            {loadingPosts ? (
              <p className="cm-empty">Loading…</p>
            ) : posts.length === 0 ? (
              <p className="cm-empty">No posts yet. Be the first to share something!</p>
            ) : (
              posts.map((p) => {
                const isOpen = expanded.has(p.id);
                const comments = commentsByPost[p.id] || [];
                const canManage = user && (p.author_id === user.id || isAdmin);
                const liked = likedByMe.has(p.id);
                const likeCount = likeCounts[p.id] || 0;
                const commentCount = commentCounts[p.id] || 0;
                const type = postTypeMeta(p.post_type);
                return (
                  <div className="cm-post" key={p.id}>
                    <div className="cm-post-head">
                      <Avatar name={p.author_name} email={p.author_email} size="sm" />
                      <div className="cm-post-headline">
                        <span className="cm-post-author">{displayName(p.author_name, p.author_email)}</span>
                        <span className="cm-post-dot">·</span>
                        <span className="cm-post-time">{timeAgo(p.created_at)}</span>
                        {type && (
                          <span className={`cm-post-tag cm-post-tag--${type.key}`}>
                            <type.Icon />
                            {type.label}
                          </span>
                        )}
                      </div>
                      {canManage && (
                        <button type="button" className="cm-icon-btn" title="Delete post" onClick={() => deletePost(p.id)}>
                          <TrashIcon />
                        </button>
                      )}
                    </div>
                    <p className="cm-post-text">{p.content}</p>
                    <div className="cm-post-actions">
                      <button type="button" className={`cm-action-btn${liked ? " is-liked" : ""}`} onClick={() => toggleLike(p.id)}>
                        <HeartIcon filled={liked} />
                        {likeCount > 0 && <span>{likeCount}</span>}
                      </button>
                      <button type="button" className="cm-action-btn" onClick={() => toggleExpand(p.id)}>
                        <CommentIcon />
                        {commentCount > 0 && <span>{commentCount}</span>}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="cm-comments">
                        {comments.map((c) => (
                          <div className="cm-comment" key={c.id}>
                            <Avatar name={c.author_name} email={c.author_email} size="xs" />
                            <div className="cm-comment-body">
                              <div className="cm-comment-meta">
                                <span className="cm-comment-author">{displayName(c.author_name, c.author_email)}</span>
                                <span className="cm-comment-time">{timeAgo(c.created_at)}</span>
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
  --hair: rgba(43,42,74,0.09);
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
.cm-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.cm-page { padding: 24px; }
.cm-stage { max-width: 640px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }

.cm-banner-block {
  border-radius: 16px; overflow: hidden; border: 1px solid var(--hair);
  box-shadow: 0 4px 14px rgba(43,42,74,0.04);
}
.cm-banner-img { width: 100%; aspect-ratio: 3 / 1; object-fit: cover; display: block; }

.cm-stats { display: flex; background: var(--card); border-top: 1px solid var(--hair); }
.cm-stat { flex: 1; text-align: center; padding: 14px 6px; }
.cm-stat + .cm-stat { border-left: 1px solid var(--hair); }
.cm-stat svg { width: 18px; height: 18px; color: var(--coral); }
.cm-stat-num {
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 18px; color: var(--ink);
  margin-top: 5px; font-variant-numeric: tabular-nums;
}
.cm-stat-label { font-size: 10px; font-weight: 700; letter-spacing: 0.03em; color: var(--muted); margin-top: 2px; }

.cm-prompt {
  display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
  width: 100%; text-align: left; font: inherit; cursor: pointer;
  background: var(--coral-pale); border: none; border-radius: 16px; padding: 16px 18px;
}
.cm-prompt-eyebrow {
  display: block; font-family: 'Quicksand', sans-serif; font-size: 10px; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase; color: var(--coral); margin-bottom: 6px;
}
.cm-prompt-text { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px; color: var(--ink); margin: 0; line-height: 1.35; }
.cm-prompt-dice {
  flex-shrink: 0; width: 30px; height: 30px; border-radius: 50%; background: #fff; color: var(--coral);
  display: flex; align-items: center; justify-content: center; font-size: 14px;
  box-shadow: 0 4px 10px rgba(43,42,74,0.08);
}

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
.cm-composer-row { display: flex; align-items: center; justify-content: flex-end; gap: 12px; }

.cm-type-picker { display: flex; flex-wrap: wrap; gap: 8px; }
.cm-type-pill {
  display: flex; align-items: center; gap: 6px;
  background: #FDFCFA; border: 1px solid var(--hair); border-radius: 999px;
  padding: 6px 12px 6px 10px; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12px; color: var(--muted);
}
.cm-type-pill svg { width: 14px; height: 14px; }
.cm-type-pill:hover { border-color: var(--coral); color: var(--coral); }
.cm-type-pill.is-active { background: var(--coral); border-color: var(--coral); color: #fff; }

.cm-avatar {
  flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%;
  color: #fff; font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 14px;
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

.cm-feed { display: flex; flex-direction: column; gap: 12px; }
.cm-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 20px 0; }

.cm-post {
  background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 16px;
  box-shadow: 0 4px 14px rgba(43,42,74,0.04);
}
.cm-post-head { display: flex; align-items: center; gap: 10px; }
.cm-post-headline { display: flex; align-items: center; flex-wrap: wrap; row-gap: 4px; gap: 6px; min-width: 0; }
.cm-post-author { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 13.5px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cm-post-dot { color: var(--muted); font-size: 12px; }
.cm-post-time { font-size: 12px; color: var(--muted); white-space: nowrap; }
.cm-post-text { font-size: 14.5px; line-height: 1.6; color: var(--ink); margin: 10px 0 10px; white-space: pre-wrap; }

.cm-post-tag {
  display: flex; align-items: center; gap: 4px;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 10.5px;
  border-radius: 999px; padding: 2px 9px 2px 7px; margin-left: 2px;
}
.cm-post-tag svg { width: 11px; height: 11px; }
.cm-post-tag--tip { background: #FCEFD6; color: #A5730F; }
.cm-post-tag--question { background: var(--coral-pale); color: var(--coral); }
.cm-post-tag--other { background: #E7E4F4; color: #6E5FC4; }

.cm-post-actions { display: flex; align-items: center; gap: 4px; }
.cm-action-btn {
  display: flex; align-items: center; gap: 6px;
  background: none; border: none; padding: 6px 10px; margin-left: -10px; border-radius: 10px; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px; color: var(--muted);
}
.cm-action-btn svg { width: 17px; height: 17px; }
.cm-action-btn:hover { background: var(--coral-pale); color: var(--coral); }
.cm-action-btn.is-liked { color: var(--coral); }

.cm-icon-btn {
  margin-left: auto; flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
  border: none; background: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.cm-icon-btn:hover { background: var(--coral-pale); color: var(--coral); }
.cm-icon-btn svg { width: 14px; height: 14px; }
.cm-icon-btn--xs { width: 22px; height: 22px; }
.cm-icon-btn--xs svg { width: 12px; height: 12px; }

.cm-comments { margin-top: 6px; padding-top: 12px; border-top: 1px solid var(--hair); display: flex; flex-direction: column; gap: 10px; }
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
