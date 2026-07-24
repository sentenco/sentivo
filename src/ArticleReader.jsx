import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];

function Gloss({ word, pos, def, glossKey, openKey, setOpenKey }) {
  const isOpen = openKey === glossKey;
  return (
    <span
      className={`ar-gloss ${isOpen ? "is-open" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpenKey(isOpen ? null : glossKey);
      }}
    >
      {word}
      <span className="ar-tip">
        <b>{word}</b>
        <span className="ar-pos">{pos}</span>
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
            <sup key={i} className="ar-cite" onClick={(e) => { e.stopPropagation(); onCiteClick(part.c); }}>
              [{part.c}]
            </sup>
          );
        }
        return <span key={i}>{part.t}</span>;
      })}
    </p>
  );
}

export default function ArticleReader() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const article = getArticle(slug);
  const [edition, setEdition] = useState("polished");
  const [openKey, setOpenKey] = useState(null);

  if (!article || !article.ready) {
    return (
      <div className="ar-shell">
        <style>{CSS}</style>
        <header className="ar-topbar">
          <button type="button" className="ar-back-link" onClick={() => navigate("/library?cat=Articles")}>
            ← Articles
          </button>
        </header>
        <div className="ar-missing">
          <p>This article isn't published yet.</p>
        </div>
      </div>
    );
  }

  const ed = article.editions[edition];

  function scrollToRef(n) {
    const el = document.getElementById(`ar-ref-${n}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="ar-shell" onClick={() => setOpenKey(null)}>
      <style>{CSS}</style>
      <header className="ar-topbar">
        <button type="button" className="ar-back-link" onClick={() => navigate("/library?cat=Articles")}>
          ← Articles
        </button>
        <span className="ar-crumb">{article.topicTitle}</span>
      </header>

      <div className="ar-article">
        <div className="ar-masthead">
          <span className="ar-eyebrow">{article.topicTitle}</span>
          <span className="ar-dot">·</span>
          <span className="ar-time">📖 {ed.readTime} · {ed.wordCount} words</span>
        </div>

        <h1 className="ar-title">{article.title}</h1>
        <p className="ar-dek">{article.dek}</p>

        <div className="ar-switch">
          {EDITION_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              className={`ar-ed-btn ${edition === k ? "is-active" : ""}`}
              onClick={() => setEdition(k)}
            >
              <span className="ar-ed-name">{article.editions[k].label}</span>
              <span className="ar-ed-range">{article.editions[k].range}</span>
            </button>
          ))}
        </div>
        <p className="ar-ed-hint">Same story, three reading levels — switch editions to match your class.</p>

        <div className="ar-byline">
          <span className="ar-byline-avatar">SE</span>
          <span>Sentivo Editorial · Updated this week</span>
        </div>

        <div className="ar-hero">{article.emoji}</div>

        <div className="ar-body">
          {ed.blocks.map((block, i) =>
            block.type === "quote" ? (
              <blockquote key={i} className="ar-pullquote">“{block.text}”</blockquote>
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

          <div className="ar-references">
            <div className="ar-refs-title">References</div>
            {article.references.map((r, i) => (
              <div className="ar-ref-row" id={`ar-ref-${i + 1}`} key={i}>
                <span className="ar-ref-num">{i + 1}</span>
                <span className="ar-ref-domain">{r.domain}</span>
                <span className="ar-ref-dash">—</span>
                <span className="ar-ref-headline">{r.headline}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ar-teacher">
          <div className="ar-teacher-eyebrow">For the teacher</div>
          <h3 className="ar-teacher-title">Discussion guide</h3>
          {article.discussionGuide.map((item, i) => (
            <div className="ar-tq-item" key={i}>
              <p className="ar-tq-main"><span className="ar-tq-num">{i + 1}.</span><span>{item.q}</span></p>
              {item.follow.map((f, j) => (
                <p className="ar-tq-follow" key={j}>{f}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap');

.ar-shell {
  --ink: #2B2A4A;
  --paper: #FBF8F1;
  --card: #FFFFFF;
  --ink-soft: #57544A;
  --muted: #8A8577;
  --rust: #7C5CFC;
  --rust-soft: rgba(124,92,252,0.12);
  --ochre: #C97A2E;
  --ochre-soft: rgba(201,122,46,0.14);
  --dusk: #0F9E90;
  --dusk-soft: rgba(15,158,144,0.12);
  --hair: rgba(43,42,74,0.12);
  width: 100%;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  box-sizing: border-box;
}
.ar-shell * { box-sizing: border-box; }

.ar-topbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  border-bottom: 1px solid var(--hair);
  background: var(--card);
}
.ar-back-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: var(--ink);
  background: var(--paper);
  border: 1px solid var(--hair);
  border-radius: 999px;
  padding: 7px 15px;
  cursor: pointer;
}
.ar-crumb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.ar-missing { max-width: 640px; margin: 60px auto; text-align: center; color: var(--muted); font-family: 'Quicksand', sans-serif; }

.ar-article { max-width: 720px; margin: 0 auto; padding: 34px 24px 60px; }

.ar-masthead { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; font-family: 'Quicksand', sans-serif; }
.ar-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--dusk); }
.ar-dot { color: var(--hair); }
.ar-time { font-size: 11.5px; color: var(--muted); margin-left: auto; }

.ar-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 1.15;
  margin: 0 0 10px;
  text-wrap: balance;
}
.ar-dek {
  font-family: 'Quicksand', sans-serif;
  font-size: 16.5px;
  color: var(--ink-soft);
  line-height: 1.5;
  margin: 0 0 20px;
  max-width: 640px;
}

.ar-switch {
  display: inline-flex;
  gap: 4px;
  background: var(--paper);
  border: 1px solid var(--hair);
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 8px;
}
.ar-ed-btn {
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 8px 16px;
  border-radius: 10px;
  transition: background .15s ease;
}
.ar-ed-btn:hover { background: var(--hair); }
.ar-ed-name { font-weight: 800; font-size: 13px; color: var(--ink-soft); }
.ar-ed-range { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; color: var(--muted); }
.ar-ed-btn.is-active { background: var(--rust); }
.ar-ed-btn.is-active .ar-ed-name { color: #fff; }
.ar-ed-btn.is-active .ar-ed-range { color: rgba(255,255,255,0.75); }
.ar-ed-hint { font-family: 'Quicksand', sans-serif; font-size: 12px; color: var(--muted); margin: 0 0 22px; }

.ar-byline {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  color: var(--muted);
  padding-bottom: 22px;
  margin-bottom: 26px;
  border-bottom: 1px solid var(--hair);
}
.ar-byline-avatar {
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--rust-soft); color: var(--rust);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Quicksand', sans-serif;
  font-weight: 800; font-size: 11px;
}

.ar-hero {
  height: 220px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--rust-soft) 0%, var(--dusk-soft) 100%);
  display: flex; align-items: center; justify-content: center;
  font-size: 46px;
  margin-bottom: 30px;
}

.ar-body {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 18px;
  line-height: 1.72;
  color: var(--ink);
}
.ar-body p { margin: 0 0 20px; }

.ar-gloss {
  text-decoration: underline dotted var(--dusk);
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
}
.ar-tip {
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: var(--ink);
  color: var(--paper);
  font-family: 'Quicksand', sans-serif;
  font-size: 12.5px;
  line-height: 1.4;
  padding: 9px 12px;
  border-radius: 9px;
  width: 220px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity .12s ease, transform .12s ease;
  z-index: 5;
  box-shadow: 0 10px 24px rgba(0,0,0,0.22);
}
.ar-tip b { font-weight: 800; }
.ar-pos { display: inline-block; font-style: italic; font-weight: 600; opacity: 0.65; margin-left: 4px; }
.ar-gloss.is-open .ar-tip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); pointer-events: auto; }

.ar-cite {
  font-size: 11px;
  color: var(--dusk);
  font-weight: 800;
  vertical-align: super;
  margin-left: 1px;
  cursor: pointer;
}

.ar-pullquote {
  font-family: 'Source Serif 4', Georgia, serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.45;
  color: var(--rust);
  border-left: 3px solid var(--rust);
  padding: 2px 0 2px 20px;
  margin: 30px 0;
}

.ar-references { margin-top: 34px; padding-top: 20px; border-top: 1px solid var(--hair); font-family: 'Quicksand', sans-serif; }
.ar-refs-title { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 0 0 12px; }
.ar-ref-row { display: flex; gap: 8px; align-items: baseline; padding: 6px 0; font-size: 13px; }
.ar-ref-num { font-weight: 800; color: var(--dusk); min-width: 16px; }
.ar-ref-domain { font-weight: 700; color: var(--ink); }
.ar-ref-dash { color: var(--muted); }
.ar-ref-headline { color: var(--ink-soft); }

.ar-teacher {
  max-width: 100%;
  margin-top: 30px;
  background: var(--dusk-soft);
  border-radius: 14px;
  padding: 20px 24px;
  font-family: 'Quicksand', sans-serif;
}
.ar-teacher-eyebrow { font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--dusk); margin-bottom: 4px; }
.ar-teacher-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 16px; }
.ar-tq-item { margin-bottom: 16px; }
.ar-tq-item:last-child { margin-bottom: 0; }
.ar-tq-main { display: flex; gap: 8px; font-weight: 700; font-size: 14.5px; line-height: 1.45; margin: 0 0 6px; }
.ar-tq-num { color: var(--dusk); flex-shrink: 0; }
.ar-tq-follow { font-size: 13px; color: var(--ink-soft); line-height: 1.4; padding-left: 22px; margin: 4px 0 0; position: relative; }
.ar-tq-follow::before { content: "↳"; color: var(--muted); position: absolute; left: 0; }

@media (max-width: 640px) {
  .ar-title { font-size: 26px; }
  .ar-article { padding: 24px 18px 40px; }
}
`;
