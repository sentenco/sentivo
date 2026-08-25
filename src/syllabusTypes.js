import { supabase } from "./supabaseClient";
import { VOCAB_LESSONS } from "./VocabularyGames";
import { ACTIVITY_TYPES } from "./WritingActivities";
import { ARTICLES } from "./articlesData";
import { BOOK_AGE_TRACK } from "./Library";
import RELAY_TRACKS from "./relayTracks";
import ASCEND_TRACKS from "./ascendTracks";
import SHIFT_TRACKS from "./shiftTracks";

export const SYLLABUS_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const SYLLABUS_AGE_TRACKS = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

// One choice per real content category, plus Balanced. No "Mostly" prefix
// on the labels -- picking a category as the focus already implies "mostly
// this one." Grammar/Vocabulary can be picked as a focus too, on top of
// their non-negotiable floor below, not instead of it.
export const SYLLABUS_FOCUS_OPTIONS = [
  { key: "balanced", label: "Balanced" },
  { key: "grammar", label: "Grammar" },
  { key: "vocabulary", label: "Vocabulary" },
  { key: "speaking", label: "Speaking" },
  { key: "reading", label: "Reading" },
  { key: "writing", label: "Writing" },
  { key: "articles", label: "Articles" },
];

const FOCUS_POOL = ["grammar", "vocabulary", "speaking", "reading", "writing", "articles"];

// Grammar + Vocabulary are the non-negotiable floor -- this fraction of the
// total sessions is grammar/vocab no matter what focus is picked. It
// shrinks as level rises (more foundation needed early, less later) but
// never hits zero, even a C2 student still needs precision-level grammar.
// Picking "Grammar" or "Vocabulary" as the focus adds MORE on top of this
// floor, it never reduces it.
const LEVEL_FLOOR = {
  A1: 0.55,
  A2: 0.50,
  B1: 0.35,
  B2: 0.30,
  C1: 0.20,
  C2: 0.15,
};

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
export function nextLevel(level) {
  const i = LEVEL_ORDER.indexOf(level);
  return i >= 0 && i < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[i + 1] : null;
}

export function newSession(overrides = {}) {
  return {
    id: crypto.randomUUID(),
    title: "",
    notes: "",
    skill: "custom",
    source: "custom",
    completed: false,
    requested: false,
    ...overrides,
  };
}

export function newSyllabusSessions() {
  return [newSession()];
}

function emptyOffsets() {
  return { grammar: 0, vocabulary: 0, writing: 0, articles: 0, reading: 0, speakingSystem: null, speakingTrackIdx: 0, speakingLessonIdx: 0 };
}

// ---------- Grammar (Foundation modules, fixed pedagogical order) ----------
// Mirrors the BED-numbered module list in Library.jsx's Grammar Garden --
// foundation tier first (the 14 core modules), supplementary after, so a
// syllabus always teaches the core grammar points before the deep cuts.
// Not level-specific (the modules themselves span A1-C2), so this list
// carries over unchanged across a follow-up syllabus at any level.
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

function buildGrammarSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const mod = GRAMMAR_MODULES[(startIndex + i) % GRAMMAR_MODULES.length];
    return newSession({ title: mod.title, notes: mod.href, skill: "grammar", source: "grammar" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Vocabulary (Word Bank lessons, fixed order) ----------
function buildVocabSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const lesson = VOCAB_LESSONS[(startIndex + i) % VOCAB_LESSONS.length];
    return newSession({ title: lesson.title, notes: lesson.blurb || "", skill: "vocabulary", source: "vocabulary" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Speaking (Relay/Shift/Ascend, picked by level) ----------
// Forge is deliberately excluded -- its content is mid-rebuild as of
// 2026-08-25, see project_speaking_trio_rebuild_plan.md. Re-add once the
// new lessons land.
function speakingSystemForLevel(level, ageTrack) {
  if (level === "A2") return { tracks: RELAY_TRACKS.filter((t) => t.audience === ageTrack), system: "Relay" };
  if (level === "B1" || level === "B2") return { tracks: SHIFT_TRACKS, system: "Shift" };
  if (level === "C1" || level === "C2") {
    // Ascend's C1-C2 tracks (Business + AI, Law & Advocacy, Corporate
    // Governance & Risk) are adult-professional content by subject matter,
    // not appropriate for Kids/Teens even though the track data itself
    // has no age field. Kids/Teens at C1-C2 get the honest placeholder
    // instead of business/law material.
    if (ageTrack !== "adults") return { tracks: [], system: null };
    return { tracks: ASCEND_TRACKS, system: "Ascend" };
  }
  return { tracks: [], system: null };
}

function buildSpeakingSessions(count, level, ageTrack, startTrackIdx, startLessonIdx) {
  const { tracks, system } = speakingSystemForLevel(level, ageTrack);
  if (tracks.length === 0 || count === 0) {
    const sessions = Array.from({ length: count }, () => newSession({
      title: "No structured speaking track for this level yet",
      notes: "Fill in with your own speaking practice, or check Forge/Relay/Shift/Ascend directly for what's closest.",
      skill: "speaking",
      source: "placeholder",
    }));
    return { sessions, system, trackIdx: startTrackIdx, lessonIdx: startLessonIdx };
  }
  const sessions = [];
  let trackIdx = startTrackIdx % tracks.length;
  let lessonIdx = startLessonIdx;
  let guard = 0;
  while (sessions.length < count && guard < tracks.length * 30) {
    const track = tracks[trackIdx];
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
      trackIdx = (trackIdx + 1) % tracks.length;
    }
    guard += 1;
  }
  return { sessions, system, trackIdx, lessonIdx };
}

// ---------- Reading (storybooks from the `tools` table, content_type='story') ----------
// Level-specific pool, so the offset only carries over between two
// syllabi generated at the SAME level -- see resetOffsetsForLevel below.
async function buildReadingSessions(count, level, ageTrack, startIndex) {
  if (count === 0) return { sessions: [], endIndex: startIndex };
  const { data, error } = await supabase
    .from("tools")
    .select("id, title, level, tagline, content_type, category")
    .eq("category", "Reading")
    .eq("content_type", "story")
    .eq("level", level);

  if (error || !data || data.length === 0) {
    return {
      sessions: Array.from({ length: count }, () => newSession({
        title: "No storybooks found at this level yet",
        notes: "Pick a title from the Reading library manually.",
        skill: "reading",
        source: "placeholder",
      })),
      endIndex: startIndex,
    };
  }

  // Storybooks have an age track (Kids/Teens/Adults, title case) even
  // though the `tools` table itself doesn't store it -- prefer books that
  // actually match this syllabus's age track, falling back to the full
  // same-level list only if none match, rather than an empty placeholder
  // when perfectly good same-level content exists for a different age.
  const ageLabel = SYLLABUS_AGE_TRACKS.find((t) => t.key === ageTrack)?.label || "Teens";
  const ageMatched = data.filter((book) => (BOOK_AGE_TRACK[book.id] || "Teens") === ageLabel);
  const pool = ageMatched.length > 0 ? ageMatched : data;

  const sessions = Array.from({ length: count }, (_, i) => {
    const book = pool[(startIndex + i) % pool.length];
    return newSession({ title: `Read: ${book.title}`, notes: book.tagline || "", skill: "reading", source: "reading" });
  });
  return { sessions, endIndex: startIndex + count };
}

// ---------- Writing (Scrapbook Studio activity types, round robin) ----------
// Each activity type's own item set is level-banded (cefrGroup: A1-A2 /
// B1-B2 / C1-C2, 10 items per band), so a session doesn't just name the
// activity type, it picks a specific level-appropriate item within it.
function cefrGroupForLevel(level) {
  if (level === "A1" || level === "A2") return "A1-A2";
  if (level === "B1" || level === "B2") return "B1-B2";
  return "C1-C2";
}

function buildWritingSessions(count, level, startIndex) {
  const group = cefrGroupForLevel(level);
  const sessions = [];
  for (let i = 0; i < count; i++) {
    const idx = startIndex + i;
    const activity = ACTIVITY_TYPES[idx % ACTIVITY_TYPES.length];
    const items = (activity.sets || []).filter((s) => s.cefrGroup === group);
    const item = items.length > 0 ? items[Math.floor(idx / ACTIVITY_TYPES.length) % items.length] : null;
    sessions.push(newSession({
      title: item ? `${activity.title}: ${item.title}` : activity.title,
      notes: (item && item.focus) || activity.blurb || "",
      skill: "writing",
      source: "writing",
    }));
  }
  return { sessions, endIndex: startIndex + count };
}

// ---------- Articles (Sentivo Gazette, chronological order) ----------
// Not level-specific -- each article has its own Plain/Polished/Precise
// editions, so the syllabus just names the article and the teacher picks
// the right edition when they actually run the session.
function buildArticleSessions(count, startIndex) {
  const sessions = Array.from({ length: count }, (_, i) => {
    const article = ARTICLES[(startIndex + i) % ARTICLES.length];
    return newSession({ title: `Article: ${article.title}`, notes: article.dek || "", skill: "articles", source: "articles" });
  });
  return { sessions, endIndex: startIndex + count };
}

function computeCounts(count, level, focusKey) {
  const floorPct = LEVEL_FLOOR[level] ?? 0.35;
  const floorTotal = Math.round(count * floorPct);
  const floorGrammar = Math.ceil(floorTotal * 0.6);
  const floorVocab = Math.max(0, floorTotal - floorGrammar);
  const remainder = Math.max(0, count - floorGrammar - floorVocab);

  const weights = {};
  if (FOCUS_POOL.includes(focusKey)) {
    FOCUS_POOL.forEach((k) => { weights[k] = k === focusKey ? 4 : 1; });
  } else {
    // balanced: grammar/vocabulary already have their floor, no extra share
    FOCUS_POOL.forEach((k) => { weights[k] = (k === "grammar" || k === "vocabulary") ? 0 : 1; });
  }
  const weightSum = FOCUS_POOL.reduce((s, k) => s + weights[k], 0) || 1;

  // Process highest-weight categories first, so the focused category
  // always gets its full rounded share -- otherwise several low-weight
  // categories each rounding 0.5 up to 1 could consume the whole budget
  // before the actual focus (processed last in a fixed order) got a turn,
  // leaving it at zero despite having the highest weight.
  const processOrder = [...FOCUS_POOL].sort((a, b) => weights[b] - weights[a]);
  const remainderCounts = {};
  let allocated = 0;
  processOrder.forEach((k, i) => {
    if (i === processOrder.length - 1) {
      remainderCounts[k] = Math.max(0, remainder - allocated);
    } else {
      // Clamp each share so independent rounding can't push the running
      // total past `remainder` -- otherwise several 0.5-rounds-up shares
      // can each round up and the total overshoots the requested count.
      const raw = Math.round((remainder * weights[k]) / weightSum);
      const c = Math.max(0, Math.min(raw, remainder - allocated));
      remainderCounts[k] = c;
      allocated += c;
    }
  });

  return {
    grammar: floorGrammar + remainderCounts.grammar,
    vocabulary: floorVocab + remainderCounts.vocabulary,
    speaking: remainderCounts.speaking,
    reading: remainderCounts.reading,
    writing: remainderCounts.writing,
    articles: remainderCounts.articles,
  };
}

// Evenly interleaves session groups by skill so the syllabus rotates
// through skills instead of running one skill in a solid block, most
// frequent skill first so it sets the base rhythm and rarer skills slot
// into the remaining gaps.
function interleave(groups) {
  const order = ["grammar", "vocabulary", "speaking", "reading", "writing", "articles"];
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

// If the level changes between a syllabus and its follow-up, the
// level-specific pools (Reading's storybooks, Speaking's track system)
// can't sensibly continue from where they left off -- Grammar/Vocabulary/
// Writing/Articles are level-agnostic continuous courses and DO carry
// over.
export function offsetsForFollowUp(parentOffsets, parentLevel, newLevel, ageTrack) {
  const base = parentOffsets || emptyOffsets();
  if (newLevel === parentLevel) return { ...base };
  // Ascend eligibility depends on ageTrack (adults only) as well as level,
  // so the real ageTrack has to be passed through here, not a placeholder.
  const { system: newSystemName } = speakingSystemForLevel(newLevel, ageTrack);
  const sameSpeakingSystem = newSystemName && newSystemName === base.speakingSystem;
  return {
    ...base,
    reading: 0,
    speakingTrackIdx: sameSpeakingSystem ? base.speakingTrackIdx : 0,
    speakingLessonIdx: sameSpeakingSystem ? base.speakingLessonIdx : 0,
    speakingSystem: sameSpeakingSystem ? base.speakingSystem : null,
  };
}

// The one place the generator talks to content. Given level + age track +
// a total session count + a focus category (one of SYLLABUS_FOCUS_OPTIONS)
// + starting offsets (for a follow-up syllabus, so it continues instead of
// repeating), returns the ordered session list plus the offsets to store
// for whatever follow-up comes after THIS one.
export async function generateSyllabusSessions({ level, ageTrack, count, focusKey = "balanced", startOffsets = null }) {
  const offsets = startOffsets || emptyOffsets();
  const counts = computeCounts(count, level, focusKey);

  const grammarResult = buildGrammarSessions(counts.grammar, offsets.grammar);
  const vocabResult = buildVocabSessions(counts.vocabulary, offsets.vocabulary);
  const writingResult = buildWritingSessions(counts.writing, level, offsets.writing);
  const articlesResult = buildArticleSessions(counts.articles, offsets.articles);
  const readingResult = await buildReadingSessions(counts.reading, level, ageTrack, offsets.reading);
  const speakingResult = buildSpeakingSessions(counts.speaking, level, ageTrack, offsets.speakingTrackIdx, offsets.speakingLessonIdx);

  const groups = {
    grammar: grammarResult.sessions,
    vocabulary: vocabResult.sessions,
    speaking: speakingResult.sessions,
    reading: readingResult.sessions,
    writing: writingResult.sessions,
    articles: articlesResult.sessions,
  };

  const endOffsets = {
    grammar: grammarResult.endIndex,
    vocabulary: vocabResult.endIndex,
    writing: writingResult.endIndex,
    articles: articlesResult.endIndex,
    reading: readingResult.endIndex,
    speakingSystem: speakingResult.system,
    speakingTrackIdx: speakingResult.trackIdx,
    speakingLessonIdx: speakingResult.lessonIdx,
  };

  return { sessions: interleave(groups), offsets: endOffsets };
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
