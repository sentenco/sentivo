import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "./articlesData";
import editorialBanner from "./assets/brand/editorial-banner.jpg";

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
          return <sup key={i} className="app-cite">[{part.c}]</sup>;
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
        <div className={`app-hero ${article.showEditorialBanner ? "app-hero--banner" : ""}`}>
          {article.showEditorialBanner ? (
            <img src={editorialBanner} alt="Sentivo Editorial" />
          ) : article.image ? (
            <img src={article.image} alt="" />
          ) : (
            article.emoji
          )}
        </div>

        <h1 className="app-title"><StyledTitle title={article.title} /></h1>

        <div className="app-byline">
          {publishedLabel && <span>{publishedLabel}</span>}
          {publishedLabel && <span className="app-dot">·</span>}
          <span>{article.topicTitle}</span>
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
  justify-content: center;
  gap: 4px;
  padding: 8px;
  background: #FFFFFF;
  border-bottom: 1px solid #EAE7E0;
}
.app-ed-btn {
  font-family: 'Source Serif 4', serif;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A8578;
  background: none;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 4px 12px;
  cursor: pointer;
}
.app-ed-btn.is-active { color: #171717; border-color: #171717; }

.app-page {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
}

.app-hero {
  flex-shrink: 0;
  height: clamp(56px, 8vh, 90px);
  background: linear-gradient(135deg, #3a3a3a, #111111);
  filter: grayscale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(26px, 3.6vh, 38px);
  overflow: hidden;
}
.app-hero img { width: 100%; height: 100%; object-fit: contain; }
.app-hero--banner {
  height: clamp(150px, 18vh, 220px);
  background: #FBFAF7;
  filter: none;
}
.app-hero--banner img { width: 100%; height: 100%; object-fit: cover; object-position: center; }

.app-title {
  flex-shrink: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: clamp(22px, 3vh, 28px);
  line-height: 1.22;
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
  font-size: clamp(14px, 1.7vh, 16.5px);
  line-height: 1.5;
  color: #262626;
  columns: 2;
  column-gap: 28px;
  column-fill: auto;
  column-rule: 1px solid #E2DED5;
  text-align: justify;
  padding: 0 24px;
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

.app-cite {
  font-size: 10px;
  color: #8A8578;
  font-weight: 700;
  vertical-align: super;
  margin-left: 1px;
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

@media (max-width: 480px) {
  .app-title { font-size: 20px; }
  .app-columns { columns: 1; padding: 0 20px; }
}
`;
