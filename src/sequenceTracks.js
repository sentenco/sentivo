// SEQUENCE tracks: each track is a category, containing 8 lessons, one per
// real-life situation. Each lesson drills 2 sentence patterns (Core + N
// pieces each) -- Lesson 1 has 2 brand-new patterns, every lesson after
// that recalls the previous lesson's second pattern (3 fresh questions,
// same shape) and introduces one new pattern. Mechanic: "Anchor and
// Expand" -- student re-says the whole answer as pieces are added, never
// shown the target answer except through an optional teacher-side reveal.

import jobInterviews1 from "./sequenceJobInterviews1";
import jobInterviews2 from "./sequenceJobInterviews2";
import jobInterviews3 from "./sequenceJobInterviews3";
import jobInterviews4 from "./sequenceJobInterviews4";
import jobInterviews5 from "./sequenceJobInterviews5";
import jobInterviews6 from "./sequenceJobInterviews6";
import jobInterviews7 from "./sequenceJobInterviews7";
import jobInterviews8 from "./sequenceJobInterviews8";
import schoolLife1 from "./sequenceSchoolLife1";
import schoolLife2 from "./sequenceSchoolLife2";
import schoolLife3 from "./sequenceSchoolLife3";
import schoolLife4 from "./sequenceSchoolLife4";
import schoolLife5 from "./sequenceSchoolLife5";
import schoolLife6 from "./sequenceSchoolLife6";
import schoolLife7 from "./sequenceSchoolLife7";
import schoolLife8 from "./sequenceSchoolLife8";

const TRACKS = [
  {
    id: "school-life",
    title: "School Life",
    audience: ["teens"],
    blurb: "Real school situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [schoolLife1, schoolLife2, schoolLife3, schoolLife4, schoolLife5, schoolLife6, schoolLife7, schoolLife8],
  },
  {
    id: "job-interviews",
    title: "Job Interviews",
    audience: ["adults"],
    blurb: "Real interview situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [jobInterviews1, jobInterviews2, jobInterviews3, jobInterviews4, jobInterviews5, jobInterviews6, jobInterviews7, jobInterviews8],
  },
];

export default TRACKS;

export function getTrack(trackId) {
  return TRACKS.find((t) => t.id === trackId) || null;
}

export function getLesson(trackId, lessonNum) {
  const track = getTrack(trackId);
  if (!track) return null;
  return track.lessons[lessonNum - 1] || null;
}
