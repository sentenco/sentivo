export default function ZoomOverlay({ active, onClose, children }) {
  if (!active) return null;
  return (
    <div className="zov-overlay" onClick={onClose}>
      <style>{CSS}</style>
      <div className="zov-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

const CSS = `
.zov-overlay {
  position: absolute;
  inset: 0;
  background: rgba(27, 42, 74, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  cursor: pointer;
  padding: 30px;
}
.zov-content {
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
}
`;
