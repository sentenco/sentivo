import { supabase } from "./supabaseClient";

export const SYLLABUS_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
export const SYLLABUS_AGE_TRACKS = [
  { key: "kids", label: "Kids" },
  { key: "teens", label: "Teens" },
  { key: "adults", label: "Adults" },
];

export function newSession(overrides = {}) {
  return {
    id: crypto.randomUUID(),
    title: "",
    notes: "",
    source: "custom",
    ...overrides,
  };
}

export function newSyllabusSessions() {
  return [newSession()];
}

// The one place the generator talks to the curriculum. Today this reads
// straight from the `lessons` table (same query shape as LessonsGrid.jsx),
// so it only returns sessions for whatever's actually live there (A1/A2
// as of 2026-08). If the core curriculum gets reworked later, only this
// function needs to change, not SyllabusEditor or the rest of the flow.
export async function getCurriculumSessions({ level, ageTrack, count }) {
  const { data, error } = await supabase
    .from("lessons")
    .select("id, unit_number, lesson_number, title, topic")
    .eq("level", level)
    .eq("age_track", ageTrack)
    .order("unit_number", { ascending: true })
    .order("lesson_number", { ascending: true })
    .limit(count);

  if (error || !data || data.length === 0) return [];

  return data.map((lesson) =>
    newSession({
      title: lesson.title || `Unit ${lesson.unit_number} · Lesson ${lesson.lesson_number}`,
      notes: lesson.topic || "",
      source: "curriculum",
    })
  );
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
