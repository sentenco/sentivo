import ascendDayL1 from "./ascendDay1";

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
