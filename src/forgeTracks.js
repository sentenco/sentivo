// FORGE tracks: each track is a 10-lesson speaking course tailored to one
// learner profile (occupation + interest). A track's Library card links to
// its overview page (ForgeTrack.jsx), which lists Lessons 1-10; only
// authored lessons are clickable, the rest show as "Coming soon" until
// their content is added here.

import forgeL1 from "./forgeData";

const TRACKS = [
  {
    id: "forge-1",
    title: "A Day at Work",
    occupation: "Software Engineer",
    interest: "Tech",
    level: "A2",
    blurb: "10 lessons built around your job and your world. Come back after Lesson 10 to see how far you've come.",
    lessons: [forgeL1, null, null, null, null, null, null, null, null, null],
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
