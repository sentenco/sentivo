// SPARK Adults trial lessons -- three independent 20-minute one-to-one
// trial lessons. Unlike SPARK Kids/Teens, these don't share a template:
// each has its own theme and its own signature gimmick (wheel, boarding
// pass, mystery menu), so a learner who takes more than one never feels
// like they're repeating a lesson.

import sparkAdults1 from "./sparkAdultsData1";
import sparkAdults2 from "./sparkAdultsData2";
import sparkAdults3 from "./sparkAdultsData3";

const ADULTS_LESSONS = [sparkAdults1, sparkAdults2, sparkAdults3];

export default ADULTS_LESSONS;

export function getLesson(id) {
  return ADULTS_LESSONS.find((l) => l.id === id) || null;
}
