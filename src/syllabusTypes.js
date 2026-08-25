import { supabase } from "./supabaseClient";
import { VOCAB_LESSONS } from "./VocabularyGames";
import { ACTIVITY_TYPES } from "./WritingActivities";
import RELAY_TRACKS from "./relayTracks";
import ASCEND_TRACKS from "./ascendTracks";
import SHIFT_TRACKS from "./shiftTracks";

export const SYLLABUS_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const SYLLABUS_AGE_TRACKS = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export const SYLLABUS_FOCUS_PRESETS = [
  { key: "balanced", label: "Balanced", weights: { speaking: 1, reading: 1, writing: 1 } },
  { key: "speaking", label: "Mostly speaking", weights: { speaking: 3, reading: 1, writing: 1 } },
  { key: "literacy", label: "Mostly reading & writing", weights: { speaking: 1, reading: 2, writing: 2 } },
];

// Grammar + Vocabulary are the non-negotiable floor -- this fraction of the
// total sessions is grammar/vocab no matter what the student prefers. It
// shrinks as level rises (more foundation needed early, less later) but
// never hits zero, even a C2 student still needs precision-level grammar.
const LEVEL_FLOOR = {
  A1: 0.55,
  A2: 0.50,
  B1: 0.35,
  B2: 0.30,
  C1: 0.20,
  C2: 0.15,
};

export function newSession(overrides = {}) {
  return {
    id: crypto.randomUUID(),
    title: "",
    notes: "",
    skill: "custom",
    source: "custom",
    ...overrides,
  };
}

export function newSyllabusSessions() {
  return [newSession()];
}

// ---------- Grammar (Foundation modules, fixed pedagogical order) ----------
// Mirrors the BED-numbered module list in Library.jsx's Grammar Garden --
// foundation tier first (the 14 core modules), supplementary after, so a
// syllabus always teaches the core grammar points before the deep cuts.
const GRAMMAR_MODULES = [
  { title: "Parts of Speech", href: "/library/grammar/parts-of-speech", tier: "foundation" },
  { title: "Verb Tenses", href: "/library/grammar/verb-tenses", tier: "foundation" },
  { title: "Sentence Patterns", href: "/library/grammar/sentence-patterns", tier: "foundation" },
  { title: "Modals", href: "/library/grammar/modals", tier: "foundation" },
  { title: "Conditionals", href: "/library/grammar/conditionals", tier: "foundation" },
  { title: "Passive Voice", href: "/library/grammar/passive-voice", tier: "foundation" },
  { title: "Question Formation", href: "/library/grammar/question-formation", tier: "foundation" },
  { title: "Nouns, Articles & Quantifiers", href: "/library/grammar/nouns-articles-quantifiers", tier: "foundation" },
  { title: "Pronouns & Possessives", href: "/library/grammar/pronouns-possessives", tier: "foundation" },
  { title: "Comparatives & Superlatives", href: "/library/grammar/comparatives-superlatives", tier: "foundation" },
  { title: "Reported Speech", href: "/library/grammar/reported-speech", tier: "foundation" },
  { title: "Relative Clauses", href: "/library/grammar/relative-clauses", tier: "foundation" },
  { title: "Gerunds & Infinitives", href: "/library/grammar/gerunds-infinitives", tier: "foundation" },
  { title: "Prepositions", href: "/library/grammar/prepositions", tier: "foundation" },
  { title: "Punctuation Essentials", href: "/library/grammar/punctuation-essentials", tier: "supplementary" },
  { title: "Conjunctions", href: "/library/grammar/conjunctions", tier: "supplementary" },
  { title: "Linking Words", href: "/library/grammar/linking-words", tier: "supplementary" },
  { title: "Word Order", href: "/library/grammar/word-order", tier: "supplementary" },
  { title: "Subject-Verb Agreement", href: "/library/grammar/subject-verb-agreement", tier: "supplementary" },
];

function buildGrammarSessions(count) {
  return Array.from({ length: count }, (_, i) => {
    const mod = GRAMMAR_MODULES[i % GRAMMAR_MODULES.length];
    return newSession({ title: mod.title, notes: mod.href, skill: "grammar", source: "grammar" });
  });
}

// ---------- Vocabulary (Word Bank lessons, fixed order) ----------
function buildVocabSessions(count) {
  return Array.from({ length: count }, (_, i) => {
    const lesson = VOCAB_LESSONS[i % VOCAB_LESSONS.length];
    return newSession({ title: lesson.title, notes: lesson.blurb || "", skill: "vocabulary", source: "vocabulary" });
  });
}

// ---------- Speaking (Relay/Shift/Ascend, picked by level, then by topic) ----------
// Forge is deliberately excluded -- its content is mid-rebuild as of
// 2026-08-25, see project_speaking_trio_rebuild_plan.md. Re-add once the
// new lessons land.
function scoreTrackAgainstPreference(track, keywords) {
  if (keywords.length === 0) return 0;
  const haystack = `${track.focus || ""} ${track.theme || ""} ${track.title || ""} ${track.blurb || ""}`.toLowerCase();
  return keywords.reduce((score, kw) => (haystack.includes(kw) ? score + 1 : score), 0);
}

function pickTrack(tracks, keywords) {
  if (tracks.length === 0) return null;
  let best = tracks[0];
  let bestScore = -1;
  for (const t of tracks) {
    const score = scoreTrackAgainstPreference(t, keywords);
    if (score > bestScore) {
      best = t;
      bestScore = score;
    }
  }
  return best;
}

function speakingSystemForLevel(level, ageTrack) {
  if (level === "A2") return { tracks: RELAY_TRACKS.filter((t) => t.audience === ageTrack), system: "Relay" };
  if (level === "B1" || level === "B2") return { tracks: SHIFT_TRACKS, system: "Shift" };
  if (level === "C1" || level === "C2") return { tracks: ASCEND_TRACKS, system: "Ascend" };
  return { tracks: [], system: null };
}

function buildSpeakingSessions(count, level, ageTrack, preferenceKeywords) {
  const { tracks, system } = speakingSystemForLevel(level, ageTrack);
  if (tracks.length === 0 || count === 0) {
    return count === 0 ? [] : [newSession({
      title: "No structured speaking track for this level yet",
      notes: "Fill in with your own speaking practice, or check Forge/Relay/Shift/Ascend directly for what's closest.",
      skill: "speaking",
      source: "placeholder",
    })];
  }
  const primary = pickTrack(tracks, preferenceKeywords);
  const ordered = [primary, ...tracks.filter((t) => t !== primary)];
  const sessions = [];
  let trackIdx = 0;
  let lessonIdx = 0;
  while (sessions.length < count) {
    const track = ordered[trackIdx % ordered.length];
    const lesson = track.lessons[lessonIdx];
    if (lesson) {
      sessions.push(newSession({
        title: `${system}: ${track.title} — ${lesson.title}`,
        notes: lesson.subtitle || "",
        skill: "speaking",
        source: "speaking",
      }));
    }
    lessonIdx += 1;
    if (lessonIdx >= track.lessons.length) {
      lessonIdx = 0;
      trackIdx += 1;
    }
    if (trackIdx > ordered.length * 3) break; // safety valve, avoid infinite loop on empty tracks
  }
  return sessions;
}

// ---------- Reading (storybooks from the `tools` table, content_type='story') ----------
async function buildReadingSessions(count, level, preferenceKeywords) {
  if (count === 0) return [];
  const { data, error } = await supabase
    .from("tools")
    .select("id, title, level, tagline, content_type, category")
    .eq("category", "Reading")
    .eq("content_type", "story")
    .eq("level", level);

  if (error || !data || data.length === 0) {
    return [newSession({
      title: "No storybooks found at this level yet",
      notes: "Pick a title from the Reading library manually.",
      skill: "reading",
      source: "placeholder",
    })];
  }

  const scored = data.map((book) => ({
    book,
    score: preferenceKeywords.reduce((s, kw) => {
      const haystack = `${book.title || ""} ${book.tagline || ""}`.toLowerCase();
      return haystack.includes(kw) ? s + 1 : s;
    }, 0),
  })).sort((a, b) => b.score - a.score);

  return Array.from({ length: count }, (_, i) => {
    const book = scored[i % scored.length].book;
    return newSession({ title: `Read: ${book.title}`, notes: book.tagline || "", skill: "reading", source: "reading" });
  });
}

// ---------- Writing (Scrapbook Studio activity types, round robin) ----------
function buildWritingSessions(count) {
  return Array.from({ length: count }, (_, i) => {
    const activity = ACTIVITY_TYPES[i % ACTIVITY_TYPES.length];
    return newSession({ title: activity.title, notes: activity.blurb || "", skill: "writing", source: "writing" });
  });
}

function parseKeywords(preference) {
  return (preference || "")
    .toLowerCase()
    .split(/[,\s]+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 2);
}

// Evenly interleaves session groups by skill so the syllabus rotates
// through skills instead of running one skill in a solid block, most
// frequent skill first so it sets the base rhythm and rarer skills slot
// into the remaining gaps.
function interleave(groups) {
  const order = ["grammar", "vocabulary", "speaking", "reading", "writing"];
  const total = order.reduce((sum, key) => sum + (groups[key]?.length || 0), 0);
  const result = new Array(total).fill(null);
  const filled = new Array(total).fill(false);
  const bySkill = order
    .filter((key) => (groups[key]?.length || 0) > 0)
    .sort((a, b) => groups[b].length - groups[a].length);

  for (const key of bySkill) {
    const items = groups[key];
    const emptyIdx = [];
    for (let i = 0; i < total; i++) if (!filled[i]) emptyIdx.push(i);
    items.forEach((item, k) => {
      const pos = Math.floor((k * emptyIdx.length) / items.length);
      const idx = emptyIdx[pos];
      result[idx] = item;
      filled[idx] = true;
    });
  }
  return result.filter(Boolean);
}

// The one place the generator talks to content. Given level + age track +
// a total session count + a skill-focus preset + a free-text topic
// preference, this returns a full ordered session list: grammar/vocab at
// a fixed level-driven floor (non-negotiable), the remainder split across
// speaking/reading/writing by the chosen focus preset, with topic
// preference only ever picking *which* track/book fills a slot, never
// creating or resizing one.
export async function generateSyllabusSessions({ level, ageTrack, count, focusKey = "balanced", preference = "" }) {
  const floorPct = LEVEL_FLOOR[level] ?? 0.35;
  const floorTotal = Math.round(count * floorPct);
  const grammarCount = Math.ceil(floorTotal * 0.6);
  const vocabCount = Math.max(0, floorTotal - grammarCount);
  const remainder = Math.max(0, count - grammarCount - vocabCount);

  const preset = SYLLABUS_FOCUS_PRESETS.find((p) => p.key === focusKey) || SYLLABUS_FOCUS_PRESETS[0];
  const weightSum = preset.weights.speaking + preset.weights.reading + preset.weights.writing;
  const speakingCount = Math.round((remainder * preset.weights.speaking) / weightSum);
  const readingCount = Math.round((remainder * preset.weights.reading) / weightSum);
  const writingCount = Math.max(0, remainder - speakingCount - readingCount);

  const keywords = parseKeywords(preference);

  const [readingSessions] = await Promise.all([
    buildReadingSessions(readingCount, level, keywords),
  ]);

  const groups = {
    grammar: buildGrammarSessions(grammarCount),
    vocabulary: buildVocabSessions(vocabCount),
    speaking: buildSpeakingSessions(speakingCount, level, ageTrack, keywords),
    reading: readingSessions,
    writing: buildWritingSessions(writingCount),
  };

  return interleave(groups);
}

export function timeAgo(iso) {
  const then = new Date(iso).getTime();
  const diffSec = Math.max(0, Math.floor((Date.now() - then) / 1000));
  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 30) return `${diffDay}d ago`;
  return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}
