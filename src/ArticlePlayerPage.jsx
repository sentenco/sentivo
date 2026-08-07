import { useState, useRef, useLayoutEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];
const MAX_FONT_SIZE = 16.5;
const MIN_FONT_SIZE = 10.5;

function Gloss({ word, pos, def, glossKey, openKey, setOpenKey }) {
  const isOpen = openKey === glossKey;
  return (
    <span
      className={`app-gloss ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenKey(isOpen ? null : glossKey);
      }}
    >
      {word}
      <span className="app-tip">
        <b>{word}</b>
        <span className="app-pos">{pos}</span>
        <br />
        {def}
      </span>
    </span>
  );
}

function Paragraph({ parts, blockIdx, openKey, setOpenKey }) {
  return (
    <p>
      {parts.map((part, i) => {
        if (part.g !== undefined) {
          return (
            <Gloss
              key={i}
              word={part.g}
              pos={part.pos}
              def={part.def}
              glossKey={`${blockIdx}-${i}`}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          );
        }
        if (part.c !== undefined) {
          return null;
        }
        return <span key={i}>{part.t}</span>;
      })}
    </p>
  );
}

// Renders a title with the last word italicized, matching the reference
// magazine layout ("THE ART OF STYLE" -> "STYLE" in italic).
function StyledTitle({ title }) {
  const words = title.split(" ");
  const last = words.pop();
  return (
    <>
      {words.join(" ")} <em>{last}</em>
    </>
  );
}

export default function ArticlePlayerPage() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const [searchParams] = useSearchParams();
  const editionParam = searchParams.get("edition");
  const [edition, setEdition] = useState(EDITION_KEYS.includes(editionParam) ? editionParam : "polished");
  const [openKey, setOpenKey] = useState(null);
  const columnsRef = useRef(null);

  // Shrinks the article font-size until the text fits within the fixed
  // page's two columns (no horizontal spillover into a hidden 3rd column),
  // instead of relying on a single fixed size that might clip longer
  // editions or overflow shorter windows.
  useLayoutEffect(() => {
    const el = columnsRef.current;
    if (!el) return;
    let size = MAX_FONT_SIZE;
    el.style.fontSize = `${size}px`;
    while (el.scrollWidth > el.clientWidth + 1 && size > MIN_FONT_SIZE) {
      size -= 0.5;
      el.style.fontSize = `${size}px`;
    }
  });

  if (!article || !article.ready) {
    return (
      <div className="app-shell">
        <style>{CSS}</style>
        <div className="app-missing">This article isn't published yet.</div>
      </div>
    );
  }

  const ed = article.editions[edition];
  const publishedLabel = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })
    : null;

  return (
    <div className="app-shell" onClick={() => setOpenKey(null)}>
      <style>{CSS}</style>

      <div className="app-editions">
        {EDITION_KEYS.map((k) => (
          <button
            key={k}
            type="button"
            className={`app-ed-btn ${edition === k ? "is-active" : ""}`}
            onClick={(e) => { e.stopPropagation(); setEdition(k); }}
          >
            {article.editions[k].label}
          </button>
        ))}
      </div>

      <div className="app-page">
        <div className="app-masthead">
          <img className="app-masthead-logo" src="/logo-sentivo.png" alt="" />
          <div className="app-masthead-kicker-row">
            <span className="app-masthead-rule" />
            <span className="app-masthead-kicker">The Sentivo</span>
            <span className="app-masthead-rule" />
          </div>
          <div className="app-masthead-word">Gazette</div>
          <div className="app-masthead-underline" />
          <div className="app-masthead-tagline">News, Ideas &amp; Perspectives</div>
        </div>

        <h1 className="app-title"><StyledTitle title={article.title} /></h1>

        <div className="app-byline">
          {publishedLabel && <span>{publishedLabel}</span>}
          {publishedLabel && <span className="app-dot">·</span>}
          <span>{article.topicTitle}</span>
        </div>

        <div className="app-columns" ref={columnsRef}>
          {ed.blocks.map((block, i) =>
            block.type === "quote" ? (
              <blockquote key={i} className="app-pullquote">“{block.text}”</blockquote>
            ) : (
              <Paragraph
                key={i}
                parts={block.parts}
                blockIdx={i}
                openKey={openKey}
                setOpenKey={setOpenKey}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

.app-shell {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #FFFFFF;
  color: #171717;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.app-shell * { box-sizing: border-box; }

.app-missing { padding: 60px; text-align: center; font-family: 'Source Serif 4', serif; color: #8A8578; }

.app-editions {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 13px 8px;
  background: #1B2A4A;
}
.app-ed-btn {
  position: relative;
  font-family: 'Source Serif 4', serif;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  background: none;
  border: none;
  padding: 6px 16px;
  cursor: pointer;
}
.app-ed-btn:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 20%;
  bottom: 20%;
  width: 1px;
  background: rgba(255,255,255,0.18);
}
.app-ed-btn.is-active { color: #FFFFFF; }
.app-ed-btn.is-active::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%);
  width: 56%;
  height: 2px;
  background: #FF6B4A;
}

.app-page {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 16px;
  overflow: hidden;
}

.app-masthead {
  flex-shrink: 0;
  text-align: center;
  padding: clamp(16px, 2.6vh, 26px) 24px clamp(10px, 1.6vh, 16px);
}
.app-masthead-logo { height: clamp(20px, 2.6vh, 26px); width: auto; display: inline-block; margin-bottom: 8px; }
.app-masthead-kicker-row { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 2px; }
.app-masthead-rule { flex: 0 1 44px; height: 1px; background: #1B2A4A; opacity: 0.45; }
.app-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: #1B2A4A;
}
.app-masthead-word {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(42px, 7.2vh, 68px);
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1B2A4A;
  line-height: 1;
  margin: 2px 0 10px;
}
.app-masthead-underline { width: clamp(150px, 28%, 240px); height: 2px; background: #FF6B4A; margin: 0 auto 8px; }
.app-masthead-tagline {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 10.5px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #1B2A4A;
  opacity: 0.75;
}

.app-title {
  flex-shrink: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(32px, 4.6vh, 42px);
  line-height: 1.16;
  letter-spacing: 0;
  text-align: center;
  text-transform: none;
  margin: clamp(14px, 2.2vh, 20px) 24px clamp(8px, 1.2vh, 12px);
}
.app-title em { font-style: italic; font-weight: 700; }

.app-byline {
  flex-shrink: 0;
  font-family: 'Source Serif 4', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8A8578;
  text-align: center;
  margin: 0 0 clamp(14px, 2vh, 20px);
}
.app-dot { margin: 0 6px; }

.app-columns {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  font-family: 'Source Serif 4', serif;
  font-size: 16.5px;
  line-height: 1.5;
  color: #262626;
  columns: 2;
  column-gap: 28px;
  column-fill: auto;
  column-rule: 1px solid #E2DED5;
  text-align: justify;
  padding: 0 24px 10px;
  border-bottom: 1px solid #E2DED5;
}
.app-columns p { margin: 0 0 12px; break-inside: avoid; }

.app-gloss {
  cursor: pointer;
  position: relative;
  font-weight: 800;
}
.app-tip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #171717;
  color: #FFFFFF;
  font-family: 'Source Serif 4', serif;
  font-size: 13px;
  line-height: 1.4;
  padding: 9px 12px;
  border-radius: 6px;
  width: 200px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
  z-index: 5;
}
.app-tip b { font-weight: 700; }
.app-pos { display: inline-block; font-style: italic; opacity: 0.65; margin-left: 4px; }
.app-gloss.is-open .app-tip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }

.app-pullquote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4;
  color: #171717;
  margin: 6px 0 24px;
  break-inside: avoid;
}

@media (max-width: 480px) {
  .app-title { font-size: 28px; }
  .app-columns { columns: 1; padding: 0 20px; }
}
`;
