import { useState } from "react";
import SlideHeader from "./SlideHeader";
import ImagePlaceholder from "./ImagePlaceholder";

const SPEAKER_COLOR = { A: "#FFC933", B: "#8B5CF6" };

/* ───────────────────────── Role-play: act out a short scene ─────────────────────────
   Content authors: max 3 lines so this fits with no scroll. */
function RoleplayPerform({ content }) {
  return (
    <div className="slpf-roleplay">
      <div className="slpf-scene-img">
        {content.image_url ? (
          <img src={content.image_url} alt="" />
        ) : (
          <ImagePlaceholder note={content.image_note} compact />
        )}
      </div>
      <div className="slpf-roleplay-right">
        <div className="slpf-dialogue">
          {(content.lines || []).map((line, i) => (
            <div className="slpf-line" key={i}>
              <span className="slpf-speaker" style={{ color: SPEAKER_COLOR[line.speaker] || "#1B2A4A" }}>
                {line.speaker}:
              </span>
              <span className="slpf-text">{line.text}</span>
            </div>
          ))}
        </div>
        {content.twist && <div className="slpf-twist">✦ {content.twist}</div>}
      </div>
    </div>
  );
}

/* ───────────────────────── Talk: one-minute talk / show-and-tell ───────────────────────── */
function TalkPerform({ content }) {
  return (
    <div className="slpf-body slpf-body--center">
      <div className="slpf-mic" aria-hidden="true">
        🎤
      </div>
      <p className="slpf-prompt">{content.prompt}</p>
      {(content.starters || []).length > 0 && (
        <div className="slpf-starters">
          {content.starters.map((s, i) => (
            <span className="slpf-starter" key={i}>
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ───────────────────────── Interview: a short question list ─────────────────────────
   Content authors: max 3 questions so this fits with no scroll. */
function InterviewPerform({ content }) {
  return (
    <div className="slpf-body">
      <div className="slpf-qlist">
        {(content.questions || []).map((q, i) => (
          <div className="slpf-qcard" key={i}>
            <span className="slpf-qnum">{i + 1}</span>
            <span className="slpf-qtext">{q}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── Choose: opinion pick, no right answer ───────────────────────── */
function ChoosePerform({ content }) {
  const [picked, setPicked] = useState(null);
  const options = content.options || [];

  return (
    <div className="slpf-body slpf-body--center">
      {content.prompt && <p className="slpf-prompt">{content.prompt}</p>}
      <div className="slpf-choose-options">
        {options.map((opt, i) => (
          <button
            type="button"
            key={i}
            className={`slpf-choose-card ${picked === i ? "is-picked" : ""}`}
            onClick={() => setPicked(i)}
          >
            <span className="slpf-choose-emoji">{opt.emoji}</span>
            <span className="slpf-choose-text">{opt.text}</span>
          </button>
        ))}
      </div>
      {picked !== null && <div className="slpf-why">💬 Tell me why!</div>}
    </div>
  );
}

export default function SlidePerform({ content }) {
  const mode = content.mode || "talk";

  return (
    <div className="slpf-slide">
      <style>{CSS}</style>
      <SlideHeader
        tag={content.tag || "Activity"}
        title={content.title || "Your Turn"}
        subtitle={content.subtitle || "Let's use what you learned."}
      />
      {mode === "roleplay" && <RoleplayPerform content={content} />}
      {mode === "interview" && <InterviewPerform content={content} />}
      {mode === "choose" && <ChoosePerform content={content} />}
      {mode === "talk" && <TalkPerform content={content} />}
    </div>
  );
}

const CSS = `
.slpf-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.slpf-body {
  flex: 1;
  min-height: 0;
  padding: 10px 28px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.slpf-body--center { align-items: center; justify-content: center; text-align: center; }

/* ── Role-play: image left, dialogue right ── */
.slpf-roleplay {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: 16px;
  padding: 10px 24px 14px 24px;
}
.slpf-scene-img {
  flex-shrink: 0;
  width: 32%;
}
.slpf-scene-img .img-ph { border-radius: 14px; }
.slpf-scene-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; }
.slpf-roleplay-right {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
.slpf-dialogue {
  background: var(--k-tint, #FFE4A3);
  border-radius: 14px;
  padding: 11px 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.slpf-line { font-family: 'Quicksand', sans-serif; font-size: 15.5px; color: #1B2A4A; }
.slpf-speaker { font-weight: 700; margin-right: 6px; }
.slpf-text { font-weight: 600; }
.slpf-twist {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: var(--k-accent-dark, #E8A400);
  text-align: center;
  padding: 2px 8px;
}

.slpf-mic { font-size: 42px; }
.slpf-prompt {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #1B2A4A;
  margin: 0;
  max-width: 440px;
}
.slpf-starters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.slpf-starter {
  background: var(--k-bg-cool, #FFF3D2);
  color: var(--k-accent-dark, #E8A400);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 7px 15px;
  border-radius: 999px;
}

.slpf-qlist { display: flex; flex-direction: column; gap: 10px; justify-content: center; flex: 1; }
.slpf-qcard {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--k-bg-cool, #FFF3D2);
  border-radius: 14px;
  padding: 11px 16px;
}
.slpf-qnum {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: var(--k-accent, #FFC933);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 12px;
}
.slpf-qtext { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15.5px; color: #1B2A4A; }

.slpf-choose-options { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }
.slpf-choose-card {
  width: 140px;
  padding: 16px 12px;
  border-radius: 18px;
  border: 3px solid var(--k-tint, #FFE4A3);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.slpf-choose-card:hover { transform: translateY(-2px); }
.slpf-choose-card.is-picked { border-color: var(--k-accent, #FFC933); background: var(--k-bg-cool, #FFF3D2); }
.slpf-choose-emoji { font-size: 38px; }
.slpf-choose-text { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15px; color: #1B2A4A; }
.slpf-why {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: var(--k-accent-dark, #E8A400);
}
`;
