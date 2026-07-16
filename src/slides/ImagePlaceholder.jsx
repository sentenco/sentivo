export default function ImagePlaceholder({ note, compact }) {
  return (
    <div className={`img-ph ${compact ? "img-ph--compact" : ""}`}>
      <style>{CSS}</style>
      <span className="img-ph-icon" aria-hidden="true">
        🖼
      </span>
      <span className="img-ph-label">Image needed</span>
      {note && <span className="img-ph-note">{note}</span>}
    </div>
  );
}

const CSS = `
.img-ph {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
  padding: 16px;
  border-radius: inherit;
  border: 2px dashed var(--k-accent, #C9CBD1);
  background: var(--k-secondary, #F7F6F3);
  box-sizing: border-box;
}
.img-ph-icon { font-size: 26px; opacity: 0.55; }
.img-ph-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #1B2A4A;
}
.img-ph-note {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 11.5px;
  line-height: 1.4;
  color: #1B2A4A;
  opacity: 0.75;
  max-width: 90%;
}
.img-ph--compact { gap: 3px; padding: 10px; }
.img-ph--compact .img-ph-icon { font-size: 18px; }
.img-ph--compact .img-ph-label { font-size: 10px; }
.img-ph--compact .img-ph-note { font-size: 10px; max-width: 95%; }

.is-adult .img-ph {
  border-radius: 4px;
  border: 1px dashed #B7ADA0;
  background: #F7F5EF;
}
.is-adult .img-ph-icon { opacity: 0.4; }
.is-adult .img-ph-label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.09em;
  color: #8A8272;
}
.is-adult .img-ph-note {
  font-family: 'Inter', sans-serif;
  color: #8A8272;
  opacity: 1;
}
`;
