import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getNotebookDesign } from "./notebookDesigns";

const PAPER_STYLES = ["blank", "ruled", "grid"];
const INK_COLORS = ["#2B2B2B", "#C0392B", "#1E5FBF", "#1E8F76", "#7C5CFC"];
const FONT_FACES = [
  { key: "hand", label: "Handwriting", family: "'Caveat', cursive" },
  { key: "print", label: "Print", family: "'Quicksand', sans-serif" },
];

export default function NotebookPage() {
  const { design: designKey } = useParams();
  const design = getNotebookDesign(designKey);
  const editableRef = useRef(null);

  const [fontSize, setFontSize] = useState(22);
  const [fontFace, setFontFace] = useState("hand");
  const [align, setAlign] = useState("left");
  const [paper, setPaper] = useState("blank");

  function exec(command, value = null) {
    editableRef.current?.focus();
    document.execCommand(command, false, value);
  }

  function handleClear() {
    if (editableRef.current) editableRef.current.innerHTML = "";
    editableRef.current?.focus();
  }

  if (!design) {
    return (
      <div className="nbp-missing">
        <style>{CSS}</style>
        This notebook design wasn't found.
      </div>
    );
  }

  const face = FONT_FACES.find((f) => f.key === fontFace) || FONT_FACES[0];

  return (
    <div className="nbp-shell" style={{ background: design.frame }}>
      <style>{CSS}</style>

      <div className="nbp-toolbar">
        <div className="nbp-tool-group">
          <label className="nbp-tool-label">Size</label>
          <input
            type="range"
            min="14"
            max="44"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="nbp-slider"
          />
        </div>

        <div className="nbp-tool-group">
          <select className="nbp-select" value={fontFace} onChange={(e) => setFontFace(e.target.value)}>
            {FONT_FACES.map((f) => (
              <option key={f.key} value={f.key}>{f.label}</option>
            ))}
          </select>
        </div>

        <div className="nbp-tool-group">
          <button type="button" className="nbp-btn" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("bold")}><b>B</b></button>
          <button type="button" className="nbp-btn" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("italic")}><i>I</i></button>
          <button type="button" className="nbp-btn" onMouseDown={(e) => e.preventDefault()} onClick={() => exec("underline")}><u>U</u></button>
        </div>

        <div className="nbp-tool-group">
          {["left", "center", "right", "justify"].map((a) => (
            <button
              key={a}
              type="button"
              className={`nbp-btn nbp-align-btn ${align === a ? "is-active" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => { setAlign(a); exec("justify" + a[0].toUpperCase() + a.slice(1)); }}
              title={a}
            >
              {a === "left" ? "⯇" : a === "center" ? "≡" : a === "right" ? "⯈" : "☰"}
            </button>
          ))}
        </div>

        <div className="nbp-tool-group">
          {INK_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              className="nbp-swatch"
              style={{ background: c }}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => exec("foreColor", c)}
              aria-label={`Color ${c}`}
            />
          ))}
        </div>

        <div className="nbp-tool-group">
          <select className="nbp-select" value={paper} onChange={(e) => setPaper(e.target.value)}>
            {PAPER_STYLES.map((p) => (
              <option key={p} value={p}>{p[0].toUpperCase() + p.slice(1)} paper</option>
            ))}
          </select>
        </div>

        <button type="button" className="nbp-clear-btn" onClick={handleClear}>Clear page</button>
      </div>

      <div className="nbp-stage">
        <div
          className="nbp-page"
          style={{
            aspectRatio: design.aspect,
            backgroundImage: `url(${design.image})`,
          }}
        >
          <div
            ref={editableRef}
            className={`nbp-editable nbp-paper--${paper}`}
            contentEditable
            suppressContentEditableWarning
            style={{
              top: `${design.safeArea.top}%`,
              right: `${design.safeArea.right}%`,
              bottom: `${design.safeArea.bottom}%`,
              left: `${design.safeArea.left}%`,
              fontSize: `${fontSize}px`,
              fontFamily: face.family,
              textAlign: align,
              color: design.ink,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Quicksand:wght@500;700&display=swap');

.nbp-missing {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  color: #666;
}

.nbp-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.nbp-shell * { box-sizing: border-box; }

.nbp-toolbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 8px 14px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.nbp-tool-group { display: flex; align-items: center; gap: 5px; }
.nbp-tool-label { font-family: 'Quicksand', sans-serif; font-size: 10.5px; font-weight: 700; color: #666; margin-right: 2px; }

.nbp-slider { width: 90px; accent-color: #1E8F76; }

.nbp-select {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #2B2B2B;
  background: #F1F3F2;
  border: 1px solid #DCE3E0;
  border-radius: 8px;
  padding: 5px 8px;
  cursor: pointer;
}

.nbp-btn {
  min-width: 28px;
  height: 28px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: #2B2B2B;
  background: #F1F3F2;
  border: 1px solid #DCE3E0;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
}
.nbp-btn:hover { background: #E5EAE8; }
.nbp-align-btn.is-active { background: #1E8F76; color: #FFFFFF; border-color: #1E8F76; }

.nbp-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.12);
  cursor: pointer;
  padding: 0;
}

.nbp-clear-btn {
  margin-left: auto;
  font-family: 'Quicksand', sans-serif;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #C0392B;
  background: rgba(192,57,43,0.08);
  border: 1px solid rgba(192,57,43,0.25);
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
.nbp-clear-btn:hover { background: rgba(192,57,43,0.15); }

.nbp-stage {
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  overflow: auto;
}

.nbp-page {
  position: relative;
  height: 100%;
  max-height: 100%;
  width: auto;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  box-shadow: 0 20px 46px rgba(0,0,0,0.28);
}

.nbp-editable {
  position: absolute;
  overflow-y: auto;
  outline: none;
  line-height: 1.5;
  word-wrap: break-word;
}
.nbp-editable:empty::before {
  content: "Start writing…";
  opacity: 0.35;
}

.nbp-paper--ruled {
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent calc(1.5em - 1px),
    rgba(0,0,0,0.14) calc(1.5em - 1px),
    rgba(0,0,0,0.14) 1.5em
  );
  background-attachment: local;
}
.nbp-paper--grid {
  background-image:
    repeating-linear-gradient(to bottom, transparent 0, transparent 23px, rgba(0,0,0,0.10) 23px, rgba(0,0,0,0.10) 24px),
    repeating-linear-gradient(to right, transparent 0, transparent 23px, rgba(0,0,0,0.10) 23px, rgba(0,0,0,0.10) 24px);
  background-attachment: local;
}

@media (max-width: 560px) {
  .nbp-toolbar { gap: 8px; padding: 6px 10px; }
  .nbp-tool-label { display: none; }
}
`;
