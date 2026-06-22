import React, { useState, useMemo } from "react";

const WORDS = [
  { id: "record", word: "RECORD", level: "beginner",
    noun: { syllables: ["REC", "ord"], ipa: "/\u02c8rek.\u0259rd/", meaning: "A piece of music, or written information kept for the future.", example: "She bought a new RE-cord by her favorite singer." },
    verb: { syllables: ["re", "CORD"], ipa: "/r\u026a\u02c8k\u0254\u02d0rd/", meaning: "To save sound, video, or information using a device.", example: "Can you re-CORD the meeting for me?" } },
  { id: "present", word: "PRESENT", level: "beginner",
    noun: { syllables: ["PRES", "ent"], ipa: "/\u02c8prez.\u0259nt/", meaning: "A gift, or the current moment in time.", example: "I got a birthday PRES-ent from my sister." },
    verb: { syllables: ["pre", "SENT"], ipa: "/pr\u026a\u02c8zent/", meaning: "To show or give something formally, often to an audience.", example: "I will pre-SENT my project tomorrow." } },
  { id: "object", word: "OBJECT", level: "beginner",
    noun: { syllables: ["OB", "ject"], ipa: "/\u02c8\u0252b.d\u0292\u0268kt/", meaning: "A thing that you can see or touch.", example: "What is that strange OB-ject on the table?" },
    verb: { syllables: ["ob", "JECT"], ipa: "/\u0259b\u02c8d\u0292ekt/", meaning: "To say that you disagree with something.", example: "I ob-JECT to that plan." } },
  { id: "contract", word: "CONTRACT", level: "beginner",
    noun: { syllables: ["CON", "tract"], ipa: "/\u02c8k\u0252n.tr\u00e6kt/", meaning: "A written legal agreement between people or companies.", example: "Please sign the CON-tract before you start work." },
    verb: { syllables: ["con", "TRACT"], ipa: "/k\u0259n\u02c8tr\u00e6kt/", meaning: "To become smaller, or to get an illness.", example: "Metal can con-TRACT in cold weather." } },
  { id: "desert", word: "DESERT", level: "beginner",
    noun: { syllables: ["DES", "ert"], ipa: "/\u02c8dez.\u0259rt/", meaning: "A large area of land with very little water or rain.", example: "Camels can survive in the DES-ert." },
    verb: { syllables: ["de", "SERT"], ipa: "/d\u026a\u02c8z\u025c\u02d0rt/", meaning: "To leave someone or something behind, often when they need you.", example: "He would never de-SERT his friends." } },
  { id: "permit", word: "PERMIT", level: "beginner",
    noun: { syllables: ["PER", "mit"], ipa: "/\u02c8p\u025c\u02d0r.m\u026at/", meaning: "An official document that allows you to do something.", example: "You need a PER-mit to park here." },
    verb: { syllables: ["per", "MIT"], ipa: "/p\u0259r\u02c8m\u026at/", meaning: "To allow something to happen.", example: "They don't per-MIT smoking inside." } },
  { id: "export", word: "EXPORT", level: "beginner",
    noun: { syllables: ["EX", "port"], ipa: "/\u02c8ek.sp\u0254\u02d0rt/", meaning: "A product sent and sold to another country.", example: "Coffee is a major EX-port for this country." },
    verb: { syllables: ["ex", "PORT"], ipa: "/\u026ak\u02c8sp\u0254\u02d0rt/", meaning: "To send goods to another country to sell.", example: "They ex-PORT rice to many countries." } },
  { id: "import", word: "IMPORT", level: "beginner",
    noun: { syllables: ["IM", "port"], ipa: "/\u02c8\u026am.p\u0254\u02d0rt/", meaning: "A product brought in from another country.", example: "This car is an IM-port from Japan." },
    verb: { syllables: ["im", "PORT"], ipa: "/\u026am\u02c8p\u0254\u02d0rt/", meaning: "To bring goods into a country to sell.", example: "We im-PORT most of our fruit." } },
  { id: "increase", word: "INCREASE", level: "beginner",
    noun: { syllables: ["IN", "crease"], ipa: "/\u02c8\u026an.kri\u02d0s/", meaning: "A rise in the amount or level of something.", example: "There was a big IN-crease in sales." },
    verb: { syllables: ["in", "CREASE"], ipa: "/\u026an\u02c8kri\u02d0s/", meaning: "To make something become bigger or more.", example: "Prices will in-CREASE next month." } },
  { id: "decrease", word: "DECREASE", level: "beginner",
    noun: { syllables: ["DE", "crease"], ipa: "/\u02c8di\u02d0.kri\u02d0s/", meaning: "A reduction in the amount or level of something.", example: "We saw a small DE-crease in cost." },
    verb: { syllables: ["de", "CREASE"], ipa: "/d\u026a\u02c8kri\u02d0s/", meaning: "To make something become smaller or less.", example: "Try to de-CREASE your sugar intake." } },
  { id: "rebel", word: "REBEL", level: "beginner",
    noun: { syllables: ["REB", "el"], ipa: "/\u02c8reb.\u0259l/", meaning: "A person who fights against authority or rules.", example: "The REB-el refused to follow orders." },
    verb: { syllables: ["re", "BEL"], ipa: "/r\u026a\u02c8bel/", meaning: "To fight or act strongly against authority.", example: "Teenagers sometimes re-BEL against their parents." } },
  { id: "produce", word: "PRODUCE", level: "intermediate",
    noun: { syllables: ["PROD", "uce"], ipa: "/\u02c8pr\u0252d.ju\u02d0s/", meaning: "Fresh fruits and vegetables, especially from farming.", example: "This market sells fresh PROD-uce." },
    verb: { syllables: ["pro", "DUCE"], ipa: "/pr\u0259\u02c8dju\u02d0s/", meaning: "To make or create something, often in large amounts.", example: "This factory can pro-DUCE 500 cars a day." } },
  { id: "conduct", word: "CONDUCT", level: "intermediate",
    noun: { syllables: ["CON", "duct"], ipa: "/\u02c8k\u0252n.d\u0259kt/", meaning: "The way a person behaves.", example: "His CON-duct in class was excellent." },
    verb: { syllables: ["con", "DUCT"], ipa: "/k\u0259n\u02c8d\u0259kt/", meaning: "To organize and carry out an activity, like research or a survey.", example: "We will con-DUCT an interview tomorrow." } },
  { id: "content", word: "CONTENT", level: "intermediate",
    noun: { syllables: ["CON", "tent"], ipa: "/\u02c8k\u0252n.tent/", meaning: "Information or material, such as in a book, video, or website.", example: "The CON-tent of the article was very useful." },
    verb: { syllables: ["con", "TENT"], ipa: "/k\u0259n\u02c8tent/", meaning: "(adjective) Satisfied and at peace with a situation.", example: "She felt con-TENT with her simple life." } },
  { id: "progress", word: "PROGRESS", level: "intermediate",
    noun: { syllables: ["PROG", "ress"], ipa: "/\u02c8pr\u0252\u0261.res/", meaning: "Forward movement or improvement over time.", example: "She made great PROG-ress this year." },
    verb: { syllables: ["pro", "GRESS"], ipa: "/pr\u0259\u02c8\u0261res/", meaning: "To move forward or improve gradually.", example: "His English will pro-GRESS quickly with practice." } },
  { id: "address", word: "ADDRESS", level: "intermediate",
    noun: { syllables: ["AD", "dress"], ipa: "/\u02c8\u00e6d.res/", meaning: "The location where someone lives or where mail is sent.", example: "Please write your AD-dress here." },
    verb: { syllables: ["a", "DRESS"], ipa: "/\u0259\u02c8dres/", meaning: "To deal with or talk about a problem directly.", example: "We need to a-DRESS this issue now." } },
  { id: "contrast", word: "CONTRAST", level: "intermediate",
    noun: { syllables: ["CON", "trast"], ipa: "/\u02c8k\u0252n.tr\u00e6st/", meaning: "A clear difference between two things.", example: "There's a big CON-trast between the two designs." },
    verb: { syllables: ["con", "TRAST"], ipa: "/k\u0259n\u02c8tr\u00e6st/", meaning: "To compare two things to show how different they are.", example: "Let's con-TRAST these two opinions." } },
  { id: "subject", word: "SUBJECT", level: "intermediate",
    noun: { syllables: ["SUB", "ject"], ipa: "/\u02c8s\u0259b.d\u0292\u0268kt/", meaning: "A topic, or a school course.", example: "Math is my favorite SUB-ject." },
    verb: { syllables: ["sub", "JECT"], ipa: "/s\u0259b\u02c8d\u0292ekt/", meaning: "To force someone to experience something, usually unpleasant.", example: "They sub-JECT-ed him to a long interview." } },
  { id: "project", word: "PROJECT", level: "intermediate",
    noun: { syllables: ["PROJ", "ect"], ipa: "/\u02c8pr\u0252d\u0292.ekt/", meaning: "A planned piece of work with a specific goal.", example: "Our PROJ-ect is due next Friday." },
    verb: { syllables: ["pro", "JECT"], ipa: "/pr\u0259\u02c8d\u0292ekt/", meaning: "To estimate or forecast something for the future.", example: "We pro-JECT higher sales next year." } },
  { id: "suspect", word: "SUSPECT", level: "intermediate",
    noun: { syllables: ["SUS", "pect"], ipa: "/\u02c8s\u0259s.pekt/", meaning: "A person thought to be responsible for a crime.", example: "Police questioned the SUS-pect for hours." },
    verb: { syllables: ["sus", "PECT"], ipa: "/s\u0259\u02c8spekt/", meaning: "To believe something is true without being certain, often something bad.", example: "I sus-PECT he is lying." } },
];

const LEVELS = [
  { key: "beginner", label: "Beginner" },
  { key: "intermediate", label: "Intermediate" },
  { key: "all", label: "All levels" },
];

function StressWord({ syllables, big }) {
  return (
    <span className={`stress-word ${big ? "stress-word--big" : ""}`}>
      {syllables.map((syl, i) => {
        const isStressed = syl === syl.toUpperCase() && syl.length > 1;
        return (
          <span key={i} className={isStressed ? "syl syl--stressed" : "syl"}>
            {syl.toLowerCase()}
          </span>
        );
      })}
    </span>
  );
}

function BeginnerCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [activeForm, setActiveForm] = useState("noun");
  const forms = ["noun", "verb", "adjective"].filter((f) => item[f]);
  const current = item[activeForm] || item[forms[0]];

  return (
    <div className="b-card-wrap">
      <div
        className={`b-card ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        <div className="b-card-face b-card-front">
          <div className="b-blob b-blob-1" />
          <div className="b-blob b-blob-2" />
          <div className="b-pair">
            {forms.map((f) => (
              <div className="b-pair-item" key={f}>
                <StressWord syllables={item[f].syllables} big />
                <span className="b-tag">{f}</span>
              </div>
            ))}
          </div>
          <div className="b-hint">tap to flip</div>
        </div>
        <div className="b-card-face b-card-back">
          <div className="b-back-tabs" onClick={(e) => e.stopPropagation()}>
            {forms.map((f) => (
              <button
                key={f}
                className={`b-tab ${activeForm === f ? "is-active" : ""}`}
                onClick={() => setActiveForm(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="b-back-word">
            <StressWord syllables={current.syllables} />
            <span className="b-ipa">{current.ipa}</span>
          </div>
          <p className="b-meaning">{current.meaning}</p>
          <p className="b-example">"{current.example}"</p>
        </div>
      </div>
    </div>
  );
}

function ProCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const [activeForm, setActiveForm] = useState("noun");
  const forms = ["noun", "verb", "adjective"].filter((f) => item[f]);
  const current = item[activeForm] || item[forms[0]];

  return (
    <div className="p-card-wrap">
      <div
        className={`p-card ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        <div className="p-card-face p-card-front">
          <div className="p-rule" />
          <div className="p-pair">
            {forms.map((f, i) => (
              <React.Fragment key={f}>
                <div className="p-pair-item">
                  <StressWord syllables={item[f].syllables} big />
                  <span className="p-tag">{f}</span>
                </div>
                {i < forms.length - 1 && <div className="p-divider" />}
              </React.Fragment>
            ))}
          </div>
          <div className="p-hint">Click to reveal definitions</div>
        </div>
        <div className="p-card-face p-card-back">
          <div className="p-back-tabs" onClick={(e) => e.stopPropagation()}>
            {forms.map((f) => (
              <button
                key={f}
                className={`p-tab ${activeForm === f ? "is-active" : ""}`}
                onClick={() => setActiveForm(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="p-back-word">
            <StressWord syllables={current.syllables} />
            <span className="p-ipa">{current.ipa}</span>
          </div>
          <div className="p-rule p-rule--small" />
          <p className="p-meaning">{current.meaning}</p>
          <p className="p-example">{current.example}</p>
        </div>
      </div>
    </div>
  );
}

export default function Flashcards() {
  const [level, setLevel] = useState("beginner");
  const [index, setIndex] = useState(0);

  const filtered = useMemo(() => {
    if (level === "all") return WORDS;
    return WORDS.filter((w) => w.level === level);
  }, [level]);

  const safeIndex = Math.min(index, filtered.length - 1);
  const current = filtered[safeIndex];
  const isPro = level !== "beginner";

  function changeLevel(key) {
    setLevel(key);
    setIndex(0);
  }

  function next() {
    setIndex((i) => (i + 1) % filtered.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }

  return (
    <div className={`app ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="topbar">
      <a href="/" className="brand">
            sent<span className="brand-dot">i</span>vo
          </a>

        <div className="level-switch" role="tablist" aria-label="Choose level">
          {LEVELS.map((l) => (
            <button
              key={l.key}
              role="tab"
              aria-selected={level === l.key}
              className={`level-btn ${level === l.key ? "is-active" : ""}`}
              onClick={() => changeLevel(l.key)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </header>

      <main className="stage">
        {current ? (
          <>
            <div className="counter">
              {safeIndex + 1} / {filtered.length}
            </div>

            {isPro ? <ProCard key={current.id} item={current} /> : <BeginnerCard key={current.id} item={current} />}

            <div className="nav-row">
              <button className="nav-btn" onClick={prev} aria-label="Previous word">
                &larr; Prev
              </button>
              <button className="nav-btn nav-btn--next" onClick={next} aria-label="Next word">
                Next &rarr;
              </button>
            </div>
          </>
        ) : (
          <p>No words at this level yet.</p>
        )}
      </main>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Baloo+2:wght@600;700&family=Quicksand:wght@500;600&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { margin: 0; padding: 0; }

.app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px 40px;
  font-family: 'Inter', sans-serif;
  transition: background 0.4s ease;
}

.theme-fun {
  background: radial-gradient(circle at 20% 10%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  color: #3D3552;
}

.theme-pro {
  background: #F7F5EF;
  color: #1B2A4A;
}

.topbar {
  width: 100%;
  max-width: 640px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 14px;
  position: relative;
}

.back-link {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: -34px;
}
.theme-pro .back-link { font-family: 'Inter', sans-serif; }
.back-link:hover { opacity: 1; }

.brand {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 1;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.brand-dot { color: #FF7A59; }
.theme-pro .brand-dot { color: #B08D57; }
.theme-pro .brand { font-family: 'Source Serif 4', serif; font-weight: 700; }

.level-switch {
  display: flex;
  gap: 6px;
  background: rgba(255,255,255,0.6);
  padding: 5px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.06);
}
.theme-pro .level-switch {
  background: #fff;
  border-radius: 4px;
  border: 1px solid #DEDAD0;
  padding: 4px;
}
.level-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #3D3552;
  transition: all 0.2s ease;
}
.theme-pro .level-btn {
  font-family: 'Inter', sans-serif;
  border-radius: 3px;
  color: #1B2A4A;
}
.level-btn.is-active {
  background: #FF7A59;
  color: white;
}
.theme-pro .level-btn.is-active {
  background: #1B2A4A;
  color: #F7F5EF;
}

.stage {
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.5;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}
.theme-pro .counter { font-family: 'Inter', sans-serif; }

.stress-word { display: inline-flex; gap: 2px; }
.syl { opacity: 0.45; font-weight: 600; }
.syl--stressed { opacity: 1; font-weight: 800; }
.theme-pro .syl { font-weight: 500; opacity: 0.55; }
.theme-pro .syl--stressed { font-weight: 700; opacity: 1; }

.b-card-wrap { width: 100%; perspective: 1400px; margin-bottom: 22px; }
.b-card {
  position: relative;
  width: 100%;
  height: 300px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.b-card.is-flipped { transform: rotateY(180deg); }
.b-card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 28px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 0 rgba(61,53,82,0.08), 0 16px 30px rgba(61,53,82,0.12);
}
.b-card-front {
  background: linear-gradient(160deg, #FFE8C2 0%, #FFD6D6 100%);
  overflow: hidden;
}
.b-blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
}
.b-blob-1 { width: 110px; height: 110px; background: #C8B6FF; top: -30px; left: -30px; }
.b-blob-2 { width: 90px; height: 90px; background: #A8E6CF; bottom: -25px; right: -20px; }
.b-pair { display: flex; flex-direction: column; gap: 18px; z-index: 1; }
.b-pair-item { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.stress-word--big { font-family: 'Baloo 2', sans-serif; font-size: 28px; }
.b-tag {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(255,255,255,0.7);
  padding: 3px 10px;
  border-radius: 999px;
  color: #6B5B95;
}
.b-hint {
  position: absolute;
  bottom: 14px;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #9C8AC4;
  z-index: 1;
}
.b-card-back {
  background: #FFFDF8;
  border: 3px solid #FFD6D6;
  transform: rotateY(180deg);
  gap: 10px;
}
.b-back-tabs { display: flex; gap: 8px; position: absolute; top: 18px; }
.b-tab {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  background: #F4F0FF;
  color: #6B5B95;
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
}
.b-tab.is-active { background: #FF7A59; color: white; }
.b-back-word { display: flex; flex-direction: column; align-items: center; gap: 4px; margin-top: 28px; }
.b-back-word .stress-word { font-family: 'Baloo 2', sans-serif; font-size: 26px; }
.b-ipa { font-family: 'Quicksand', sans-serif; font-size: 13px; color: #9C8AC4; }
.b-meaning { text-align: center; font-weight: 600; font-size: 15px; margin: 6px 0 0; line-height: 1.4; }
.b-example { text-align: center; font-style: italic; font-size: 13.5px; color: #6B5B95; margin: 0; }

.p-card-wrap { width: 100%; perspective: 1400px; margin-bottom: 22px; }
.p-card {
  position: relative;
  width: 100%;
  height: 300px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}
.p-card.is-flipped { transform: rotateY(180deg); }
.p-card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 6px;
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #DEDAD0;
}
.p-rule { width: 40px; height: 2px; background: #B08D57; margin-bottom: 20px; }
.p-rule--small { width: 30px; margin: 10px 0; }
.p-pair { display: flex; flex-direction: column; gap: 0; align-items: center; }
.p-pair-item { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px 0; }
.p-card-front .stress-word--big { font-family: 'Source Serif 4', serif; font-size: 27px; }
.p-tag {
  font-family: 'Inter', sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #B08D57;
}
.p-divider { width: 60px; height: 1px; background: #E5E1D6; margin: 4px 0; }
.p-hint {
  position: absolute;
  bottom: 16px;
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #9C9485;
}
.p-card-back { transform: rotateY(180deg); }
.p-back-tabs { display: flex; gap: 6px; position: absolute; top: 18px; }
.p-tab {
  font-family: 'Inter', sans-serif;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid #DEDAD0;
  background: #fff;
  color: #1B2A4A;
  padding: 5px 12px;
  border-radius: 3px;
  cursor: pointer;
}
.p-tab.is-active { background: #1B2A4A; color: #F7F5EF; border-color: #1B2A4A; }
.p-back-word { display: flex; flex-direction: column; align-items: center; gap: 4px; margin-top: 24px; }
.p-back-word .stress-word { font-family: 'Source Serif 4', serif; font-size: 25px; }
.p-ipa { font-family: 'Inter', sans-serif; font-size: 13px; color: #9C9485; }
.p-meaning { text-align: center; font-weight: 600; font-size: 14.5px; margin: 4px 0 0; line-height: 1.45; max-width: 360px; }
.p-example { text-align: center; font-size: 13px; color: #5C5648; margin: 0; max-width: 360px; line-height: 1.4; }

.nav-row { display: flex; gap: 14px; }
.nav-btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 22px;
  border-radius: 999px;
  border: none;
  background: white;
  color: #3D3552;
  cursor: pointer;
  box-shadow: 0 4px 0 rgba(61,53,82,0.1);
  transition: transform 0.15s ease;
}
.nav-btn:hover { transform: translateY(-2px); }
.nav-btn--next { background: #FF7A59; color: white; }
.theme-pro .nav-btn {
  font-family: 'Inter', sans-serif;
  border-radius: 3px;
  border: 1px solid #DEDAD0;
  box-shadow: none;
}
.theme-pro .nav-btn--next { background: #1B2A4A; color: #F7F5EF; border-color: #1B2A4A; }

.footnote {
  margin-top: 32px;
  font-size: 12px;
  opacity: 0.45;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}
.theme-pro .footnote { font-family: 'Inter', sans-serif; }

@media (max-width: 480px) {
  .b-card, .p-card { height: 320px; }
  .topbar { flex-direction: column; align-items: flex-start; }
  .back-link { position: static; margin-bottom: 8px; }
}
`;