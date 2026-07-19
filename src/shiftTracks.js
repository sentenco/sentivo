// SHIFT tracks: each track is a 10-lesson spontaneous-speech course tailored
// to one diagnosed tense-accuracy gap. A track's Library card links to its
// overview page (ShiftTrack.jsx), which lists Lessons 1-10; only authored
// lessons are clickable, the rest show as "Coming soon" until their content
// is added here.

import shiftL1 from "./shiftData1";
import shiftL2 from "./shiftData2";
import shiftL3 from "./shiftData3";
import shiftL4 from "./shiftData4";
import shiftL5 from "./shiftData5";
import shiftL6 from "./shiftData6";
import shiftL7 from "./shiftData7";
import shiftL8 from "./shiftData8";
import shiftL9 from "./shiftData9";
import shiftL10 from "./shiftData10";

const TRACKS = [
  {
    id: "shift-1",
    title: "Tense Control Reset",
    gapFocus: "Spontaneous Tense Accuracy",
    level: "A2-B1",
    blurb: "10 lessons built to fix wrong-tense-under-pressure in live speech — not a vocabulary gap. Come back after Lesson 10 to see the exact score change since Lesson 1.",
    lessons: [shiftL1, shiftL2, shiftL3, shiftL4, shiftL5, shiftL6, shiftL7, shiftL8, shiftL9, shiftL10],
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
