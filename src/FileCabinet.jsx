import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";
import { timeAgo } from "./slideDeckTypes";

const ADMIN_EMAIL = "caldrin1999@gmail.com";
const MAX_FILE_MB = 20;

const CATEGORIES = [
  { key: "credential", label: "Credentials", hint: "Certificates, diplomas, TESOL/CELTA, teaching IDs. Private, only you and Sentivo staff can see these." },
  { key: "material", label: "Lesson Materials", hint: "Worksheets, slides, handouts, anything you use in class." },
];

function formatSize(bytes) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8A2 2 0 0 1 21 9.5V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5Z" />
      <path d="M13.5 2.5V7a1 1 0 0 0 1 1h4" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 4h12M6.5 4V2.5h3V4M3.5 4l.6 9a1 1 0 0 0 1 .9h5.8a1 1 0 0 0 1-.9l.6-9" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 14V4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 8.5 10 4l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function FileCabinet() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === ADMIN_EMAIL;
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(null);
  const [error, setError] = useState(null);
  const [sharingId, setSharingId] = useState(null);
  const [sharedIds, setSharedIds] = useState(new Set());

  useEffect(() => {
    if (!user) { setFiles([]); setLoading(false); return; }
    loadFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  async function loadFiles() {
    setLoading(true);
    const { data, error: loadError } = await supabase
      .from("teacher_files")
      .select("id, owner_id, category, file_path, file_name, file_size, created_at")
      .order("created_at", { ascending: false });
    if (loadError) {
      console.error("loadFiles failed:", loadError);
      setError(loadError.message);
    } else {
      setFiles(data || []);
    }
    setLoading(false);
  }

  async function handleUpload(e, category) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`That file is too big — keep it under ${MAX_FILE_MB}MB.`);
      return;
    }
    setError(null);
    setUploading(category);
    const path = `${user.id}/${crypto.randomUUID()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("teacher-files").upload(path, file);
    if (uploadError) {
      setUploading(null);
      setError(uploadError.message || "Upload failed.");
      return;
    }
    const { data, error: insertError } = await supabase
      .from("teacher_files")
      .insert({
        owner_id: user.id,
        category,
        file_path: path,
        file_name: file.name,
        file_size: file.size,
      })
      .select()
      .single();
    setUploading(null);
    if (insertError) {
      setError(insertError.message);
      return;
    }
    setFiles((prev) => [data, ...prev]);
  }

  async function handleOpen(f) {
    const { data, error: signError } = await supabase.storage.from("teacher-files").createSignedUrl(f.file_path, 60);
    if (signError || !data?.signedUrl) {
      setError("Couldn't open that file. Try again.");
      return;
    }
    window.open(data.signedUrl, "_blank");
  }

  async function handleDelete(f) {
    if (!window.confirm(`Delete "${f.file_name}"? This can't be undone.`)) return;
    const { error: storageError } = await supabase.storage.from("teacher-files").remove([f.file_path]);
    if (storageError) { setError(storageError.message); return; }
    const { error: rowError } = await supabase.from("teacher_files").delete().eq("id", f.id);
    if (rowError) { setError(rowError.message); return; }
    setFiles((prev) => prev.filter((x) => x.id !== f.id));
  }

  async function handleShare(f) {
    setError(null);
    setSharingId(f.id);
    try {
      const { data: signed, error: signError } = await supabase.storage.from("teacher-files").createSignedUrl(f.file_path, 60);
      if (signError || !signed?.signedUrl) throw new Error("Couldn't read that file.");
      const blob = await (await fetch(signed.signedUrl)).blob();

      const publicPath = `${user.id}/${crypto.randomUUID()}-${f.file_name}`;
      const { error: uploadError } = await supabase.storage.from("community-uploads").upload(publicPath, blob);
      if (uploadError) throw uploadError;
      const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(publicPath);

      const { error: postError } = await supabase.from("community_posts").insert({
        author_id: user.id,
        author_email: user.email,
        content: `Sharing a resource: ${f.file_name}`,
        post_type: "resource",
        file_url: pub.publicUrl,
        file_name: f.file_name,
        status: "approved",
      });
      if (postError) throw postError;
      setSharedIds((prev) => new Set(prev).add(f.id));
    } catch (err) {
      setError(err.message || "Couldn't share that file.");
    } finally {
      setSharingId(null);
    }
  }

  if (authLoading) return null;

  return (
    <div className="fc-shell">
      <style>{CSS}</style>
      <div className="fc-topbar">
        <button type="button" className="fc-brand" onClick={() => navigate("/library")} title="Back to Homeroom">
          <img src="/logo-sentivo.png" alt="" className="fc-brand-logo" />entivo
        </button>
        <h1 className="fc-topbar-title">File Cabinet</h1>
      </div>

      <div className="fc-page">
        {!user ? (
          <p className="fc-signin">Sign in to use the File Cabinet.</p>
        ) : (
          <>
            {isAdmin && <p className="fc-admin-note">You're viewing every teacher's files as admin.</p>}
            {error && (
              <div className="fc-error">
                {error}
                <button type="button" className="fc-error-close" onClick={() => setError(null)} aria-label="Dismiss">&times;</button>
              </div>
            )}
            {CATEGORIES.map((cat) => {
              const catFiles = files.filter((f) => f.category === cat.key && (isAdmin || f.owner_id === user.id));
              return (
                <section className="fc-section" key={cat.key}>
                  <div className="fc-section-head">
                    <div>
                      <h2 className="fc-section-title">{cat.label}</h2>
                      <p className="fc-section-hint">{cat.hint}</p>
                    </div>
                    <label className="fc-upload-btn">
                      <UploadIcon />
                      {uploading === cat.key ? "Uploading…" : "Upload"}
                      <input type="file" hidden onChange={(e) => handleUpload(e, cat.key)} disabled={uploading === cat.key} />
                    </label>
                  </div>

                  {loading ? (
                    <p className="fc-empty">Loading…</p>
                  ) : catFiles.length === 0 ? (
                    <div className="fc-empty-state">
                      <FolderIcon />
                      <p>Nothing here yet.</p>
                    </div>
                  ) : (
                    <div className="fc-file-list">
                      {catFiles.map((f) => (
                        <div className="fc-file-row" key={f.id}>
                          <span className="fc-file-icon"><FileIcon /></span>
                          <button type="button" className="fc-file-name" onClick={() => handleOpen(f)} title="Open">
                            {f.file_name}
                          </button>
                          <span className="fc-file-meta">{formatSize(f.file_size)} · {timeAgo(f.created_at)}</span>
                          {cat.key === "material" && (
                            <button
                              type="button"
                              className="fc-file-share"
                              onClick={() => handleShare(f)}
                              disabled={sharingId === f.id || sharedIds.has(f.id)}
                            >
                              {sharedIds.has(f.id) ? "Shared ✓" : sharingId === f.id ? "Sharing…" : "Share to Community"}
                            </button>
                          )}
                          <button type="button" className="fc-file-delete" onClick={() => handleDelete(f)} title="Delete" aria-label="Delete">
                            <TrashIcon />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.fc-shell {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  min-height: 100vh;
  background: #FBFAF7;
  color: var(--ink);
  font-family: 'Quicksand', sans-serif;
}
.fc-shell * { box-sizing: border-box; }

.fc-topbar {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 28px; border-bottom: 1px solid var(--hair); background: var(--card);
}
.fc-brand {
  display: flex; align-items: center; flex-shrink: 0;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px; color: var(--ink);
  background: none; border: none; cursor: pointer; padding: 0;
}
.fc-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }
.fc-topbar-title { font-family: 'Fredoka', sans-serif; font-size: 16px; font-weight: 600; color: var(--ink); letter-spacing: 0.015em; margin: 0; }

.fc-page { max-width: 720px; margin: 0 auto; padding: 32px 24px 80px; }
.fc-signin { text-align: center; color: var(--muted); padding: 60px 0; }

.fc-admin-note {
  font-size: 12px; color: var(--navy); background: var(--navy-pale);
  border-radius: 10px; padding: 8px 14px; margin: 0 0 18px; text-align: center;
}
.fc-error {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  background: var(--coral-pale); color: var(--ink); border-radius: 12px; padding: 12px 16px;
  font-size: 13.5px; margin: 0 0 18px;
}
.fc-error-close { background: none; border: none; color: var(--muted); font-size: 18px; cursor: pointer; line-height: 1; padding: 0; }

.fc-section { margin: 0 0 32px; }
.fc-section-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin: 0 0 14px; }
.fc-section-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; margin: 0 0 3px; }
.fc-section-hint { font-size: 12px; color: var(--muted); margin: 0; max-width: 40ch; line-height: 1.4; }

.fc-upload-btn {
  display: flex; align-items: center; gap: 6px; flex-shrink: 0;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 12.5px;
  background: var(--coral); color: #fff; border-radius: 999px; padding: 9px 16px; cursor: pointer;
}
.fc-upload-btn:hover { filter: brightness(0.94); }
.fc-upload-btn svg { width: 14px; height: 14px; }

.fc-empty { font-size: 13px; color: var(--muted); }
.fc-empty-state {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 26px; border: 1.5px dashed var(--hair); border-radius: 14px; color: var(--muted);
}
.fc-empty-state svg { width: 24px; height: 24px; opacity: 0.5; }
.fc-empty-state p { margin: 0; font-size: 12.5px; }

.fc-file-list { display: flex; flex-direction: column; gap: 2px; }
.fc-file-row {
  display: flex; align-items: center; gap: 10px;
  background: var(--card); border: 1px solid var(--hair); border-radius: 12px; padding: 10px 12px; margin-bottom: 6px;
}
.fc-file-icon { flex-shrink: 0; color: var(--muted); display: flex; }
.fc-file-icon svg { width: 16px; height: 16px; }
.fc-file-name {
  flex: 1; min-width: 0; text-align: left; background: none; border: none; cursor: pointer;
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.fc-file-name:hover { color: var(--coral); }
.fc-file-meta { flex-shrink: 0; font-size: 11px; color: var(--muted); white-space: nowrap; }
.fc-file-share {
  flex-shrink: 0; font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 11px;
  color: var(--navy); background: var(--navy-pale); border: none; border-radius: 999px;
  padding: 5px 10px; cursor: pointer;
}
.fc-file-share:disabled { opacity: 0.6; cursor: default; }
.fc-file-delete {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%; border: none; background: none;
  color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.fc-file-delete:hover { background: var(--coral-pale); color: var(--coral); }
.fc-file-delete svg { width: 13px; height: 13px; }
`;
