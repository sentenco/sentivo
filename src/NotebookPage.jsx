import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getNotebookDesign, NOTEBOOK_STAGE_MARGIN } from "./notebookDesigns";

const PAPER_STYLES = ["blank", "ruled", "grid"];
const INK_COLORS = ["#1A1A1A", "#E4322B", "#2B6FE0", "#F2C230"];
const FONT_FACES = [
  { key: "hand", label: "Handwriting", family: "'Caveat', cursive" },
  { key: "print", label: "Print", family: "'Quicksand', sans-serif" },
  { key: "bold", label: "Bold Print", family: "'Fredoka', sans-serif" },
];

function makeLine(id, overrides = {}) {
  return {
    id,
    text: "",
    fontSize: 22,
    fontFamily: "hand",
    align: "left",
    color: "#1A1A1A",
    bold: false,
    italic: false,
    underline: false,
    ...overrides,
  };
}

export default function NotebookPage() {
  const { design: designKey } = useParams();
  const design = getNotebookDesign(designKey);
  const nextId = useRef(2);
  const inputRefs = useRef(new Map());

  const [lines, setLines] = useState(() => [makeLine(1, { color: design?.ink || "#1A1A1A" })]);
  const [activeId, setActiveId] = useState(1);
  const [paper, setPaper] = useState("blank");

  useEffect(() => {
    inputRefs.current.get(activeId)?.focus();
  }, [activeId]);

  if (!design) {
    return (
      <div className="nbp-missing">
        <style>{CSS}</style>
        This notebook design wasn't found.
      </div>
    );
  }

  const activeIndex = lines.findIndex((l) => l.id === activeId);
  const activeLine = lines[activeIndex] || lines[0];

  function updateActiveLine(patch) {
    setLines((ls) => ls.map((l) => (l.id === activeId ? { ...l, ...patch } : l)));
  }

  function updateLineText(id, text) {
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, text } : l)));
  }

  function handleLineKeyDown(e, id) {
    const idx = lines.findIndex((l) => l.id === id);
    if (e.key === "Enter") {
      e.preventDefault();
      const current = lines[idx];
      const newLine = { ...current, id: nextId.current++, text: "" };
      setLines((ls) => {
        const next = [...ls];
        next.splice(idx + 1, 0, newLine);
        return next;
      });
      setActiveId(newLine.id);
    } else if (e.key === "Backspace" && lines[idx].text === "" && lines.length > 1) {
      e.preventDefault();
      const fallback = lines[idx - 1] || lines[idx + 1];
      setLines((ls) => ls.filter((l) => l.id !== id));
      setActiveId(fallback.id);
    } else if (e.key === "ArrowUp" && idx > 0) {
      e.preventDefault();
      setActiveId(lines[idx - 1].id);
    } else if (e.key === "ArrowDown" && idx < lines.length - 1) {
      e.preventDefault();
      setActiveId(lines[idx + 1].id);
    }
  }

  function handleClear() {
    const fresh = makeLine(nextId.current++, { color: design.ink });
    setLines([fresh]);
    setActiveId(fresh.id);
  }

  return (
    <div className="nbp-shell" style={{ background: design.frame }}>
      <style>{CSS}</style>

      <div className="nbp-toolbar-wrap">
        <div className="nbp-toolbar-handle">✏️ Tools · line {activeIndex + 1}</div>
        <div className="nbp-toolbar-panel">
          <div className="nbp-tool-group">
            <label className="nbp-tool-label">Size</label>
            <input
              type="range"
              min="14"
              max="44"
              value={activeLine.fontSize}
              onChange={(e) => updateActiveLine({ fontSize: Number(e.target.value) })}
              className="nbp-slider"
            />
          </div>

          <div className="nbp-tool-group">
            <select className="nbp-select" value={activeLine.fontFamily} onChange={(e) => updateActiveLine({ fontFamily: e.target.value })}>
              {FONT_FACES.map((f) => (
                <option key={f.key} value={f.key}>{f.label}</option>
              ))}
            </select>
          </div>

          <div className="nbp-tool-group">
            <button
              type="button"
              className={`nbp-btn ${activeLine.bold ? "is-active" : ""}`}
              onClick={() => updateActiveLine({ bold: !activeLine.bold })}
            ><b>B</b></button>
            <button
              type="button"
              className={`nbp-btn ${activeLine.italic ? "is-active" : ""}`}
              onClick={() => updateActiveLine({ italic: !activeLine.italic })}
            ><i>I</i></button>
            <button
              type="button"
              className={`nbp-btn ${activeLine.underline ? "is-active" : ""}`}
              onClick={() => updateActiveLine({ underline: !activeLine.underline })}
            ><u>U</u></button>
          </div>

          <div className="nbp-tool-group">
            {["left", "center", "right", "justify"].map((a) => (
              <button
                key={a}
                type="button"
                className={`nbp-btn nbp-align-btn ${activeLine.align === a ? "is-active" : ""}`}
                onClick={() => updateActiveLine({ align: a })}
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
                className={`nbp-swatch ${activeLine.color === c ? "is-active" : ""}`}
                style={{ background: c }}
                onClick={() => updateActiveLine({ color: c })}
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
            className={`nbp-lines nbp-paper--${paper}`}
            style={{
              top: `${design.safeArea.top}%`,
              right: `${design.safeArea.right}%`,
              bottom: `${design.safeArea.bottom}%`,
              left: `${design.safeArea.left}%`,
            }}
          >
            {lines.map((line) => {
              const face = FONT_FACES.find((f) => f.key === line.fontFamily) || FONT_FACES[0];
              return (
                <input
                  key={line.id}
                  type="text"
                  className={`nbp-line ${activeId === line.id ? "is-active" : ""}`}
                  value={line.text}
                  placeholder="Write here…"
                  ref={(el) => {
                    if (el) inputRefs.current.set(line.id, el);
                    else inputRefs.current.delete(line.id);
                  }}
                  onFocus={() => setActiveId(line.id)}
                  onChange={(e) => updateLineText(line.id, e.target.value)}
                  onKeyDown={(e) => handleLineKeyDown(e, line.id)}
                  style={{
                    fontSize: `${line.fontSize}px`,
                    fontFamily: face.family,
                    textAlign: line.align,
                    color: line.color,
                    fontWeight: line.bold ? 700 : 400,
                    fontStyle: line.italic ? "italic" : "normal",
                    textDecoration: line.underline ? "underline" : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&display=swap');

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
  position: relative;
  box-sizing: border-box;
}
.nbp-shell * { box-sizing: border-box; }

.nbp-toolbar-wrap {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nbp-toolbar-handle {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  background: #1E8F76;
  border-radius: 999px;
  padding: 6px 14px;
  box-shadow: 0 6px 16px rgba(30,143,118,0.35);
  user-select: none;
  cursor: default;
  transition: opacity 0.15s ease;
  white-space: nowrap;
}
.nbp-toolbar-wrap:hover .nbp-toolbar-handle { opacity: 0; height: 0; padding-top: 0; padding-bottom: 0; overflow: hidden; }

.nbp-toolbar-panel {
  margin-top: 6px;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 14px;
  background: #FFFFFF;
  border: 1px solid #E1F0EA;
  border-radius: 14px;
  padding: 0 16px;
  box-shadow: 0 12px 30px rgba(30,143,118,0.18);
  transition: max-height 0.22s ease, opacity 0.18s ease, padding 0.22s ease;
}
.nbp-toolbar-wrap:hover .nbp-toolbar-panel {
  max-height: 260px;
  width: max-content;
  max-width: 88vw;
  opacity: 1;
  pointer-events: auto;
  padding: 12px 16px;
}

.nbp-tool-group { display: flex; align-items: center; gap: 5px; }
.nbp-tool-label { font-family: 'Quicksand', sans-serif; font-size: 10.5px; font-weight: 700; color: #5A6E68; margin-right: 2px; }

.nbp-slider { width: 80px; accent-color: #1E8F76; }

.nbp-select {
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #1B2B27;
  background: #F1F6F4;
  border: 1px solid #DCE9E4;
  border-radius: 8px;
  padding: 5px 8px;
  cursor: pointer;
}

.nbp-btn {
  min-width: 28px;
  height: 28px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: #1B2B27;
  background: #F1F6F4;
  border: 1px solid #DCE9E4;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
}
.nbp-btn:hover { background: #E1F0EA; }
.nbp-btn.is-active { background: #1E8F76; color: #FFFFFF; border-color: #1E8F76; }

.nbp-swatch {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(0,0,0,0.12);
  cursor: pointer;
  padding: 0;
}
.nbp-swatch.is-active { border-color: #1E8F76; box-shadow: 0 0 0 2px rgba(30,143,118,0.25); }

.nbp-clear-btn {
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
  white-space: nowrap;
}
.nbp-clear-btn:hover { background: rgba(192,57,43,0.15); }

.nbp-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${NOTEBOOK_STAGE_MARGIN}px;
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

.nbp-lines {
  position: absolute;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.nbp-line {
  width: 100%;
  flex-shrink: 0;
  border: none;
  outline: none;
  background: transparent;
  line-height: 1.5;
  padding: 1px 3px;
  border-radius: 4px;
}
.nbp-line::placeholder { opacity: 0.32; }
.nbp-line.is-active { background: rgba(30,143,118,0.07); }

.nbp-paper--ruled .nbp-line { border-bottom: 1px solid rgba(0,0,0,0.16); }
.nbp-paper--grid {
  background-image:
    repeating-linear-gradient(to bottom, transparent 0, transparent 23px, rgba(0,0,0,0.10) 23px, rgba(0,0,0,0.10) 24px),
    repeating-linear-gradient(to right, transparent 0, transparent 23px, rgba(0,0,0,0.10) 23px, rgba(0,0,0,0.10) 24px);
}

@media (max-width: 560px) {
  .nbp-toolbar-panel { gap: 8px; }
  .nbp-tool-label { display: none; }
}
`;
