import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import defaultBook from "./storybookData";

const PAGE_TYPES = ["intro", "story", "questions", "truefalse", "build0", "build1", "build2", "mysentence"];
const PAGE_LABELS = {
  intro: "Chapter",
  story: "Story",
  questions: "Questions",
  truefalse: "True or False",
  build0: "Build-a-Sentence",
  build1: "Build-a-Sentence",
  build2: "Build-a-Sentence",
  mysentence: "My Sentence",
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ChapterIntroPage({ chapter }) {
  return (
    <div className="sb-page sb-page--intro">
      <div className="sb-intro-image">
        {chapter.image ? (
          <img src={chapter.image} alt={chapter.title} />
        ) : (
          <ImagePlaceholder note={chapter.imageNote} compact />
        )}
      </div>
      <span className="sb-chapter-num">Chapter {chapter.number}</span>
      <h2 className="sb-chapter-title">{chapter.title}</h2>
    </div>
  );
}

function StoryPage({ chapter }) {
  return (
    <div className="sb-page sb-page--story">
      <span className="sb-chapter-num">Chapter {chapter.number}</span>
      <h2 className="sb-chapter-title">{chapter.title}</h2>
      <p className="sb-story-text">{chapter.story}</p>
    </div>
  );
}

function QuestionsPage({ chapter }) {
  return (
    <div className="sb-page">
      <h3 className="sb-page-title">Comprehension Questions</h3>
      <p className="sb-page-hint">Talk about the story with your teacher.</p>
      <ol className="sb-qlist">
        {chapter.questions.map((q, i) => (
          <li key={i} className="sb-qitem">
            {q}
          </li>
        ))}
      </ol>
    </div>
  );
}

function TrueFalsePage({ chapter }) {
  const [picks, setPicks] = useState({});

  function pick(i, value) {
    setPicks((prev) => ({ ...prev, [i]: value }));
  }

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">True or False</h3>
      <div className="sb-tf-list">
        {chapter.trueFalse.map((item, i) => {
          const picked = picks[i];
          const isCorrect = picked !== undefined && picked === item.answer;
          const isWrong = picked !== undefined && picked !== item.answer;
          return (
            <div key={i} className={`sb-tf-row ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}`}>
              <span className="sb-tf-text">{item.text}</span>
              <div className="sb-tf-buttons">
                <button
                  type="button"
                  className={`sb-tf-btn ${picked === true ? "is-picked" : ""}`}
                  onClick={() => pick(i, true)}
                >
                  True
                </button>
                <button
                  type="button"
                  className={`sb-tf-btn ${picked === false ? "is-picked" : ""}`}
                  onClick={() => pick(i, false)}
                >
                  False
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BuildSentencePage({ chapter, index }) {
  const sentence = chapter.buildSentence[index];
  const words = useMemo(() => sentence.target.split(" "), [sentence]);

  const [tray, setTray] = useState(() => shuffle(words.map((text, i) => ({ text, id: i }))));
  const [built, setBuilt] = useState([]);
  const [checked, setChecked] = useState(false);

  function tapTray(word) {
    if (checked) return;
    setTray((prev) => prev.filter((w) => w.id !== word.id));
    setBuilt((prev) => [...prev, word]);
  }

  function tapBuilt(word) {
    if (checked) return;
    setBuilt((prev) => prev.filter((w) => w.id !== word.id));
    setTray((prev) => [...prev, word]);
  }

  function reset() {
    setTray(shuffle(words.map((text, i) => ({ text, id: i }))));
    setBuilt([]);
    setChecked(false);
  }

  const allPlaced = built.length === words.length;
  const isCorrect = checked && built.every((w, i) => w.text === words[i]);

  return (
    <div className="sb-page">
      <h3 className="sb-page-title">
        Build-a-Sentence <span className="sb-page-title-sub">({index + 1} of 3)</span>
      </h3>
      <p className="sb-page-hint">Tap the words in the correct order to build a sentence from the story.</p>
      <div className={`sb-build-row ${checked ? (isCorrect ? "is-correct" : "is-wrong") : ""}`}>
        {built.length === 0 && <span className="sb-build-empty">Tap words below to start building…</span>}
        {built.map((w) => (
          <button type="button" key={w.id} className="sb-word-chip sb-word-chip--built" onClick={() => tapBuilt(w)}>
            {w.text}
          </button>
        ))}
      </div>
      <div className="sb-word-tray">
        {tray.map((w) => (
          <button type="button" key={w.id} className="sb-word-chip" onClick={() => tapTray(w)}>
            {w.text}
          </button>
        ))}
      </div>
      <div className="sb-build-check-row">
        <button type="button" className="sb-check-btn" disabled={!allPlaced || checked} onClick={() => setChecked(true)}>
          ✓ Check
        </button>
        {checked && (
          <>
            <span className={`sb-build-feedback ${isCorrect ? "is-good" : "is-retry"}`}>
              {isCorrect ? "🎉 Perfect! That's the sentence." : "Not quite the right order -- try again!"}
            </span>
            <button type="button" className="sb-retry-btn" onClick={reset}>
              ↻ Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function MySentencePage({ chapter }) {
  const [value, setValue] = useState("");
  return (
    <div className="sb-page">
      <h3 className="sb-page-title">My Sentence</h3>
      <p className="sb-page-hint">{chapter.mySentencePrompt}</p>
      <p className="sb-example">
        <em>Example: {chapter.mySentenceExample}</em>
      </p>
      <textarea
        className="sb-my-sentence-input"
        placeholder="Write your sentence here…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
      />
    </div>
  );
}

function renderPage(pageType, chapter) {
  switch (pageType) {
    case "intro":
      return <ChapterIntroPage chapter={chapter} />;
    case "story":
      return <StoryPage chapter={chapter} />;
    case "questions":
      return <QuestionsPage chapter={chapter} />;
    case "truefalse":
      return <TrueFalsePage chapter={chapter} />;
    case "build0":
      return <BuildSentencePage chapter={chapter} index={0} />;
    case "build1":
      return <BuildSentencePage chapter={chapter} index={1} />;
    case "build2":
      return <BuildSentencePage chapter={chapter} index={2} />;
    case "mysentence":
      return <MySentencePage chapter={chapter} />;
    default:
      return null;
  }
}

const TOC_PAGE_SIZE = 5;

export default function StoryBook({ book = defaultBook }) {
  const navigate = useNavigate();
  const [view, setView] = useState("cover"); // cover | toc | chapter
  const [chapterIdx, setChapterIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);
  const [tocPage, setTocPage] = useState(0);
  const CHAPTERS = book.chapters;
  const tocPageCount = Math.ceil(CHAPTERS.length / TOC_PAGE_SIZE);

  const chapter = CHAPTERS[chapterIdx];
  const pageType = PAGE_TYPES[pageIdx];
  const totalPages = PAGE_TYPES.length;
  const isFirstPage = chapterIdx === 0 && pageIdx === 0;
  const isLastPage = chapterIdx === CHAPTERS.length - 1 && pageIdx === totalPages - 1;

  function openChapter(idx) {
    setChapterIdx(idx);
    setPageIdx(0);
    setView("chapter");
  }

  function goNext() {
    if (pageIdx < totalPages - 1) {
      setPageIdx((p) => p + 1);
    } else if (chapterIdx < CHAPTERS.length - 1) {
      setChapterIdx((c) => c + 1);
      setPageIdx(0);
    }
  }

  function goPrev() {
    if (pageIdx > 0) {
      setPageIdx((p) => p - 1);
    } else if (chapterIdx > 0) {
      setChapterIdx((c) => c - 1);
      setPageIdx(totalPages - 1);
    }
  }

  return (
    <div className="sb-shell">
      <style>{CSS}</style>
      <header className="sb-topbar">
        <button type="button" className="sb-back-link" onClick={() => navigate("/library")}>
          ← Library
        </button>
        <button type="button" className="sb-topbar-title" onClick={() => setView("cover")}>
          {book.title}
        </button>
        <button type="button" className="sb-toc-link" onClick={() => { setTocPage(0); setView("toc"); }}>
          Contents
        </button>
      </header>

      <div className="sb-stage">
        {view === "cover" && (
          <button
            type="button"
            className="sb-cover-card"
            onClick={() => { setTocPage(0); setView("toc"); }}
          >
            {book.coverImage ? (
              <img className="sb-cover-card-img" src={book.coverImage} alt={book.title} />
            ) : (
              <div className="sb-cover-card-ph">
                <ImagePlaceholder note={book.coverImageNote} />
              </div>
            )}
            <div className="sb-cover-card-scrim" />
            <h1 className="sb-cover-card-title">{book.title}</h1>
          </button>
        )}

        {view === "toc" && (
          <div className="sb-book sb-toc">
            <h2 className="sb-toc-heading">Table of Contents</h2>
            <ol className="sb-toc-list">
              {CHAPTERS.slice(tocPage * TOC_PAGE_SIZE, tocPage * TOC_PAGE_SIZE + TOC_PAGE_SIZE).map((c) => {
                const idx = c.number - 1;
                return (
                  <li key={c.number} className="sb-toc-item">
                    <button type="button" className="sb-toc-btn" onClick={() => openChapter(idx)}>
                      <span className="sb-toc-num">{c.number}</span>
                      <span className="sb-toc-title">{c.title}</span>
                      <span className="sb-toc-arrow">→</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            {tocPageCount > 1 && (
              <div className="sb-toc-pager">
                <button type="button" className="sb-nav-btn" onClick={() => setTocPage((p) => p - 1)} disabled={tocPage === 0}>
                  ← Previous
                </button>
                <span className="sb-page-header-counter">Page {tocPage + 1} of {tocPageCount}</span>
                <button
                  type="button"
                  className="sb-nav-btn sb-nav-btn--primary"
                  onClick={() => setTocPage((p) => p + 1)}
                  disabled={tocPage === tocPageCount - 1}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {view === "chapter" && (
          <div className="sb-book">
            <div className="sb-page-header">
              <span className="sb-page-header-label">{PAGE_LABELS[pageType]}</span>
              <span className="sb-page-header-counter">Chapter {chapter.number} of {CHAPTERS.length}</span>
            </div>
            <div className="sb-progress-track">
              <div
                className="sb-progress-fill"
                style={{ width: `${((pageIdx + 1) / totalPages) * 100}%` }}
              />
            </div>
            <div className="sb-page-body" key={`${chapterIdx}-${pageIdx}`}>
              {renderPage(pageType, chapter)}
            </div>
            <div className="sb-nav-row">
              <button type="button" className="sb-nav-btn" onClick={goPrev} disabled={isFirstPage}>
                ← Previous
              </button>
              <div className="sb-nav-dots">
                {PAGE_TYPES.map((_, i) => (
                  <span key={i} className={`sb-nav-dot ${i === pageIdx ? "is-active" : ""}`} />
                ))}
              </div>
              <button type="button" className="sb-nav-btn sb-nav-btn--primary" onClick={goNext} disabled={isLastPage}>
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.sb-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.sb-shell * { box-sizing: border-box; }

.sb-topbar {
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px 0;
}
.sb-back-link, .sb-toc-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
}
.sb-toc-link { background: #D85A30; color: #fff; border-color: #D85A30; }
.sb-topbar-title {
  background: none;
  border: none;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #1B2A4A;
  text-align: center;
  flex: 1;
  padding: 0 16px;
  cursor: pointer;
}
.sb-topbar-title:hover { text-decoration: underline; }

.sb-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 36px 24px 60px;
}

/* Landscape book card -- every page (cover, characters, contents, chapter
   pages) shares this exact size so the book doesn't resize as you flip
   through it. */
.sb-book {
  width: 860px;
  max-width: 100%;
  height: 660px;
  background: #FFFDF7;
  border-radius: 18px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  padding: 30px 36px;
  overflow-y: auto;
  animation: sb-page-in 0.28s ease;
}
@keyframes sb-page-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Cover: a real portrait book jacket. Full-bleed art, title stamped
   over the bottom like printed cover type. Sized to the art's native
   2:3 ratio so the whole illustration shows, nothing cropped. ── */
.sb-cover-card {
  position: relative;
  width: 440px;
  max-width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 18px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 50px rgba(0,0,0,0.2);
  overflow: hidden;
  padding: 0;
  background: #FFFDF7;
  display: block;
  cursor: pointer;
  font: inherit;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  animation: sb-page-in 0.28s ease;
}
.sb-cover-card:hover { transform: translateY(-2px); box-shadow: 0 26px 56px rgba(0,0,0,0.24); }
.sb-cover-card-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; display: block; }
.sb-cover-card-ph { position: absolute; inset: 0; }
.sb-cover-card-scrim {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 42%;
  background: linear-gradient(to top, rgba(14,18,32,0.88) 0%, rgba(14,18,32,0.5) 55%, rgba(14,18,32,0) 100%);
}
.sb-cover-card-title {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 26px;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4);
  margin: 0;
  text-align: left;
}

/* ── Table of contents ── */
.sb-toc-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #1B2A4A;
  margin: 0 0 16px;
}
.sb-toc-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
.sb-toc-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #FAF7EF;
  border: none;
  border-radius: 12px;
  padding: 11px 14px;
  cursor: pointer;
  text-align: left;
  transition: background 0.12s ease, transform 0.12s ease;
}
.sb-toc-btn:hover { background: #FAECE7; transform: translateX(2px); }
.sb-toc-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #D85A30;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
}
.sb-toc-title {
  flex: 1;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2A4A;
}
.sb-toc-arrow { color: #D85A30; font-weight: 700; }
.sb-toc-pager {
  margin-top: auto;
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ── Chapter page chrome ── */
.sb-page-header { display: flex; align-items: center; justify-content: space-between; }
.sb-page-header-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #D85A30;
}
.sb-page-header-counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #94A0B8;
}
.sb-progress-track { height: 3px; background: #EFEAE0; border-radius: 999px; margin: 9px 0 18px; overflow: hidden; }
.sb-progress-fill { height: 100%; background: #D85A30; transition: width 0.2s ease; }

.sb-page-body { flex: 1; min-height: 420px; overflow-y: auto; }
.sb-page { display: flex; flex-direction: column; gap: 10px; }
.sb-page-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 23px; color: #1B2A4A; margin: 0; }
.sb-page-title-sub { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #94A0B8; }
.sb-page-hint { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 16px; color: #7C8598; margin: -4px 0 4px; }

/* ── Chapter intro: full-page image + title, nothing else. Container is
   square to match the source art's native 1:1 ratio -- nothing cropped. ── */
.sb-page--intro { flex: 1; align-items: center; justify-content: center; text-align: center; gap: 8px; }
.sb-intro-image { width: 365px; height: 365px; max-width: 100%; border-radius: 12px; overflow: hidden; margin: 0 auto 8px; }
.sb-intro-image .img-ph { border-radius: 12px; }
.sb-intro-image img { width: 100%; height: 100%; object-fit: contain; display: block; }
.sb-page--intro .sb-chapter-title { text-align: center; }

/* ── Story ── */
.sb-chapter-num {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #D85A30;
}
.sb-chapter-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 34px; color: #1B2A4A; margin: 3px 0 12px; }
.sb-story-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 19px;
  line-height: 1.75;
  color: #1B2A4A;
  margin: 0;
  text-align: justify;
  text-indent: 32px;
}

/* ── Questions ── */
.sb-qlist { margin: 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 14px; }
.sb-qitem { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 18px; color: #1B2A4A; line-height: 1.4; }

/* ── True/False ── */
.sb-tf-list { display: flex; flex-direction: column; gap: 9px; }
.sb-tf-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: #FAF7EF;
  border-radius: 12px;
  padding: 11px 14px;
  transition: background 0.15s ease;
}
.sb-tf-row.is-correct { background: #E4F6EC; }
.sb-tf-row.is-wrong { background: #FDEBEF; }
.sb-tf-text { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 17px; color: #1B2A4A; line-height: 1.4; }
.sb-tf-buttons { display: flex; gap: 8px; flex-shrink: 0; }
.sb-tf-btn {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 7px 17px;
  border-radius: 999px;
  cursor: pointer;
}
.sb-tf-btn.is-picked { background: #D85A30; border-color: #D85A30; color: #fff; }

/* ── Build-a-sentence ── */
.sb-build-row {
  min-height: 44px;
  border: 3px dashed #DADCE3;
  border-radius: 12px;
  padding: 8px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.sb-build-row.is-correct { border-color: #3B9A6B; border-style: solid; background: #E4F6EC; }
.sb-build-row.is-wrong { border-color: #E0637A; border-style: solid; background: #FDEBEF; }
.sb-build-empty { font-family: 'Quicksand', sans-serif; font-size: 15px; color: #C2C6D2; }
.sb-word-tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 34px; justify-content: center; }
.sb-word-chip {
  background: #fff;
  border: 2px solid #EAE6DC;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 999px;
  cursor: pointer;
}
.sb-word-chip--built { background: #D85A30; border-color: #D85A30; color: #fff; }
.sb-build-check-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 2px; }
.sb-check-btn {
  background: #D85A30;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 9px 20px;
  cursor: pointer;
  box-shadow: 0 3px 0 #A8431F;
}
.sb-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #A8431F; }
.sb-check-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 0 3px 0 #A8431F; }
.sb-build-feedback { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; }
.sb-build-feedback.is-good { color: #2C6B4F; }
.sb-build-feedback.is-retry { color: #B03A52; }
.sb-retry-btn {
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #DADCE3;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
}

/* ── My Sentence ── */
.sb-example { font-family: 'Quicksand', sans-serif; font-size: 15px; color: #94A0B8; margin: 0; }
.sb-my-sentence-input {
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  color: #1B2A4A;
  border: 2px solid #EAE6DC;
  border-radius: 12px;
  padding: 12px 14px;
  resize: none;
  outline: none;
}
.sb-my-sentence-input:focus { border-color: #D85A30; }

/* ── Nav row ── */
.sb-nav-row { display: flex; align-items: center; justify-content: space-between; margin-top: 18px; }
.sb-nav-btn {
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #EAE6DC;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  padding: 9px 17px;
  cursor: pointer;
}
.sb-nav-btn--primary { background: #D85A30; border-color: #D85A30; color: #fff; }
.sb-nav-btn:disabled { opacity: 0.35; cursor: default; }
.sb-nav-dots { display: flex; gap: 5px; flex-wrap: wrap; justify-content: center; }
.sb-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #E4E0D4; }
.sb-nav-dot.is-active { width: 14px; background: #D85A30; }

@media (max-width: 520px) {
  .sb-book { padding: 22px 18px; }
}
`;
