import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImagePlaceholder from "./slides/ImagePlaceholder";
import { CHAPTERS, CHARACTERS, COVER_IMAGE_NOTE, STORYBOOK_TITLE, STORYBOOK_SUBTITLE } from "./storybookData";

const PAGE_TYPES = ["story", "questions", "truefalse", "build0", "build1", "build2", "mysentence"];
const PAGE_LABELS = {
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

function StoryPage({ chapter }) {
  return (
    <div className="sb-page sb-page--story">
      <div className="sb-lead-image">
        <ImagePlaceholder note={chapter.imageNote} compact />
      </div>
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

export default function StoryBook() {
  const navigate = useNavigate();
  const [view, setView] = useState("cover"); // cover | toc | chapter
  const [chapterIdx, setChapterIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);

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
        <span className="sb-topbar-title">{STORYBOOK_TITLE}</span>
        <button type="button" className="sb-toc-link" onClick={() => setView("toc")}>
          Contents
        </button>
      </header>

      <div className="sb-stage">
        {view === "cover" && (
          <div className="sb-book sb-cover">
            <div className="sb-cover-image">
              <ImagePlaceholder note={COVER_IMAGE_NOTE} compact />
            </div>
            <span className="sb-cover-badge">A1 · Teens · Story Book</span>
            <h1 className="sb-cover-title">{STORYBOOK_TITLE}</h1>
            <p className="sb-cover-subtitle">{STORYBOOK_SUBTITLE}</p>
            <p className="sb-cover-blurb">
              Follow Joshua, Paul, Mia, and Angel through ten short chapters of everyday school life. Each chapter
              comes with questions, a true-or-false check, and a Build-a-Sentence game.
            </p>
            <div className="sb-characters">
              <span className="sb-characters-heading">Meet the Characters</span>
              <div className="sb-characters-grid">
                {CHARACTERS.map((c) => (
                  <div key={c.name} className="sb-character-card">
                    <div className="sb-character-avatar">
                      <ImagePlaceholder micro />
                    </div>
                    <div className="sb-character-info">
                      <span className="sb-character-name">{c.name}</span>
                      <span className="sb-character-role">{c.role}</span>
                      <span className="sb-character-look">{c.look}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="sb-cta-btn" onClick={() => setView("toc")}>
              Open Book →
            </button>
          </div>
        )}

        {view === "toc" && (
          <div className="sb-book sb-toc">
            <h2 className="sb-toc-heading">Table of Contents</h2>
            <ol className="sb-toc-list">
              {CHAPTERS.map((c, i) => (
                <li key={c.number} className="sb-toc-item">
                  <button type="button" className="sb-toc-btn" onClick={() => openChapter(i)}>
                    <span className="sb-toc-num">{c.number}</span>
                    <span className="sb-toc-title">{c.title}</span>
                    <span className="sb-toc-arrow">→</span>
                  </button>
                </li>
              ))}
            </ol>
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
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #1B2A4A;
  text-align: center;
  flex: 1;
  padding: 0 16px;
}

.sb-stage {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 32px 24px 60px;
}

/* Portrait book -- an actual book shape, not a wide slide */
.sb-book {
  width: 460px;
  max-width: 100%;
  min-height: 680px;
  background: #FFFDF7;
  border-radius: 18px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 24px 60px rgba(0,0,0,0.2), inset 3px 0 0 rgba(27,42,74,0.06);
  display: flex;
  flex-direction: column;
  padding: 30px 28px;
  animation: sb-page-in 0.28s ease;
}
@keyframes sb-page-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Cover ── */
.sb-cover { align-items: center; text-align: center; gap: 12px; }
.sb-cover-image { width: 100%; height: 190px; border-radius: 14px; overflow: hidden; margin-bottom: 4px; }
.sb-cover-image .img-ph { border-radius: 14px; }
.sb-cover-badge {
  display: inline-block;
  background: #FAECE7;
  color: #D85A30;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 999px;
}
.sb-cover-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.2;
  color: #1B2A4A;
  margin: 4px 0 0;
}
.sb-cover-subtitle {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #D85A30;
  margin: 0;
}
.sb-cover-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 13.5px;
  line-height: 1.55;
  color: #5C6478;
  margin: 4px 0 4px;
}
.sb-characters { width: 100%; margin: 6px 0 4px; }
.sb-characters-heading {
  display: block;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #94A0B8;
  margin-bottom: 8px;
}
.sb-characters-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.sb-character-card {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FAF7EF;
  border-radius: 10px;
  padding: 8px;
  text-align: left;
}
.sb-character-avatar { width: 40px; height: 40px; flex-shrink: 0; border-radius: 8px; overflow: hidden; }
.sb-character-avatar .img-ph { border-radius: 8px; }
.sb-character-info { display: flex; flex-direction: column; min-width: 0; }
.sb-character-name { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 12.5px; color: #1B2A4A; }
.sb-character-role { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 10px; color: #D85A30; }
.sb-character-look { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 10px; color: #94A0B8; line-height: 1.3; }
.sb-cta-btn {
  background: #D85A30;
  color: #fff;
  border: none;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  padding: 13px 30px;
  cursor: pointer;
  box-shadow: 0 3px 0 #A8431F;
  margin-top: 4px;
}
.sb-cta-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #A8431F; }

/* ── Table of contents ── */
.sb-toc-heading {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
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
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: #D85A30;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.sb-toc-title {
  flex: 1;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #1B2A4A;
}
.sb-toc-arrow { color: #D85A30; font-weight: 700; }

/* ── Chapter page chrome ── */
.sb-page-header { display: flex; align-items: center; justify-content: space-between; }
.sb-page-header-label {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 10.5px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #D85A30;
}
.sb-page-header-counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #94A0B8;
}
.sb-progress-track { height: 3px; background: #EFEAE0; border-radius: 999px; margin: 9px 0 18px; overflow: hidden; }
.sb-progress-fill { height: 100%; background: #D85A30; transition: width 0.2s ease; }

.sb-page-body { flex: 1; min-height: 260px; }
.sb-page { display: flex; flex-direction: column; gap: 10px; }
.sb-page-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 18px; color: #1B2A4A; margin: 0; }
.sb-page-title-sub { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 12px; color: #94A0B8; }
.sb-page-hint { font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: 13px; color: #7C8598; margin: -4px 0 4px; }

/* ── Story ── */
.sb-lead-image { width: 100%; height: 150px; border-radius: 12px; overflow: hidden; margin-bottom: 4px; }
.sb-lead-image .img-ph { border-radius: 12px; }
.sb-chapter-num {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #D85A30;
}
.sb-chapter-title { font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 22px; color: #1B2A4A; margin: 3px 0 10px; }
.sb-story-text {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.7;
  color: #1B2A4A;
  margin: 0;
}

/* ── Questions ── */
.sb-qlist { margin: 0; padding: 0 0 0 18px; display: flex; flex-direction: column; gap: 12px; }
.sb-qitem { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 15px; color: #1B2A4A; }

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
.sb-tf-text { font-family: 'Quicksand', sans-serif; font-weight: 600; font-size: 14px; color: #1B2A4A; }
.sb-tf-buttons { display: flex; gap: 8px; flex-shrink: 0; }
.sb-tf-btn {
  background: #fff;
  border: 2px solid #DADCE3;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 15px;
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
  transition: border-color 0.15s ease, background 0.15s ease;
}
.sb-build-row.is-correct { border-color: #3B9A6B; border-style: solid; background: #E4F6EC; }
.sb-build-row.is-wrong { border-color: #E0637A; border-style: solid; background: #FDEBEF; }
.sb-build-empty { font-family: 'Quicksand', sans-serif; font-size: 12.5px; color: #C2C6D2; }
.sb-word-tray { display: flex; flex-wrap: wrap; gap: 8px; min-height: 34px; }
.sb-word-chip {
  background: #fff;
  border: 2px solid #EAE6DC;
  color: #1B2A4A;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  padding: 6px 13px;
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
  font-size: 13px;
  padding: 8px 18px;
  cursor: pointer;
  box-shadow: 0 3px 0 #A8431F;
}
.sb-check-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #A8431F; }
.sb-check-btn:disabled { opacity: 0.35; cursor: default; box-shadow: 0 3px 0 #A8431F; }
.sb-build-feedback { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 13px; }
.sb-build-feedback.is-good { color: #2C6B4F; }
.sb-build-feedback.is-retry { color: #B03A52; }
.sb-retry-btn {
  background: #fff;
  color: #1B2A4A;
  border: 2px solid #DADCE3;
  border-radius: 999px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  padding: 7px 15px;
  cursor: pointer;
}

/* ── My Sentence ── */
.sb-example { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #94A0B8; margin: 0; }
.sb-my-sentence-input {
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: #1B2A4A;
  border: 2px solid #EAE6DC;
  border-radius: 12px;
  padding: 11px 13px;
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
  font-size: 12.5px;
  padding: 8px 15px;
  cursor: pointer;
}
.sb-nav-btn--primary { background: #D85A30; border-color: #D85A30; color: #fff; }
.sb-nav-btn:disabled { opacity: 0.35; cursor: default; }
.sb-nav-dots { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; max-width: 90px; }
.sb-nav-dot { width: 6px; height: 6px; border-radius: 999px; background: #E4E0D4; }
.sb-nav-dot.is-active { width: 14px; background: #D85A30; }

@media (max-width: 520px) {
  .sb-book { padding: 22px 18px; }
  .sb-characters-grid { grid-template-columns: 1fr; }
}
`;
