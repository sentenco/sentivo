import ascendL1 from "./ascendData1";
import ascendL2 from "./ascendData2";
import ascendL3 from "./ascendData3";
import ascendL4 from "./ascendData4";
import ascendL5 from "./ascendData5";
import ascendL6 from "./ascendData6";
import ascendL7 from "./ascendData7";
import ascendL8 from "./ascendData8";
import ascendL9 from "./ascendData9";
import ascendL10 from "./ascendData10";

const TRACKS = [
  {
    id: "ascend-1",
    title: "Business + AI",
    theme: "Business + AI",
    level: "C1",
    blurb: "10 lessons of precision, structure, and diplomatic control. Come back after Lesson 10 to see the exact number that proves it.",
    lessons: [ascendL1, ascendL2, ascendL3, ascendL4, ascendL5, ascendL6, ascendL7, ascendL8, ascendL9, ascendL10],
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
