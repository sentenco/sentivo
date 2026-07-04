import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useAuth } from "./AuthContext";

export default function AlphabetFlashcards() {
  const { toolId = "alphabet" } = useParams();
  const { user, isPremium } = useAuth();

  const [theme, setTheme] = useState("fun");
  const isPro = theme === "pro";

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [toolAccess, setToolAccess] = useState(null);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const [notes, setNotes] = useState({});
  const saveTimers = useRef({});

  useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoading(true);
      setLoadError(null);
      const [{ data: toolData, error: toolErr }, { data: cardData, error: cardErr }] = await Promise.all([
        supabase.from("tools").select("access").eq("id", toolId).single(),
        supabase
          .from("alphabet_cards")
          .select("*")
          .eq("tool_id", toolId)
          .order("order_index", { ascending: true }),
      ]);
      if (!isMounted) return;
      setToolAccess(toolErr ? "free" : toolData.access);
      if (cardErr) {
        setLoadError(cardErr.message);
        setCards([]);
      } else {
        setCards(cardData || []);
      }
      setLoading(false);
    }
    load();
    return () => { isMounted = false; };
  }, [toolId]);

  useEffect(() => {
    let isMounted = true;
    async function loadNotes() {
      if (!user) {
        setNotes({});
        return;
      }
      const { data, error } = await supabase
        .from("user_notes")
        .select("card_id, note_text")
        .eq("user_id", user.id)
        .eq("tool_id", toolId);
      if (!isMounted) return;
      if (!error && data) {
        const map = {};
        data.forEach((row) => { map[row.card_id] = row.note_text; });
        setNotes(map);
      }
    }
    loadNotes();
    return () => { isMounted = false; };
  }, [user, toolId]);

  const isLocked = toolAccess === "premium" && !isPremium;
  const current = cards[index];

  function goTo(i) {
    setIndex(i);
    setFlipped(false);
  }
  function next() {
    goTo((index + 1) % cards.length);
  }
  function prev() {
    goTo((index - 1 + cards.length) % cards.length);
  }

  async function saveNote(cardId, text) {
    if (!user) return;
    await supabase.from("user_notes").upsert(
      {
        user_id: user.id,
        tool_id: toolId,
        card_id: cardId,
        note_text: text,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,tool_id,card_id" }
    );
  }

  function updateNote(cardId, text) {
    setNotes((prevNotes) => ({ ...prevNotes, [cardId]: text }));
    if (!user) return;
    clearTimeout(saveTimers.current[cardId]);
    saveTimers.current[cardId] = setTimeout(() => saveNote(cardId, text), 800);
  }

  function handleBlurSave(cardId) {
    if (!user) return;
    clearTimeout(saveTimers.current[cardId]);
    saveNote(cardId, notes[cardId] || "");
  }

  function highlightLetter(word, letter) {
    const idx = word.toLowerCase().indexOf(letter.toLowerCase());
    if (idx === -1) return <>{word}</>;
    return (
      <>
        {word.slice(0, idx)}
        <span className="hl-letter">{word.slice(idx, idx + letter.length)}</span>
        {word.slice(idx + letter.length)}
      </>
    );
  }

  return (
    <div className={`app ${isPro ? "theme-pro" : "theme-fun"}`}>
      <style>{CSS}</style>

      <header className="topbar">
        <a href="/" className="brand">
          sent<span className="dot">i</span>vo<span className="lib-tag">Library</span>
        </a>
        <div className="topbar-controls">
          <div className="theme-toggle">
            <button className={!isPro ? "is-active" : ""} onClick={() => setTheme("fun")}>Fun</button>
            <button className={isPro ? "is-active" : ""} onClick={() => setTheme("pro")}>Pro</button>
          </div>
        </div>
      </header>

      <main className="stage">
        {toolAccess === null || loading ? (
          <p>Loading flashcards…</p>
        ) : isLocked ? (
          <div className="paywall">
            <div className="paywall-icon" aria-hidden="true">🔒</div>
            <h2 className="paywall-title">This deck is Premium</h2>
            <p className="paywall-text">
              {user
                ? "Upgrade your plan to unlock this deck and all other premium tools."
                : "Sign up free, then upgrade to unlock this deck and all other premium tools."}
            </p>
            <a href="/library" className="nav-btn nav-btn--next">Back to Library</a>
          </div>
        ) : loadError ? (
          <p>Couldn't load this deck right now. Please refresh.</p>
        ) : current ? (
          <>
            <div className="letter-strip" role="tablist" aria-label="Jump to letter">
              {cards.map((c, i) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={i === index}
                  className={`letter-btn ${i === index ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {c.letter}
                </button>
              ))}
            </div>

            <div className="counter">{index + 1} / {cards.length}</div>

            <div className="card-wrap">
              <div className={`a-card ${flipped ? "is-flipped" : ""}`}>
                <div className="a-card-face a-card-front">
                  <div className="a-blob a-blob-1" />
                  <div className="a-blob a-blob-2" />
                  <div className="big-small-pair">
                    <span className="big-letter">{current.letter}</span>
                    <span className="small-letter">{current.letter.toLowerCase()}</span>
                  </div>
                  <button
                    type="button"
                    className="flip-btn"
                    onClick={() => setFlipped(true)}
                    aria-label="Flip card"
                  >
                    ⟲ Flip
                  </button>
                </div>
                <div className="a-card-face a-card-back">
                  <div className="a-card-back-content">
                    {current.image_url && (
                      <img className="a-image" src={current.image_url} alt={current.word} />
                    )}
                    <p className="a-word">{highlightLetter(current.word, current.letter)}</p>
                    <p className="a-question">{current.question}</p>
                    <textarea
                      className="a-note"
                      placeholder="Put the translation here..."
                      value={notes[current.id] || ""}
                      onChange={(e) => updateNote(current.id, e.target.value)}
                      onBlur={() => handleBlurSave(current.id)}
                    />
                    {!user && <p className="a-note-hint">Log in to save your notes for next time.</p>}
                  </div>
                  <button
                    type="button"
                    className="flip-btn flip-btn--back"
                    onClick={() => setFlipped(false)}
                    aria-label="Flip card"
                  >
                    ⟲ Flip
                  </button>
                </div>

              </div>

            </div>

            <div className="nav-row">
              <button className="nav-btn" onClick={prev} aria-label="Previous letter">&larr; Prev</button>
              <button className="nav-btn nav-btn--next" onClick={next} aria-label="Next letter">Next &rarr;</button>
            </div>
          </>
        ) : (
          <p>No letters in this deck yet.</p>
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
}

.brand {
  font-family: 'Fredoka', sans-serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  line-height: 1;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.theme-pro .brand { font-family: 'Source Serif 4', serif; }
.dot { color: #FF7A59; }
.theme-pro .dot { color: #B08D57; }
.lib-tag {
  font-family: 'Quicksand', sans-serif;
  font-size: 11px;
  font-weight: 600;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 8px;
}
.theme-pro .lib-tag { font-family: 'Inter', sans-serif; }

.topbar-controls { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

.theme-toggle { display: flex; gap: 4px; background: rgba(255,255,255,0.6); border-radius: 999px; padding: 4px; }
.theme-pro .theme-toggle { background: #fff; border-radius: 4px; border: 1px solid #DEDAD0; }
.theme-toggle button {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  padding: 6px 14px;
  border: none;
  background: transparent;
  border-radius: 999px;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
}
.theme-pro .theme-toggle button { font-family: 'Inter', sans-serif; border-radius: 3px; }
.theme-toggle button.is-active { background: #FF7A59; color: white; opacity: 1; }
.theme-pro .theme-toggle button.is-active { background: #1B2A4A; color: #F7F5EF; }

.stage {
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.letter-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  margin-bottom: 18px;
  max-width: 460px;
}
.letter-btn {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: none;
  background: rgba(255,255,255,0.6);
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #3D3552;
  cursor: pointer;
  transition: all 0.15s ease;
}
.theme-pro .letter-btn { background: #fff; border: 1px solid #DEDAD0; border-radius: 3px; font-family: 'Inter', sans-serif; color: #1B2A4A; }
.letter-btn.is-active { background: #FF7A59; color: white; }
.theme-pro .letter-btn.is-active { background: #1B2A4A; color: #F7F5EF; border-color: #1B2A4A; }

.counter {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.5;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}
.theme-pro .counter { font-family: 'Inter', sans-serif; }

.card-wrap { width: 100%; perspective: 1400px; margin-bottom: 22px; }
.a-card {
  position: relative;
  width: 100%;
  height: 480px;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.a-card.is-flipped { transform: rotateY(180deg); }
.a-card-front { pointer-events: auto; }
.a-card.is-flipped .a-card-front { pointer-events: none; }
.a-card-back { pointer-events: none; }
.a-card.is-flipped .a-card-back { pointer-events: auto; }
.a-card-face {
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
.theme-pro .a-card-face { border-radius: 6px; box-shadow: none; border: 1px solid #DEDAD0; }

.a-card-front {
  background: linear-gradient(160deg, #FFE8C2 0%, #FFD6D6 100%);
  overflow: hidden;
  gap: 4px;
}
.theme-pro .a-card-front { background: #fff; }
.a-blob { position: absolute; border-radius: 50%; opacity: 0.5; }
.a-blob-1 { width: 110px; height: 110px; background: #C8B6FF; top: -30px; left: -30px; }
.a-blob-2 { width: 90px; height: 90px; background: #A8E6CF; bottom: -25px; right: -20px; }
.theme-pro .a-blob { display: none; }

.big-small-pair {
  display: flex;
  align-items: baseline;
  gap: 8px;
  z-index: 1;
}
.big-letter {
  font-family: 'Baloo 2', sans-serif;
  font-size: 140px;
  font-weight: 700;
  line-height: 1;
}
.theme-pro .big-letter { font-family: 'Source Serif 4', serif; font-weight: 700; }
.small-letter {
  font-family: 'Baloo 2', sans-serif;
  font-size: 96px;
  font-weight: 600;
  opacity: 0.55;
  line-height: 1;
}
.theme-pro .small-letter { font-family: 'Source Serif 4', serif; }

.flip-btn {
  position: absolute;
  bottom: 18px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 999px;
  border: none;
  background: rgba(255,255,255,0.75);
  color: #6B5B95;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.15s ease;
}
.flip-btn:hover { transform: translateY(-2px); }
.theme-pro .flip-btn {
  font-family: 'Inter', sans-serif;
  border-radius: 3px;
  background: #F0EBDD;
  color: #1B2A4A;
}
.flip-btn--back {
  background: #FFE8C2;
}
.theme-pro .flip-btn--back { background: #F0EBDD; }

.a-card-back {
  background: #FFFDF8;
  border: 3px solid #FFD6D6;
  transform: rotateY(180deg);
  justify-content: flex-start;
  padding-bottom: 64px;
}
.theme-pro .a-card-back { background: #fff; border: 1px solid #DEDAD0; }

.a-card-back-content {
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow-y: auto;
}

.a-image {
  width: 140px;
  height: 110px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 6px;
}
.theme-pro .a-image { border-radius: 4px; }

.a-word {
  font-family: 'Baloo 2', sans-serif;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
}
.theme-pro .a-word { font-family: 'Source Serif 4', serif; }
.hl-letter { color: #FF7A59; }
.theme-pro .hl-letter { color: #B08D57; }

.a-question {
  font-size: 14px;
  text-align: center;
  opacity: 0.75;
  line-height: 1.4;
  max-width: 320px;
}

.a-note {
  width: 100%;
  max-width: 320px;
  min-height: 56px;
  resize: vertical;
  border-radius: 12px;
  border: 1.5px solid #E5DFF5;
  padding: 10px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  color: inherit;
  background: #FBFAFF;
  outline: none;
}
.a-note:focus { border-color: #FF7A59; }
.theme-pro .a-note { border-radius: 3px; border: 1px solid #DEDAD0; background: #fff; }
.theme-pro .a-note:focus { border-color: #1B2A4A; }

.a-note-hint {
  font-size: 11.5px;
  opacity: 0.5;
  font-family: 'Quicksand', sans-serif;
}
.theme-pro .a-note-hint { font-family: 'Inter', sans-serif; }

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
  text-decoration: none;
  display: inline-block;
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

.paywall {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  background: white;
  border-radius: 24px;
  padding: 44px 32px;
  max-width: 360px;
  box-shadow: 0 8px 0 rgba(61,53,82,0.06), 0 14px 26px rgba(61,53,82,0.08);
}
.theme-pro .paywall { border-radius: 6px; box-shadow: none; border: 1px solid #DEDAD0; }
.paywall-icon { font-size: 34px; margin-bottom: 4px; }
.paywall-title { font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 700; }
.theme-pro .paywall-title { font-family: 'Source Serif 4', serif; }
.paywall-text { font-size: 14px; opacity: 0.7; line-height: 1.5; margin-bottom: 8px; }

@media (max-width: 380px) {
  .a-card { height: 440px; }
  .big-letter { font-size: 110px; }
  .small-letter { font-size: 76px; }
  .a-word { font-size: 28px; }
}
`;
