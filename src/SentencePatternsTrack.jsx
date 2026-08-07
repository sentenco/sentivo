import LESSONS from "./spTracks";

// Sentence Patterns lessons open as a standalone popup player, matching the
// Parts of Speech / Verb Tenses / FORGE / ASCEND chrome-less window.open pattern.
function openLesson(code) {
  const screenW = window.screen.availWidth || 1600;
  const screenH = window.screen.availHeight || 900;
  const w = Math.min(1180, screenW - 40);
  const h = Math.min(680, screenH - 80);
  const left = Math.max(0, Math.floor((screenW - w) / 2));
  const top = Math.max(0, Math.floor((screenH - h) / 2));

  window.open(
    `/library/grammar/sentence-patterns/${code}`,
    "sentivoSentencePatterns",
    `width=${w},height=${h},left=${left},top=${top},toolbar=no,location=no,menubar=no,status=no,scrollbars=yes,resizable=yes`
  );
}

export default function SentencePatternsTrack() {
  return (
    <div className="spt-shell">
      <style>{CSS}</style>
      <header className="spt-topbar">
        <span className="spt-topbar-title">Sentence Patterns</span>
      </header>

      <div className="spt-stage">
        <div className="spt-hero">
          <h1 className="spt-hero-title">Sentence Patterns</h1>
          <p className="spt-hero-blurb">
            The 7 core English sentence patterns — SV, SVO, SVC, SVA, SVOA, SVOO, SVOC — across 6 lessons. Each one
            teaches, practices, and assesses in a single sitting.
          </p>
        </div>

        <div className="spt-lessons-grid">
          {LESSONS.map((lesson) => (
            <button
              key={lesson.code}
              type="button"
              className="spt-lesson-card"
              onClick={() => openLesson(lesson.code)}
            >
              <span className="spt-lesson-num">Lesson {lesson.number}</span>
              <h3 className="spt-lesson-name">{lesson.title}</h3>
              <span className="spt-lesson-pattern">{lesson.patternLabel}</span>
              <span className="spt-lesson-cta">Open lesson →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.spt-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 0%, #F2ECE0 0%, #E9DFC9 50%, #DED0AE 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.spt-shell * { box-sizing: border-box; }

.spt-topbar {
  width: 100%;
  max-width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 24px 0;
}
.spt-topbar-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #8A6748;
}

.spt-stage {
  flex: 1;
  width: 100%;
  max-width: 980px;
  padding: 40px 24px 60px;
}

.spt-hero { margin-bottom: 32px; }
.spt-hero-title {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #4A3620;
  margin: 0 0 10px;
}
.spt-hero-blurb {
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #7A6042;
  margin: 0;
  max-width: 640px;
  line-height: 1.5;
}

.spt-lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.spt-lesson-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: #FFFFFF;
  border: 1px solid #E4D6BF;
  border-radius: 14px;
  padding: 16px 16px 14px;
  box-shadow: 0 10px 24px rgba(74,54,32,0.08);
  cursor: pointer;
  text-align: left;
  font: inherit;
}

.spt-lesson-num {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #8A6748;
  background: rgba(138,103,72,0.12);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
}

.spt-lesson-name {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #4A3620;
  margin: 0;
  line-height: 1.25;
}

.spt-lesson-pattern {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.4px;
  color: #4C9A5D;
}

.spt-lesson-cta {
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #F2ECE0;
  width: 100%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #B0662E;
}

@media (max-width: 900px) {
  .spt-lessons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .spt-lessons-grid { grid-template-columns: 1fr; }
}
`;
