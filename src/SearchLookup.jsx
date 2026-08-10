import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MODES = [
  { key: "dictionary", label: "Dictionary", placeholder: "Type a word…", multiline: false },
  { key: "grammar", label: "Grammar", placeholder: "Paste a sentence or paragraph to check…", multiline: true },
  { key: "translator", label: "Translator", placeholder: "Type text to translate…", multiline: true },
];

const TRANSLATE_LANGUAGES = ["Filipino", "English", "Spanish", "Chinese", "Japanese", "Korean", "Vietnamese"];
const LANG_STORAGE_KEY = "sentivo_translate_target_lang";

function ResultCard({ entry }) {
  const modeInfo = MODES.find((m) => m.key === entry.mode);
  return (
    <div className="sl-card">
      <div className="sl-card-head">
        <span className={`sl-card-tag sl-card-tag--${entry.mode}`}>{modeInfo.label}</span>
        <span className="sl-card-query">{entry.query}</span>
      </div>
      {entry.status === "loading" && <div className="sl-card-status">Working…</div>}
      {entry.status === "error" && <div className="sl-card-status sl-card-status--error">{entry.error}</div>}
      {entry.status === "done" && entry.mode === "dictionary" && (
        <div className="sl-card-body">
          {entry.data.meanings.map((m, i) => (
            <div className="sl-meaning" key={i}>
              <span className="sl-meaning-pos">{m.pos}</span>
              {m.def && <span className="sl-meaning-def">{m.def}</span>}
            </div>
          ))}
        </div>
      )}
      {entry.status === "done" && entry.mode === "grammar" && (
        entry.data.corrections.length === 0 ? (
          <div className="sl-card-body sl-clean">No issues found — looks good.</div>
        ) : (
          <div className="sl-card-body">
            {entry.data.corrections.map((c, i) => (
              <div className="sl-correction" key={i}>
                <div className="sl-correction-diff">
                  <span className="sl-wrong">{c.original}</span>
                  <span className="sl-arrow">→</span>
                  <span className="sl-right">{c.corrected}</span>
                </div>
                {c.explanation && <p className="sl-explain">{c.explanation}</p>}
              </div>
            ))}
          </div>
        )
      )}
      {entry.status === "done" && entry.mode === "translator" && (
        <div className="sl-card-body">
          <div className="sl-translation">{entry.data.translation}</div>
          <div className="sl-translation-meta">
            {entry.data.sourceLang && <span>{entry.data.sourceLang} → </span>}
            <span>{entry.targetLang}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchLookup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const requestedMode = searchParams.get("mode");
  const [mode, setMode] = useState(
    MODES.some((m) => m.key === requestedMode) ? requestedMode : "dictionary"
  );
  const [inputText, setInputText] = useState("");
  const [targetLang, setTargetLang] = useState(() => localStorage.getItem(LANG_STORAGE_KEY) || "Filipino");
  const [history, setHistory] = useState([]);
  const idRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, targetLang);
  }, [targetLang]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [mode]);

  const activeMode = MODES.find((m) => m.key === mode);

  function updateEntry(id, patch) {
    setHistory((h) => h.map((e) => (e.id === id ? { ...e, ...patch } : e)));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed) return;
    const id = ++idRef.current;
    setHistory((h) => [
      { id, mode, query: trimmed, targetLang: mode === "translator" ? targetLang : null, status: "loading", data: null, error: "" },
      ...h,
    ]);
    setInputText("");

    try {
      if (mode === "dictionary") {
        const res = await fetch("/api/dictionary-lookup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ word: trimmed }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.meanings?.length) throw new Error(data?.error || `No results for "${trimmed}".`);
        updateEntry(id, { status: "done", data: { word: data.word || trimmed, meanings: data.meanings } });
      } else if (mode === "grammar") {
        const res = await fetch("/api/grammar-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: trimmed }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok) throw new Error(data?.error || "Something went wrong.");
        updateEntry(id, { status: "done", data: { corrections: Array.isArray(data?.corrections) ? data.corrections : [] } });
      } else {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: trimmed, targetLang }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.translation) throw new Error(data?.error || "Translation failed.");
        updateEntry(id, { status: "done", data: { translation: data.translation, sourceLang: data.sourceLang || "" } });
      }
    } catch (err) {
      updateEntry(id, { status: "error", error: err.message || "Something went wrong." });
    }
  }

  function handleTextareaKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <div className="sl-shell">
      <style>{CSS}</style>
      <div className="sl-topbar">
        <button type="button" className="sl-nav-brand" onClick={() => navigate("/library")} title="Back to Library">
          <img src="/logo-sentivo.png" alt="" className="sl-brand-logo" />entivo
        </button>
      </div>

      <div className="sl-panel">
        <div className="sl-modes" role="tablist">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              role="tab"
              aria-selected={mode === m.key}
              className={`sl-mode-btn ${mode === m.key ? "is-active" : ""}`}
              onClick={() => setMode(m.key)}
            >
              {m.label}
            </button>
          ))}
        </div>

        {mode === "translator" && (
          <label className="sl-lang-row">
            <span className="sl-lang-label">Translate to</span>
            <select className="sl-lang-select" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
              {TRANSLATE_LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </label>
        )}

        <form className="sl-query-form" onSubmit={handleSubmit}>
          {activeMode.multiline ? (
            <textarea
              ref={inputRef}
              className="sl-query-input sl-query-textarea"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder={activeMode.placeholder}
              rows={3}
            />
          ) : (
            <input
              ref={inputRef}
              type="text"
              className="sl-query-input"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={activeMode.placeholder}
            />
          )}
          <button type="submit" className="sl-submit-btn" disabled={!inputText.trim()}>
            {activeMode.label}
          </button>
        </form>
      </div>

      <div className="sl-history">
        {history.length === 0 && (
          <p className="sl-empty">Your {activeMode.label.toLowerCase()} results will show up here.</p>
        )}
        {history.map((entry) => (
          <ResultCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Quicksand:wght@500;600;700&display=swap');

.sl-shell {
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 0%, #FFF3D6 0%, #FFEFEA 45%, #F4F0FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}
.sl-shell * { box-sizing: border-box; }

.sl-topbar {
  width: 100%;
  max-width: 640px;
  padding: 22px 24px 0;
}
.sl-nav-brand {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B2A4A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }

.sl-panel {
  width: 100%;
  max-width: 640px;
  padding: 20px 24px 0;
}

.sl-modes {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}
.sl-mode-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.sl-mode-btn.is-active {
  background: #D85A30;
  color: #fff;
  border-color: #D85A30;
}

.sl-lang-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.sl-lang-label {
  font-size: 13px;
  font-weight: 600;
  color: #6B7280;
}
.sl-lang-select {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #1B2A4A;
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
}

.sl-query-form {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 18px;
  padding: 12px 14px;
  box-shadow: 0 10px 30px rgba(27, 42, 74, 0.06);
}
.sl-query-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #1B2A4A;
  resize: none;
}
.sl-query-input::placeholder { color: #9B9382; }
.sl-query-textarea { line-height: 1.5; padding-top: 4px; }
.sl-submit-btn {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 13.5px;
  color: #fff;
  background: #D85A30;
  border: none;
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
  flex-shrink: 0;
}
.sl-submit-btn:disabled { background: #E8C9BC; cursor: default; }

.sl-history {
  width: 100%;
  max-width: 640px;
  padding: 22px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sl-empty {
  text-align: center;
  color: #9B9382;
  font-size: 13.5px;
  margin-top: 20px;
}

.sl-card {
  background: #fff;
  border: 1px solid #EAE6DC;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 8px 24px rgba(27, 42, 74, 0.05);
}
.sl-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.sl-card-tag {
  font-family: 'Fredoka', sans-serif;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #fff;
  background: #D85A30;
  border-radius: 999px;
  padding: 3px 10px;
}
.sl-card-tag--dictionary { background: #3E7CB1; }
.sl-card-tag--grammar { background: #7C6FD8; }
.sl-card-tag--translator { background: #2E9E6B; }
.sl-card-query {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #1B2A4A;
}
.sl-card-status { font-size: 13px; color: #9B9382; }
.sl-card-status--error { color: #C24E3A; }

.sl-card-body { display: flex; flex-direction: column; gap: 10px; }
.sl-clean { color: #2E9E6B; font-weight: 600; font-size: 13.5px; }

.sl-meaning { display: flex; gap: 8px; align-items: baseline; font-size: 13.5px; }
.sl-meaning-pos {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #3E7CB1;
  text-transform: lowercase;
  flex-shrink: 0;
}
.sl-meaning-def { color: #1B2A4A; }

.sl-correction { border-left: 3px solid #7C6FD8; padding-left: 12px; }
.sl-correction-diff { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 13.5px; }
.sl-wrong { color: #C24E3A; text-decoration: line-through; }
.sl-arrow { color: #9B9382; }
.sl-right { color: #2E9E6B; font-weight: 600; }
.sl-explain { margin: 4px 0 0; font-size: 12.5px; color: #6B7280; }

.sl-translation { font-size: 15px; color: #1B2A4A; font-weight: 600; line-height: 1.5; }
.sl-translation-meta { margin-top: 6px; font-size: 12px; color: #9B9382; }

@media (max-width: 640px) {
  .sl-topbar, .sl-panel, .sl-history { padding-left: 16px; padding-right: 16px; }
  .sl-query-form { flex-direction: column; align-items: stretch; }
  .sl-submit-btn { width: 100%; }
}
`;
