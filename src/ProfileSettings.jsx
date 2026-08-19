import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

function initials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "T") + (parts[1]?.[0] || "")).toUpperCase();
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 6.8a1.5 1.5 0 0 1 1.5-1.5h1.3l.9-1.5h5.6l.9 1.5H14a1.5 1.5 0 0 1 1.5 1.5v6.7a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5Z" />
      <circle cx="9" cy="10" r="2.8" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

function SeedIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="10" cy="11.2" rx="3" ry="4" />
      <path d="M10 7.2c0-2 1.5-3.2 3-3.5" />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17V9.5" />
      <path d="M10 9.8C10 9.8 5.8 9.8 5.8 5.5c0 0 4.2 0 4.2 4.3Z" />
      <path d="M10 9.8c0 0 4.2 0 4.2-4.3 0 0-4.2 0-4.2 4.3Z" />
    </svg>
  );
}

function SaplingIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17V5.5" />
      <path d="M10 11.5c0 0-3.2 0-3.2-3 0 0 3.2 0 3.2 3Z" />
      <path d="M10 11.5c0 0 3.2 0 3.2-3 0 0-3.2 0-3.2 3Z" />
      <path d="M10 8c0 0-2.3 0-2.3-2.2 0 0 2.3 0 2.3 2.2Z" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 17v-4.3" />
      <circle cx="10" cy="8" r="4.6" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="11.8" r="4.3" />
      <path d="M7.6 8 5.2 3.3h3.1l1.7 3.5M12.4 8l2.4-4.7h-3.1l-1.7 3.5" />
      <path d="M8.3 11.7 9.5 13l2.2-2.6" />
    </svg>
  );
}

// Five tiers, matching the user's grouping. Boundaries are chosen so every
// year value falls in exactly one tier -- "5-10 Years" reads naturally as a
// bucket label even though the previous tier's "3-5" already claims 5.
export function teachingBadge(years) {
  if (years === null || years === undefined || years === "") return null;
  const n = Number(years);
  if (Number.isNaN(n) || n < 0) return null;
  if (n < 1) return { Icon: SeedIcon, label: "Less than 1 Year", color: "#8A8271", pale: "#F1EDE3" };
  if (n < 3) return { Icon: SproutIcon, label: "1–2 Years", color: "#2E8F7A", pale: "#E3F3EE" };
  if (n < 6) return { Icon: SaplingIcon, label: "3–5 Years", color: "#A5730F", pale: "#FCEFD6" };
  if (n <= 10) return { Icon: TreeIcon, label: "5–10 Years", color: "#FF6B4A", pale: "#FDECE5" };
  return { Icon: TrophyIcon, label: "10+ Years", color: "#6E5FC4", pale: "#E7E4F4" };
}

export default function ProfileSettings({ onClose, onSaved }) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [yearsTeaching, setYearsTeaching] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("display_name, avatar_url, country, years_teaching")
        .eq("id", user.id)
        .maybeSingle();
      setName(data?.display_name || localStorage.getItem("sentivo_teacher_name") || "");
      setCountry(data?.country || "");
      setYearsTeaching(data?.years_teaching ?? "");
      setAvatarUrl(data?.avatar_url || null);
      setLoading(false);
    })();
  }, [user]);

  async function handleAvatarUpload(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !user) return;
    setError(null);
    setUploading(true);
    const path = `${user.id}/avatar-${crypto.randomUUID()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("community-uploads").upload(path, file);
    setUploading(false);
    if (uploadError) { setError(uploadError.message || "Photo upload failed."); return; }
    const { data: pub } = supabase.storage.from("community-uploads").getPublicUrl(path);
    setAvatarUrl(pub.publicUrl);
  }

  async function handleSave() {
    if (!user || saving) return;
    setSaving(true);
    setError(null);
    const trimmedName = name.trim();
    const { error: saveError } = await supabase.from("profiles").upsert({
      id: user.id,
      display_name: trimmedName || null,
      avatar_url: avatarUrl,
      country: country.trim() || null,
      years_teaching: yearsTeaching === "" ? null : Number(yearsTeaching),
    });
    setSaving(false);
    if (saveError) { setError(saveError.message || "Couldn't save your profile."); return; }
    localStorage.setItem("sentivo_teacher_name", trimmedName);
    onSaved?.(avatarUrl);
    onClose();
  }

  const badge = teachingBadge(yearsTeaching);

  return (
    <div className="ps-overlay" onClick={onClose}>
      <style>{CSS}</style>
      <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="ps-close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        {loading ? (
          <p className="ps-loading">Loading…</p>
        ) : (
          <>
            <div className="ps-head">
              <label className="ps-avatar-upload" title="Change photo">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="" className="ps-avatar-img" />
                ) : (
                  <span className="ps-avatar-fallback">{initials(name)}</span>
                )}
                <span className="ps-avatar-overlay">
                  <CameraIcon />
                </span>
                <input type="file" accept="image/*" hidden onChange={handleAvatarUpload} disabled={uploading} />
              </label>
              <h2 className="ps-name-preview">Teacher {name.trim() || "…"}</h2>
              <p className="ps-sub">{uploading ? "Uploading photo…" : "How other teachers see you in the Community"}</p>
            </div>

            <div className="ps-form">
              <label className="ps-field">
                <span className="ps-label">Name</span>
                <div className="ps-name-row">
                  <span className="ps-name-prefix">Teacher</span>
                  <input
                    type="text"
                    className="ps-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="your name"
                    maxLength={60}
                  />
                </div>
              </label>

              <div className="ps-field-row">
                <label className="ps-field">
                  <span className="ps-label">Country</span>
                  <input
                    type="text"
                    className="ps-input"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. Philippines"
                    maxLength={60}
                  />
                </label>
                <label className="ps-field">
                  <span className="ps-label">Years teaching ESL</span>
                  <input
                    type="number"
                    className="ps-input"
                    min="0"
                    max="80"
                    value={yearsTeaching}
                    onChange={(e) => setYearsTeaching(e.target.value)}
                    placeholder="e.g. 3"
                  />
                </label>
              </div>

              {badge && (
                <div className="ps-badge" style={{ background: badge.pale, color: badge.color }}>
                  <span className="ps-badge-icon"><badge.Icon /></span>
                  {badge.label}
                </div>
              )}

              {error && <p className="ps-error">{error}</p>}

              <button type="button" className="ps-save" disabled={saving} onClick={handleSave}>
                {saving ? "Saving…" : "Save profile"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.ps-overlay {
  position: fixed; inset: 0; background: rgba(43,42,74,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000; padding: 20px;
}
.ps-modal {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --hair: rgba(43,42,74,0.09);
  background: var(--card); border-radius: 24px; border-top: 4px solid var(--coral);
  padding: 32px 30px 28px; max-width: 420px; width: 100%; position: relative;
  font-family: 'Quicksand', sans-serif; color: var(--ink);
  box-shadow: 0 24px 60px rgba(43,42,74,0.25);
}
.ps-modal * { box-sizing: border-box; }

.ps-close {
  position: absolute; top: 16px; right: 16px; width: 28px; height: 28px;
  border-radius: 50%; background: none; border: none; color: var(--muted); cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.ps-close:hover { background: var(--coral-pale); color: var(--coral); }
.ps-close svg { width: 13px; height: 13px; }

.ps-loading { font-size: 13.5px; color: var(--muted); text-align: center; padding: 20px 0; }

.ps-head { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; margin-bottom: 22px; }

.ps-avatar-upload {
  position: relative; width: 84px; height: 84px; border-radius: 50%; cursor: pointer;
  margin-bottom: 10px; flex-shrink: 0;
}
.ps-avatar-img, .ps-avatar-fallback {
  width: 84px; height: 84px; border-radius: 50%; object-fit: cover; display: flex;
  align-items: center; justify-content: center; background: var(--coral); color: #fff;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 26px; border: 3px solid var(--coral-pale);
}
.ps-avatar-overlay {
  position: absolute; inset: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  background: rgba(43,42,74,0.0); color: #fff; opacity: 0; transition: opacity 0.15s ease, background 0.15s ease;
}
.ps-avatar-overlay svg { width: 20px; height: 20px; }
.ps-avatar-upload:hover .ps-avatar-overlay { opacity: 1; background: rgba(43,42,74,0.45); }

.ps-name-preview { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 21px; margin: 2px 0 0; color: var(--ink); }
.ps-sub { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: var(--muted); margin: 2px 0 0; }

.ps-form { display: flex; flex-direction: column; gap: 14px; }
.ps-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.ps-field-row { display: flex; gap: 12px; }
.ps-field-row .ps-field { flex: 1; min-width: 0; }
.ps-label {
  font-family: 'Quicksand', sans-serif; font-size: 10.5px; font-weight: 800; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--muted);
}
.ps-input {
  width: 100%; border: 1px solid var(--hair); border-radius: 12px; padding: 10px 12px;
  font: inherit; font-size: 14px; color: var(--ink); background: #FDFCFA; outline: none;
}
.ps-input:focus { border-color: var(--coral); }
.ps-name-row { display: flex; align-items: center; gap: 8px; }
.ps-name-prefix { font-family: 'Quicksand', sans-serif; font-size: 14px; font-weight: 700; color: var(--muted); flex-shrink: 0; }
.ps-name-row .ps-input { flex: 1; min-width: 0; }

.ps-badge {
  display: flex; align-items: center; gap: 7px; width: fit-content;
  border-radius: 999px; padding: 7px 16px 7px 12px;
  font-family: 'Quicksand', sans-serif; font-size: 12.5px; font-weight: 700;
}
.ps-badge-icon { display: flex; }
.ps-badge-icon svg { width: 15px; height: 15px; }

.ps-error { font-family: 'Quicksand', sans-serif; color: #C0392B; font-size: 12.5px; margin: 0; }
.ps-save {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 14px;
  background: var(--coral); color: #fff; border: none; border-radius: 999px;
  padding: 12px; cursor: pointer; margin-top: 2px;
}
.ps-save:hover { background: #E0502F; }
.ps-save:disabled { opacity: 0.5; cursor: default; }
`;
