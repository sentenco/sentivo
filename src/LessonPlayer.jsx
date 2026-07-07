import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import SlideTitle from "./slides/SlideTitle";
import SlideWarmup from "./slides/SlideWarmup";
import SlideVocabulary from "./slides/SlideVocabulary";
import SlidePhrases from "./slides/SlidePhrases";
import SlideActivity from "./slides/SlideActivity";
import SlideSpeaking from "./slides/SlideSpeaking";
import SlideReading from "./slides/SlideReading";
import SlideWriting from "./slides/SlideWriting";
import SlideReview from "./slides/SlideReview";
import SlideScenario from "./slides/SlideScenario";
import SlideDiagnosis from "./slides/SlideDiagnosis";
import SlideUpgrade from "./slides/SlideUpgrade";
import SlideTransfer from "./slides/SlideTransfer";

const SLIDE_COMPONENTS = {
  title: SlideTitle,
  warmup: SlideWarmup,
  vocabulary: SlideVocabulary,
  phrases: SlidePhrases,
  activity: SlideActivity,
  speaking: SlideSpeaking,
  reading: SlideReading,
  writing: SlideWriting,
  review: SlideReview,
  // C1/C2 advanced-track slide types (see docs/curriculum/*-teacher-guidance.md)
  scenario: SlideScenario,
  diagnosis: SlideDiagnosis,
  upgrade: SlideUpgrade,
  transfer: SlideTransfer,
};

const SLIDE_TYPE_LABELS = {
  title: "Title",
  warmup: "Warm-up",
  vocabulary: "Vocabulary",
  phrases: "Key Phrases",
  activity: "Activity",
  speaking: "Speaking",
  reading: "Reading",
  writing: "Writing",
  review: "Review",
  scenario: "Scenario",
  diagnosis: "Diagnosis",
  upgrade: "Upgrade Clinic",
  transfer: "Transfer",
};

// These slide types are teacher-only coaching content (purpose, what to
// listen for, likely student responses, upgrade language, intervention
// prompts) — never part of the student-paced Next/Prev sequence. Shown
// instead in a separate Teacher Notes panel. See sql/lessons/README.md.
const TEACHER_ONLY_TYPES = new Set(["diagnosis", "upgrade", "transfer"]);

export default function LessonPlayer({ lessonId: lessonIdProp }) {
  const params = useParams();
  const lessonId = lessonIdProp || params.id;

  const [lesson, setLesson] = useState(null);
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showTeacherNotes, setShowTeacherNotes] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [lessonRes, slidesRes] = await Promise.all([
          supabase.from("lessons").select("*").eq("id", lessonId).limit(1),
          supabase
            .from("lesson_slides")
            .select("*")
            .eq("lesson_id", lessonId)
            .eq("is_active", true)
            .order("slide_number", { ascending: true }),
        ]);
        if (lessonRes.error) throw lessonRes.error;
        if (slidesRes.error) throw slidesRes.error;
        if (cancelled) return;
        setLesson(lessonRes.data[0]);
        setSlides(slidesRes.data || []);
        setCurrent(0);
      } catch (e) {
        if (!cancelled) setError(e.message || "Could not load this lesson.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (lessonId) load();
    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  const studentSlides = slides.filter((s) => !TEACHER_ONLY_TYPES.has(s.slide_type));
  const teacherSlides = slides.filter((s) => TEACHER_ONLY_TYPES.has(s.slide_type));

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(0, c - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(studentSlides.length - 1, c + 1));
  }, [studentSlides.length]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  if (loading) {
    return (
      <div className="lp-shell lp-shell--state">
        <style>{CSS}</style>
        <div className="lp-status">Loading lesson…</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lp-shell lp-shell--state">
        <style>{CSS}</style>
        <div className="lp-status lp-status--error">
          Couldn't load this lesson.
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!studentSlides.length) {
    return (
      <div className="lp-shell lp-shell--state">
        <style>{CSS}</style>
        <div className="lp-status">This lesson doesn't have any slides yet.</div>
      </div>
    );
  }

  const slide = studentSlides[current];
  const SlideComponent = SLIDE_COMPONENTS[slide.slide_type];
  const progress = ((current + 1) / studentSlides.length) * 100;
  const isAdult = lesson?.age_track === "adults";

  return (
    <div className={`lp-shell ${isAdult ? "is-adult" : ""}`}>
      <style>{CSS}</style>

      <div className="lp-header">
        <div className="lp-wordmark">
          sentivo{!isAdult && <span className="lp-dot">•</span>}
        </div>
        <div className="lp-slide-type">
          {SLIDE_TYPE_LABELS[slide.slide_type] || slide.slide_type}
        </div>
        {teacherSlides.length > 0 && (
          <button
            type="button"
            className="lp-teacher-toggle"
            onClick={() => setShowTeacherNotes((v) => !v)}
          >
            {showTeacherNotes ? "Close Notes" : "Teacher Notes"}
          </button>
        )}
        <div className="lp-counter">
          {current + 1} / {studentSlides.length}
        </div>
      </div>

      <div className="lp-progress-track">
        <div className="lp-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="lp-slide-area">
        {showTeacherNotes ? (
          <div className="lp-teacher-panel">
            {teacherSlides.map((ts) => {
              const TeacherComponent = SLIDE_COMPONENTS[ts.slide_type];
              return TeacherComponent ? (
                <div className="lp-teacher-block" key={ts.id ?? ts.slide_number}>
                  <TeacherComponent content={ts.content || {}} lesson={lesson} />
                </div>
              ) : null;
            })}
          </div>
        ) : SlideComponent ? (
          <SlideComponent content={slide.content || {}} lesson={lesson} />
        ) : (
          <div className="lp-status lp-status--error">
            Unknown slide type: {slide.slide_type}
          </div>
        )}
      </div>

      <div className="lp-nav">
        <button className="lp-btn" onClick={goPrev} disabled={current === 0 || showTeacherNotes}>
          <span aria-hidden="true">←</span> Previous
        </button>

        <div className="lp-dots">
          {studentSlides.map((s, i) => (
            <button
              key={s.id ?? i}
              type="button"
              className={`lp-dot ${i === current && !showTeacherNotes ? "is-active" : ""}`}
              onClick={() => {
                setShowTeacherNotes(false);
                setCurrent(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="lp-btn"
          onClick={goNext}
          disabled={current === studentSlides.length - 1 || showTeacherNotes}
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap');

.lp-shell {
  width: 780px;
  height: 440px;
  background: #fff;
  border-radius: 16px;
  border: 3px solid #1B2A4A;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
}
.lp-shell * { box-sizing: border-box; }

.lp-shell--state { align-items: center; justify-content: center; }
.lp-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  color: #1B2A4A;
  font-size: 16px;
  text-align: center;
  padding: 0 40px;
}
.lp-status span { font-size: 13px; font-weight: 500; color: #94A0B8; }
.lp-status--error { color: #C2452F; }

.lp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px 8px;
  flex-shrink: 0;
}
.lp-wordmark {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1B2A4A;
}
.lp-dot { color: #FF7A59; }
.lp-slide-type {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #A6ADC1;
}
.lp-counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #7C8598;
}
.lp-teacher-toggle {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #5C6F8A;
  background: transparent;
  border: 1px solid #5C6F8A;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
}
.lp-teacher-panel {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.lp-teacher-block {
  border-bottom: 1px solid #DEDAD0;
}
.lp-teacher-block:last-child { border-bottom: none; }
/* Teacher-note components normally assume a fixed-height slide frame;
   override to natural content height when stacked in the notes panel. */
.lp-teacher-panel .sldg-slide,
.lp-teacher-panel .slug-slide,
.lp-teacher-panel .sltr-slide {
  height: auto;
}
.lp-teacher-panel .sldg-body,
.lp-teacher-panel .slug-body,
.lp-teacher-panel .sltr-body {
  overflow-y: visible;
}

.lp-progress-track {
  height: 3px;
  background: #EFEFF2;
  flex-shrink: 0;
}
.lp-progress-fill {
  height: 100%;
  background: #FF7A59;
  transition: width 0.25s ease;
}

.lp-slide-area {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
}

.lp-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  flex-shrink: 0;
}
.lp-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #FF7A59;
  color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 3px 0 #C2452F;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  padding: 9px 16px;
  cursor: pointer;
}
.lp-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #C2452F; }
.lp-btn:disabled { opacity: 0.3; cursor: default; box-shadow: 0 3px 0 #C2452F; pointer-events: none; }

.lp-dots { display: flex; align-items: center; gap: 6px; }
.lp-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #DADCE3;
  border: none;
  padding: 0;
  cursor: pointer;
}
.lp-dot.is-active { width: 20px; background: #FF7A59; }

/* ── Adults theme: editorial, muted, no bounce ── */
.lp-shell.is-adult {
  background: #F7F5EF;
  border: 1px solid #DEDAD0;
  border-radius: 6px;
  box-shadow: 0 24px 60px rgba(0,0,0,0.35);
  font-family: 'Inter', sans-serif;
}
.lp-shell.is-adult .lp-wordmark {
  font-family: 'Source Serif 4', serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #1B2A4A;
}
.lp-shell.is-adult .lp-slide-type {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #B7ADA0;
}
.lp-shell.is-adult .lp-counter {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #8A8272;
}
.lp-shell.is-adult .lp-progress-track { background: #EDEAE2; }
.lp-shell.is-adult .lp-progress-fill { background: #B5502E; }
.lp-shell.is-adult .lp-btn {
  background: #1B2A4A;
  border-radius: 4px;
  box-shadow: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
}
.lp-shell.is-adult .lp-btn:active { transform: none; box-shadow: none; }
.lp-shell.is-adult .lp-btn:disabled { box-shadow: none; }
.lp-shell.is-adult .lp-dot {
  border-radius: 2px;
  width: 12px;
  height: 3px;
  background: #DEDAD0;
}
.lp-shell.is-adult .lp-dot.is-active { width: 22px; background: #1B2A4A; }
`;
