import { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { supabase } from "./supabaseClient";

function initials(name) {
  const parts = (name || "").trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "T") + (parts[1]?.[0] || "")).toUpperCase();
}

function teachingBadge(years) {
  if (years === null || years === undefined || years === "") return null;
  const n = Number(years);
  if (Number.isNaN(n) || n < 0) return null;
  if (n < 2) return { emoji: "🌱", label: "New Teacher" };
  if (n < 5) return { emoji: "⭐", label: "Experienced Teacher" };
  return { emoji: "🏆", label: "Veteran Teacher" };
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
      <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ps-close" onClick={onClose} aria-label="Close">&times;</button>
        <h2>Your profile</h2>
        <p className="ps-sub">How other teachers see you in the Community.</p>

        {loading ? (
          <p className="ps-loading">Loading…</p>
        ) : (
          <div className="ps-form">
            <label className="ps-avatar-upload" title="Change photo">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className="ps-avatar-img" />
              ) : (
                <span className="ps-avatar-fallback">{initials(name)}</span>
              )}
              <span className="ps-avatar-edit">{uploading ? "Uploading…" : "Change photo"}</span>
              <input type="file" accept="image/*" hidden onChange={handleAvatarUpload} disabled={uploading} />
            </label>

            <label className="ps-field">
              Name
              <div className="ps-name-row">
                <span className="ps-name-prefix">Teacher</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  maxLength={60}
                />
              </div>
            </label>

            <label className="ps-field">
              Country
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. Philippines"
                maxLength={60}
              />
            </label>

            <label className="ps-field">
              Years teaching ESL
              <input
                type="number"
                min="0"
                max="80"
                value={yearsTeaching}
                onChange={(e) => setYearsTeaching(e.target.value)}
                placeholder="e.g. 3"
              />
            </label>

            {badge && (
              <div className="ps-badge">
                <span className="ps-badge-emoji">{badge.emoji}</span>
                {badge.label}
              </div>
            )}

            {error && <p className="ps-error">{error}</p>}

            <button type="button" className="ps-save" disabled={saving} onClick={handleSave}>
              {saving ? "Saving…" : "Save profile"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        .ps-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 20px;
        }
        .ps-modal {
          background: white; border-radius: 16px; padding: 32px;
          max-width: 380px; width: 100%; position: relative;
          font-family: 'Inter', sans-serif;
        }
        .ps-close {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; font-size: 22px;
          cursor: pointer; color: #999; line-height: 1;
        }
        .ps-modal h2 { font-size: 20px; margin: 0 0 6px; color: #1B2A4A; }
        .ps-sub { font-size: 13.5px; color: #777; margin: 0 0 20px; }
        .ps-loading { font-size: 13.5px; color: #777; }
        .ps-form { display: flex; flex-direction: column; gap: 14px; }

        .ps-avatar-upload {
          align-self: center; display: flex; flex-direction: column; align-items: center; gap: 8px;
          cursor: pointer;
        }
        .ps-avatar-img, .ps-avatar-fallback {
          width: 72px; height: 72px; border-radius: 50%; object-fit: cover;
          display: flex; align-items: center; justify-content: center;
          background: #FF7A59; color: white; font-weight: 700; font-size: 22px;
          font-family: 'Inter', sans-serif;
        }
        .ps-avatar-edit { font-size: 12px; font-weight: 600; color: #FF7A59; }

        .ps-field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: #444; }
        .ps-field input {
          padding: 10px 12px; border: 1px solid #DEDAD0; border-radius: 8px;
          font-size: 14px; outline: none; font-family: inherit;
        }
        .ps-field input:focus { border-color: #FF7A59; }
        .ps-name-row { display: flex; align-items: center; gap: 8px; }
        .ps-name-prefix { font-size: 14px; color: #777; flex-shrink: 0; }
        .ps-name-row input { flex: 1; min-width: 0; }

        .ps-badge {
          display: flex; align-items: center; gap: 6px; width: fit-content;
          background: #FDECE5; color: #FF7A59; border-radius: 999px; padding: 6px 14px;
          font-size: 12.5px; font-weight: 700;
        }
        .ps-badge-emoji { font-size: 14px; }

        .ps-error { color: #C0392B; font-size: 13px; margin: 0; }
        .ps-save {
          background: #FF7A59; color: white; border: none; border-radius: 8px;
          padding: 11px; font-weight: 600; font-size: 14px; cursor: pointer;
        }
        .ps-save:disabled { opacity: 0.6; cursor: default; }
      `}</style>
    </div>
  );
}
