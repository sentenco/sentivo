import ascendDayL1 from "./ascendDay1";
import ascendSchoolL1 from "./ascendSchool1";
import ascendFamilyL1 from "./ascendFamily1";
import ascendSportsL1 from "./ascendSports1";
import ascendMoviesL1 from "./ascendMovies1";

const TRACKS = [
  {
    id: "ascend-day",
    category: "Everyday Life",
    title: "Talking About Your Day",
    theme: "Everyday Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real everyday moments pushed toward more precise, natural English.",
    lessons: [ascendDayL1],
  },
  {
    id: "ascend-school",
    category: "School Life",
    title: "Talking About a School Day",
    theme: "School Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real school moments pushed toward more precise, natural English.",
    lessons: [ascendSchoolL1],
  },
  {
    id: "ascend-family",
    category: "Family & Home Life",
    title: "Talking About Your Family",
    theme: "Family & Home Life",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real family moments pushed toward more precise, natural English.",
    lessons: [ascendFamilyL1],
  },
  {
    id: "ascend-sports",
    category: "Sports & Activities",
    title: "Talking About Sports & Activities",
    theme: "Sports & Activities",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real sports moments pushed toward more precise, natural English.",
    lessons: [ascendSportsL1],
  },
  {
    id: "ascend-movies",
    category: "Movies & Entertainment",
    title: "Talking About a Show or Movie",
    theme: "Movies & Entertainment",
    level: "A2-B1",
    levelBand: "a2b1",
    audience: ["teens"],
    blurb: "Say it plain, then say it stronger. Real entertainment moments pushed toward more precise, natural English.",
    lessons: [ascendMoviesL1],
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
