import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const MODES = [
  { key: "dictionary", label: "Dictionary", placeholder: "Type a word…", multiline: false },
  { key: "grammar", label: "Grammar", placeholder: "Paste a sentence or paragraph to check…", multiline: true },
  { key: "translator", label: "Translator", placeholder: "Type text to translate…", multiline: true },
];

const TRANSLATE_LANGUAGES = ["Filipino", "English", "Spanish", "Chinese", "Japanese", "Korean", "Vietnamese", "Polish", "Hebrew"];
const LANG_STORAGE_KEY = "sentivo_translate_target_lang";
const HISTORY_STORAGE_KEY = "sentivo_lookup_history";
const MAX_HISTORY = 30;

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function SendIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 15.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.5 10 10 5.5 14.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
  const initialQuery = searchParams.get("q") || "";
  const [mode, setMode] = useState(
    MODES.some((m) => m.key === requestedMode) ? requestedMode : "dictionary"
  );
  const [inputText, setInputText] = useState("");
  const [targetLang, setTargetLang] = useState(() => localStorage.getItem(LANG_STORAGE_KEY) || "Filipino");
  const [history, setHistory] = useState(loadHistory);
  const idRef = useRef(0);
  const inputRef = useRef(null);
  const autoRanRef = useRef(false);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, targetLang);
  }, [targetLang]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [mode]);

  const activeMode = MODES.find((m) => m.key === mode);

  function persistHistory(list) {
    const trimmed = list.filter((e) => e.status !== "loading").slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(trimmed));
  }

  function updateEntry(id, patch) {
    setHistory((h) => {
      const next = h.map((e) => (e.id === id ? { ...e, ...patch } : e));
      persistHistory(next);
      return next;
    });
  }

  function clearHistory() {
    setHistory([]);
    localStorage.removeItem(HISTORY_STORAGE_KEY);
  }

  async function runQuery(runMode, rawQuery, lang) {
    const trimmed = rawQuery.trim();
    if (!trimmed) return;
    const id = ++idRef.current;
    setHistory((h) => [
      { id, mode: runMode, query: trimmed, targetLang: runMode === "translator" ? lang : null, status: "loading", data: null, error: "" },
      ...h,
    ]);

    try {
      if (runMode === "dictionary") {
        const res = await fetch("/api/dictionary-lookup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ word: trimmed }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.meanings?.length) throw new Error(data?.error || `No results for "${trimmed}".`);
        updateEntry(id, { status: "done", data: { word: data.word || trimmed, meanings: data.meanings } });
      } else if (runMode === "grammar") {
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
          body: JSON.stringify({ text: trimmed, targetLang: lang }),
        });
        const data = await res.json().catch(() => null);
        if (!res.ok || !data?.translation) throw new Error(data?.error || "Translation failed.");
        updateEntry(id, { status: "done", data: { translation: data.translation, sourceLang: data.sourceLang || "" } });
      }
    } catch (err) {
      updateEntry(id, { status: "error", error: err.message || "Something went wrong." });
    }
  }

  // Auto-run the query that arrived via URL params from the homepage search
  // bar (?mode=&q=), then strip q from the URL so a reload doesn't resubmit it.
  useEffect(() => {
    if (autoRanRef.current) return;
    if (!initialQuery) return;
    autoRanRef.current = true;
    runQuery(mode, initialQuery, targetLang);
    navigate(`/library/search?mode=${mode}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText.trim()) return;
    runQuery(mode, inputText, targetLang);
    setInputText("");
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
          <button type="submit" className="sl-submit-btn" disabled={!inputText.trim()} aria-label="Send">
            <SendIcon />
          </button>
        </form>
      </div>

      <div className="sl-history">
        {history.length > 0 && (
          <button type="button" className="sl-clear-history" onClick={clearHistory}>Clear history</button>
        )}
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
  background: #FFFFFF;
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
  color: #2B2A4A;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-brand-logo { height: 24px; width: auto; display: block; margin-right: -3px; }

.sl-panel {
  width: 100%;
  max-width: 640px;
  padding: 22px 24px 0;
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
  color: #2B2A4A;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 999px;
  padding: 8px 18px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.sl-mode-btn.is-active {
  background: #FF6B4A;
  color: #fff;
  border-color: #FF6B4A;
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
  color: #8B84A3;
}
.sl-lang-select {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  color: #2B2A4A;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
}

.sl-query-form {
  display: flex;
  gap: 10px;
  align-items: flex-end;
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 18px;
  padding: 10px 10px 10px 16px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
}
.sl-query-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #2B2A4A;
  resize: none;
}
.sl-query-input::placeholder { color: #8B84A3; }
.sl-query-textarea { line-height: 1.5; padding-top: 6px; }
.sl-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border: none;
  border-radius: 50%;
  color: #fff;
  background: #FF6B4A;
  cursor: pointer;
}
.sl-submit-btn svg { width: 17px; height: 17px; }
.sl-submit-btn:disabled { background: #EFE9E5; color: #B9AF9C; cursor: default; }

.sl-history {
  width: 100%;
  max-width: 640px;
  padding: 22px 24px 60px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.sl-clear-history {
  align-self: flex-end;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #8B84A3;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.sl-clear-history:hover { color: #FF6B4A; }
.sl-empty {
  text-align: center;
  color: #8B84A3;
  font-size: 13.5px;
  margin-top: 20px;
}

.sl-card {
  background: #fff;
  border: 1px solid rgba(43,42,74,0.11);
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 8px 24px rgba(43,42,74,0.05);
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
  background: #FF6B4A;
  border-radius: 999px;
  padding: 3px 10px;
}
.sl-card-tag--dictionary { background: #16BFAE; }
.sl-card-tag--grammar { background: #7C5CFC; }
.sl-card-tag--translator { background: #FF8A4C; }
.sl-card-query {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  color: #2B2A4A;
}
.sl-card-status { font-size: 13px; color: #8B84A3; }
.sl-card-status--error { color: #C24E3A; }

.sl-card-body { display: flex; flex-direction: column; gap: 10px; }
.sl-clean { color: #16BFAE; font-weight: 600; font-size: 13.5px; }

.sl-meaning { display: flex; gap: 8px; align-items: baseline; font-size: 13.5px; }
.sl-meaning-pos {
  font-family: 'Fredoka', sans-serif;
  font-weight: 600;
  font-size: 11.5px;
  color: #16BFAE;
  text-transform: lowercase;
  flex-shrink: 0;
}
.sl-meaning-def { color: #2B2A4A; }

.sl-correction { border-left: 3px solid #7C5CFC; padding-left: 12px; }
.sl-correction-diff { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 13.5px; }
.sl-wrong { color: #C24E3A; text-decoration: line-through; }
.sl-arrow { color: #8B84A3; }
.sl-right { color: #16BFAE; font-weight: 600; }
.sl-explain { margin: 4px 0 0; font-size: 12.5px; color: #6B7280; }

.sl-translation { font-size: 15px; color: #2B2A4A; font-weight: 600; line-height: 1.5; }
.sl-translation-meta { margin-top: 6px; font-size: 12px; color: #8B84A3; }

@media (max-width: 640px) {
  .sl-topbar, .sl-panel, .sl-history { padding-left: 16px; padding-right: 16px; }
}
`;
