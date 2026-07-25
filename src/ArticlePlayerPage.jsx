import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];

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

function Paragraph({ parts, blockIdx, openKey, setOpenKey, onCiteClick }) {
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
          return (
            <sup key={i} className="app-cite" onClick={(e) => { e.stopPropagation(); onCiteClick(part.c); }}>
              [{part.c}]
            </sup>
          );
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
  const [edition, setEdition] = useState("polished");
  const [openKey, setOpenKey] = useState(null);

  if (!article || !article.ready) {
    return (
      <div className="app-shell">
        <style>{CSS}</style>
        <div className="app-missing">This article isn't published yet.</div>
      </div>
    );
  }

  const ed = article.editions[edition];

  function scrollToRef(n) {
    const el = document.getElementById(`app-ref-${n}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

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
        <div className="app-hero">{article.emoji}</div>

        <h1 className="app-title"><StyledTitle title={article.title} /></h1>

        <div className="app-byline">
          <span>Sentivo Editorial</span>
          <span className="app-dot">·</span>
          <span>{article.topicTitle}</span>
          <span className="app-dot">·</span>
          <span>{ed.readTime}</span>
        </div>

        <div className="app-columns">
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
                onCiteClick={scrollToRef}
              />
            )
          )}
        </div>

        <div className="app-references">
          {article.references.map((r, i) => (
            <span className="app-ref" id={`app-ref-${i + 1}`} key={i}>
              [{i + 1}] {r.domain}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

.app-shell {
  width: 100%;
  min-height: 100vh;
  background: #FFFFFF;
  color: #171717;
  box-sizing: border-box;
}
.app-shell * { box-sizing: border-box; }

.app-missing { padding: 60px; text-align: center; font-family: 'Source Serif 4', serif; color: #8A8578; }

.app-editions {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 10px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid #EAE7E0;
}
.app-ed-btn {
  font-family: 'Source Serif 4', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A8578;
  background: none;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 5px 14px;
  cursor: pointer;
}
.app-ed-btn.is-active { color: #171717; border-color: #171717; }

.app-page { max-width: 760px; margin: 0 auto; padding: 0 0 70px; }

.app-hero {
  height: 260px;
  background: linear-gradient(135deg, #3a3a3a, #111111);
  filter: grayscale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
}

.app-title {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: uppercase;
  margin: 40px 30px 18px;
}
.app-title em { font-style: italic; font-weight: 700; }

.app-byline {
  font-family: 'Source Serif 4', serif;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #8A8578;
  text-align: center;
  margin: 0 0 40px;
}
.app-dot { margin: 0 6px; }

.app-columns {
  font-family: 'Source Serif 4', serif;
  font-size: 16px;
  line-height: 1.65;
  color: #262626;
  columns: 2;
  column-gap: 40px;
  column-rule: 1px solid #E2DED5;
  text-align: justify;
  padding: 0 30px;
}
.app-columns p { margin: 0 0 20px; break-inside: avoid; }

.app-gloss {
  text-decoration: underline dotted #A39B87;
  text-underline-offset: 3px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
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

.app-cite {
  font-size: 10px;
  color: #8A8578;
  font-weight: 700;
  vertical-align: super;
  margin-left: 1px;
  cursor: pointer;
}

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

.app-references {
  max-width: 700px;
  margin: 34px auto 0;
  padding: 18px 30px 0;
  border-top: 1px solid #EAE7E0;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  justify-content: center;
  font-family: 'Source Serif 4', serif;
  font-size: 11px;
  color: #A39B87;
}

@media (max-width: 640px) {
  .app-title { font-size: 34px; margin: 28px 20px 14px; }
  .app-columns { columns: 1; padding: 0 22px; }
}
`;
