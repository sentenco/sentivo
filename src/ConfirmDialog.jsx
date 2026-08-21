// Shared, branded replacement for window.confirm() — every delete-style
// confirmation in the app should use this instead of the native browser
// dialog, which looks jarring against the rest of the UI.

function WarnIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3.5 21.5 20h-19L12 3.5Z" />
      <path d="M12 9.5v4.2" />
      <circle cx="12" cy="16.8" r="0.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  danger = true,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;
  return (
    <div className="cfd-overlay" onClick={onCancel}>
      <style>{CSS}</style>
      <div className="cfd-modal" onClick={(e) => e.stopPropagation()}>
        <span className={`cfd-icon${danger ? " cfd-icon--danger" : ""}`}><WarnIcon /></span>
        <h3 className="cfd-title">{title}</h3>
        {message && <p className="cfd-message">{message}</p>}
        <div className="cfd-actions">
          <button type="button" className="cfd-cancel" onClick={onCancel}>{cancelLabel}</button>
          <button type="button" className={`cfd-confirm${danger ? " cfd-confirm--danger" : ""}`} onClick={onConfirm}>{confirmLabel}</button>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

.cfd-overlay {
  position: fixed; inset: 0; background: rgba(43,42,74,0.45);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000; padding: 20px;
}
.cfd-modal {
  --ink: #2B2A4A;
  --card: #FFFFFF;
  --muted: #8B84A3;
  --coral: #FF6B4A;
  --coral-pale: #FDECE5;
  --navy: #1B2A4A;
  --navy-pale: #E9ECF3;
  --hair: rgba(43,42,74,0.09);
  background: var(--card); border-radius: 22px;
  padding: 26px 26px 22px; max-width: 360px; width: 100%;
  font-family: 'Quicksand', sans-serif; color: var(--ink); text-align: center;
  box-shadow: 0 24px 60px rgba(43,42,74,0.25);
}
.cfd-modal * { box-sizing: border-box; }
.cfd-icon {
  display: flex; align-items: center; justify-content: center; margin: 0 auto 14px;
  width: 46px; height: 46px; border-radius: 50%; background: var(--navy-pale); color: var(--navy);
}
.cfd-icon--danger { background: var(--coral-pale); color: var(--coral); }
.cfd-icon svg { width: 22px; height: 22px; }
.cfd-title { font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 17px; margin: 0 0 6px; }
.cfd-message { font-size: 13px; color: var(--muted); line-height: 1.55; margin: 0 0 20px; }
.cfd-actions { display: flex; justify-content: center; gap: 10px; }
.cfd-cancel {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; color: var(--muted);
  background: var(--hair); border: none; border-radius: 999px; padding: 9px 20px; cursor: pointer;
}
.cfd-cancel:hover { color: var(--ink); }
.cfd-confirm {
  font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px;
  background: var(--navy); color: #fff; border: none; border-radius: 999px;
  padding: 9px 20px; cursor: pointer;
}
.cfd-confirm--danger { background: var(--coral); }
.cfd-confirm:hover { filter: brightness(0.94); }
`;
