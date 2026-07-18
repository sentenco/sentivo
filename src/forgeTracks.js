// FORGE tracks: each track is a 10-lesson speaking course tailored to one
// learner profile (occupation + interest). A track's Library card links to
// its overview page (ForgeTrack.jsx), which lists Lessons 1-10; only
// authored lessons are clickable, the rest show as "Coming soon" until
// their content is added here.

import forgeL1 from "./forgeData";
import forgeL3 from "./forgeData3";
import forgeL4 from "./forgeData4";
import forgeL5 from "./forgeData5";
import forgeL6 from "./forgeData6";
import forgeL7 from "./forgeData7";
import forgeL8 from "./forgeData8";
import forgeL9 from "./forgeData9";
import forgeL10 from "./forgeData10";

const TRACKS = [
  {
    id: "forge-1",
    title: "A Day at Work",
    occupation: "Software Engineer",
    interest: "Tech",
    level: "A2",
    blurb: "10 lessons built around your job and your world. Come back after Lesson 10 to see how far you've come.",
    lessons: [forgeL1, null, forgeL3, forgeL4, forgeL5, forgeL6, forgeL7, forgeL8, forgeL9, forgeL10],
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
