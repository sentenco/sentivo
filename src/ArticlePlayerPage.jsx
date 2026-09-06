import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticle } from "./articlesData";

const EDITION_KEYS = ["plain", "polished", "precise"];

// The fixed card size the whole layout is built around -- matches the
// popup window ArticleReader.jsx's openPlayer() opens (width=680,
// height=960, resizable=no). Kept as constants here (not just in the CSS)
// because the pagination math needs the real column-viewport pixel width
// to know how far to translate per page-turn.
const CARD_WIDTH = 680;
const CARD_HEIGHT = 960;
const PAGE_PADDING = 36;
const COLUMN_GAP = 32;
// Fixed, not auto-stretched -- column-count would let the browser stretch
// each column wider to fill leftover space, which then silently drifts out
// of sync with the page-turn math below (that math assumes this exact
// width). A plain column-width with no column-count always renders at
// precisely this size, so the two stay consistent by construction.
const COLUMN_WIDTH = (CARD_WIDTH - PAGE_PADDING * 2 - COLUMN_GAP) / 2;

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

function renderParts(parts, blockIdx, openKey, setOpenKey) {
  return parts.map((part, i) => {
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
  });
}

function Paragraph({ parts, blockIdx, openKey, setOpenKey }) {
  return <p>{renderParts(parts, blockIdx, openKey, setOpenKey)}</p>;
}

// The opening paragraph gets a newspaper-style drop cap, sized to whatever
// letter the article actually starts with (not a fixed hardcoded letter).
function FirstParagraph({ parts, blockIdx, openKey, setOpenKey }) {
  const [first, ...rest] = parts;
  if (!first || first.t === undefined || !first.t.trim()) {
    return <Paragraph parts={parts} blockIdx={blockIdx} openKey={openKey} setOpenKey={setOpenKey} />;
  }
  const dropChar = first.t.charAt(0);
  const remainder = [{ t: first.t.slice(1) }, ...rest];
  return (
    <p className="app-first-p">
      <span className="app-dropcap">{dropChar}</span>
      {renderParts(remainder, blockIdx, openKey, setOpenKey)}
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
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const viewportRef = useRef(null);
  const innerRef = useRef(null);

  // Book-style pagination, not shrink-to-fit: the inner content flows into
  // as many fixed-width columns as it naturally needs (no column-count
  // limit), and the fixed-size viewport only ever shows exactly 2 of them
  // at once, sliding over by one full "spread" (2 columns' width) per page
  // turn. This is what actually guarantees all three of "always 2 columns",
  // "fixed player size", and "content always fits" at once, regardless of
  // how long a given edition's text is -- a shrinking font has a floor and
  // eventually fails for a long article; this can't fail, it just adds
  // another page. Recomputed whenever the edition changes (different
  // editions are different lengths) and once webfonts finish loading
  // (measuring against the fallback font before the swap under-counts).
  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const inner = innerRef.current;
    if (!viewport || !inner) return;
    // The step between pages isn't the viewport width alone -- column-gap
    // applies uniformly between EVERY pair of adjacent columns, including
    // the seam between one page's 2nd column and the next page's 1st, so
    // that seam's gap has to be skipped too or every page after the first
    // lands slightly short and clips into the next column's text.
    const pageStep = viewport.clientWidth + COLUMN_GAP;
    const pages = Math.max(1, Math.ceil((inner.scrollWidth - 1) / pageStep));
    setTotalPages(pages);
    setPage((p) => Math.min(p, pages - 1));
  }, []);

  useLayoutEffect(() => {
    setPage(0);
    measure();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
  }, [edition, measure]);

  useLayoutEffect(() => {
    function onResize() { measure(); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  function goToPage(next) {
    setPage((p) => Math.max(0, Math.min(next, totalPages - 1)));
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") goToPage(page + 1);
    if (e.key === "ArrowLeft") goToPage(page - 1);
  }

  if (!article || !article.ready) {
    return (
      <div className="app-shell">
        <style>{CSS}</style>
        <div className="app-card">
          <div className="app-missing">This article isn't published yet.</div>
        </div>
      </div>
    );
  }

  const ed = article.editions[edition];
  const publishedLabel = article.publishedAt
    ? new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })
    : null;
  const viewportWidth = viewportRef.current?.clientWidth || (CARD_WIDTH - 72);
  const pageStep = viewportWidth + COLUMN_GAP;

  return (
    <div className="app-shell" onClick={() => setOpenKey(null)} onKeyDown={handleKeyDown} tabIndex={-1}>
      <style>{CSS}</style>

      <div className="app-card">
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
            {publishedLabel && (
              <span className="app-byline-item">
                <svg className="app-byline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg>
                {publishedLabel}
              </span>
            )}
            {publishedLabel && <span className="app-dot">·</span>}
            <span className="app-byline-item">
              <svg className="app-byline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 12.6 12.9 4.9A2 2 0 0 0 11.5 4.3H5a1 1 0 0 0-1 1v6.5c0 .5.2 1 .6 1.4l7.7 7.7a2 2 0 0 0 2.8 0l5.5-5.5a2 2 0 0 0 0-2.8Z" /><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /></svg>
              {article.topicTitle}
            </span>
          </div>

          <div className="app-columns" ref={viewportRef}>
            <div
              className="app-columns-inner"
              ref={innerRef}
              style={{ transform: `translateX(-${page * pageStep}px)` }}
            >
              {(() => {
                const firstParaIdx = ed.blocks.findIndex((b) => b.type !== "quote");
                return ed.blocks.map((block, i) =>
                  block.type === "quote" ? (
                    <blockquote key={i} className="app-pullquote">“{block.text}”</blockquote>
                  ) : i === firstParaIdx ? (
                    <FirstParagraph
                      key={i}
                      parts={block.parts}
                      blockIdx={i}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  ) : (
                    <Paragraph
                      key={i}
                      parts={block.parts}
                      blockIdx={i}
                      openKey={openKey}
                      setOpenKey={setOpenKey}
                    />
                  )
                );
              })()}
            </div>
          </div>

          <div className="app-pager">
            <button
              type="button"
              className="app-pager-btn"
              onClick={(e) => { e.stopPropagation(); goToPage(page - 1); }}
              disabled={page === 0}
              aria-label="Previous page"
            >
              ‹
            </button>
            <span className="app-pager-count">Page {page + 1} of {totalPages}</span>
            <button
              type="button"
              className="app-pager-btn"
              onClick={(e) => { e.stopPropagation(); goToPage(page + 1); }}
              disabled={page >= totalPages - 1}
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>

        <div className="app-footer">The Sentivo Gazette</div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

.app-shell {
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  background: #E4DED1;
  color: #171717;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.app-shell * { box-sizing: border-box; }

.app-card {
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  flex-shrink: 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
}

.app-missing { margin: auto; padding: 60px; text-align: center; font-family: 'Source Serif 4', serif; color: #8A8578; }

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
  width: 100%;
  padding: 0 ${PAGE_PADDING}px 10px;
  overflow: hidden;
}

.app-masthead {
  flex-shrink: 0;
  text-align: center;
  padding: 10px 0 6px;
}
.app-masthead-logo { height: 17px; width: auto; display: inline-block; margin-bottom: 4px; }
.app-masthead-kicker-row { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 1px; }
.app-masthead-rule { flex: 0 1 36px; height: 1px; background: #1B2A4A; opacity: 0.45; }
.app-masthead-kicker {
  font-family: 'Source Serif 4', serif;
  font-weight: 700;
  font-size: 9.5px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #1B2A4A;
}
.app-masthead-word {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1B2A4A;
  line-height: 1;
  margin: 1px 0 5px;
}
.app-masthead-underline { width: 100px; height: 2px; background: #FF6B4A; margin: 0 auto 5px; }
.app-masthead-tagline {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 8.5px;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: #1B2A4A;
  opacity: 0.7;
}

.app-title {
  flex-shrink: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 32px;
  line-height: 1.14;
  letter-spacing: 0;
  text-align: center;
  text-transform: none;
  margin: 12px 0 8px;
}
.app-title em { font-style: italic; font-weight: 700; }

.app-byline {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Source Serif 4', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8A8578;
  text-align: center;
  margin: 0 0 14px;
}
.app-byline-item { display: inline-flex; align-items: center; gap: 5px; }
.app-byline-icon { width: 13px; height: 13px; flex-shrink: 0; color: #FF6B4A; }
.app-dot { margin: 0 10px; }

.app-columns {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
}
.app-columns-inner {
  height: 100%;
  font-family: 'Source Serif 4', serif;
  font-size: 17.5px;
  line-height: 1.5;
  color: #262626;
  column-width: ${COLUMN_WIDTH}px;
  column-gap: ${COLUMN_GAP}px;
  column-fill: auto;
  column-rule: 1px solid #E2DED5;
  text-align: justify;
  transition: transform 0.32s ease;
  will-change: transform;
}
.app-columns-inner p { margin: 0 0 13px; break-inside: avoid; }

.app-first-p::after { content: ""; display: table; clear: both; }
.app-dropcap {
  float: left;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  line-height: 1;
  color: #FFFFFF;
  background: #1B2A4A;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 29px;
  margin: 3px 10px 2px 0;
}

.app-pager {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 8px 0 4px;
}
.app-pager-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #E2DED5;
  background: #FFFFFF;
  color: #1B2A4A;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-pager-btn:disabled { opacity: 0.3; cursor: default; }
.app-pager-count {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8A8578;
}

.app-gloss {
  cursor: pointer;
  position: relative;
  font-weight: 800;
  color: #E0502F;
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
  font-size: 24px;
  line-height: 1.4;
  color: #171717;
  margin: 6px 0 24px;
  break-inside: avoid;
}

.app-footer {
  flex-shrink: 0;
  text-align: center;
  padding: 9px 12px;
  background: #1B2A4A;
  color: rgba(255,255,255,0.65);
  font-family: 'Source Serif 4', serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.26em;
  text-transform: uppercase;
}
`;
