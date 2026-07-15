import { useState } from "react";
import SlideHeader from "./SlideHeader";

const SPEAKER_COLOR = { A: "#FF9478", B: "#6FC9A3" };

/* ───────────────────────── Role-play: act out a short scene ───────────────────────── */
function RoleplayPerform({ content }) {
  return (
    <div className="slpf-body">
      {content.scene && <div className="slpf-scene">{content.scene}</div>}
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

/* ───────────────────────── Interview: a short question list ───────────────────────── */
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
  padding: 12px 28px 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  overflow: auto;
}
.slpf-body--center { align-items: center; justify-content: center; text-align: center; }

.slpf-scene {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--k-accent-dark, #E06B4C);
  background: var(--k-tint, #FFEDE0);
  border-radius: 999px;
  padding: 8px 18px;
  align-self: center;
  text-align: center;
}
.slpf-dialogue {
  background: var(--k-tint, #F7F8FA);
  border-radius: 14px;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.slpf-line { font-family: 'Quicksand', sans-serif; font-size: 17px; color: #1B2A4A; }
.slpf-speaker { font-weight: 700; margin-right: 6px; }
.slpf-text { font-weight: 600; }
.slpf-twist {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: var(--k-accent-dark, #E06B4C);
  text-align: center;
  padding: 4px 16px;
}

.slpf-mic { font-size: 44px; }
.slpf-prompt {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #1B2A4A;
  margin: 0;
  max-width: 440px;
}
.slpf-starters { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
.slpf-starter {
  background: var(--k-tint, #FFEDE0);
  color: var(--k-accent-dark, #E06B4C);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  padding: 8px 16px;
  border-radius: 999px;
}

.slpf-qlist { display: flex; flex-direction: column; gap: 12px; justify-content: center; flex: 1; }
.slpf-qcard {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--k-tint, #F7F6F3);
  border-radius: 14px;
  padding: 14px 18px;
}
.slpf-qnum {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: var(--k-accent, #FF9478);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13px;
}
.slpf-qtext { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 17px; color: #1B2A4A; }

.slpf-choose-options { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }
.slpf-choose-card {
  width: 150px;
  padding: 18px 14px;
  border-radius: 18px;
  border: 3px solid var(--k-tint, #EEE);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.12s ease, border-color 0.12s ease;
}
.slpf-choose-card:hover { transform: translateY(-2px); }
.slpf-choose-card.is-picked { border-color: var(--k-accent, #FF9478); background: var(--k-tint, #FFEDE0); }
.slpf-choose-emoji { font-size: 40px; }
.slpf-choose-text { font-family: 'Quicksand', sans-serif; font-weight: 700; font-size: 15.5px; color: #1B2A4A; }
.slpf-why {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--k-accent-dark, #E06B4C);
}
`;
