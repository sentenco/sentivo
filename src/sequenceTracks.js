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
import family1 from "./sequenceFamily1";
import family2 from "./sequenceFamily2";
import family3 from "./sequenceFamily3";
import family4 from "./sequenceFamily4";
import family5 from "./sequenceFamily5";
import family6 from "./sequenceFamily6";
import family7 from "./sequenceFamily7";
import family8 from "./sequenceFamily8";
import sports1 from "./sequenceSports1";
import sports2 from "./sequenceSports2";
import sports3 from "./sequenceSports3";
import sports4 from "./sequenceSports4";
import sports5 from "./sequenceSports5";
import sports6 from "./sequenceSports6";
import sports7 from "./sequenceSports7";
import sports8 from "./sequenceSports8";
import gaming1 from "./sequenceGaming1";
import gaming2 from "./sequenceGaming2";
import gaming3 from "./sequenceGaming3";
import gaming4 from "./sequenceGaming4";
import gaming5 from "./sequenceGaming5";
import gaming6 from "./sequenceGaming6";
import gaming7 from "./sequenceGaming7";
import gaming8 from "./sequenceGaming8";
import movies1 from "./sequenceMovies1";
import movies2 from "./sequenceMovies2";
import movies3 from "./sequenceMovies3";
import movies4 from "./sequenceMovies4";
import movies5 from "./sequenceMovies5";
import movies6 from "./sequenceMovies6";
import movies7 from "./sequenceMovies7";
import movies8 from "./sequenceMovies8";
import health1 from "./sequenceHealth1";
import health2 from "./sequenceHealth2";
import health3 from "./sequenceHealth3";
import health4 from "./sequenceHealth4";
import health5 from "./sequenceHealth5";
import health6 from "./sequenceHealth6";
import health7 from "./sequenceHealth7";
import health8 from "./sequenceHealth8";
import travel1 from "./sequenceTravel1";
import travel2 from "./sequenceTravel2";
import travel3 from "./sequenceTravel3";
import travel4 from "./sequenceTravel4";
import travel5 from "./sequenceTravel5";
import travel6 from "./sequenceTravel6";
import travel7 from "./sequenceTravel7";
import travel8 from "./sequenceTravel8";
import housing1 from "./sequenceHousing1";
import housing2 from "./sequenceHousing2";
import housing3 from "./sequenceHousing3";
import housing4 from "./sequenceHousing4";
import housing5 from "./sequenceHousing5";
import housing6 from "./sequenceHousing6";
import housing7 from "./sequenceHousing7";
import housing8 from "./sequenceHousing8";
import finance1 from "./sequenceFinance1";
import finance2 from "./sequenceFinance2";
import finance3 from "./sequenceFinance3";
import finance4 from "./sequenceFinance4";
import finance5 from "./sequenceFinance5";
import finance6 from "./sequenceFinance6";
import finance7 from "./sequenceFinance7";
import finance8 from "./sequenceFinance8";

const TRACKS = [
  {
    id: "school-life",
    title: "School Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real school situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [schoolLife1, schoolLife2, schoolLife3, schoolLife4, schoolLife5, schoolLife6, schoolLife7, schoolLife8],
  },
  {
    id: "job-interviews",
    title: "Job Interviews",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real interview situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [jobInterviews1, jobInterviews2, jobInterviews3, jobInterviews4, jobInterviews5, jobInterviews6, jobInterviews7, jobInterviews8],
  },
  {
    id: "family",
    title: "Family & Home Life",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real family situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [family1, family2, family3, family4, family5, family6, family7, family8],
  },
  {
    id: "sports",
    title: "Sports & Activities",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real sports situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [sports1, sports2, sports3, sports4, sports5, sports6, sports7, sports8],
  },
  {
    id: "gaming",
    title: "Online & Gaming",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real online situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [gaming1, gaming2, gaming3, gaming4, gaming5, gaming6, gaming7, gaming8],
  },
  {
    id: "movies",
    title: "Movies & Entertainment",
    level: "A2-B1",
    audience: ["teens"],
    blurb: "Real entertainment situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [movies1, movies2, movies3, movies4, movies5, movies6, movies7, movies8],
  },
  {
    id: "health",
    title: "Health & Wellness",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real health situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [health1, health2, health3, health4, health5, health6, health7, health8],
  },
  {
    id: "travel",
    title: "Travel & Transportation",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real travel situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [travel1, travel2, travel3, travel4, travel5, travel6, travel7, travel8],
  },
  {
    id: "housing",
    title: "Housing & Apartment Life",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real housing situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [housing1, housing2, housing3, housing4, housing5, housing6, housing7, housing8],
  },
  {
    id: "finance",
    title: "Finance & Banking",
    level: "A2-B1",
    audience: ["adults"],
    blurb: "Real money situations, one root pattern per lesson, drilled by ear until the order comes out right without thinking about it.",
    lessons: [finance1, finance2, finance3, finance4, finance5, finance6, finance7, finance8],
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
