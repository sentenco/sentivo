// SPARK Teens trial lessons -- three fixed, standalone 20-minute trial
// classes for teens (A1+ to B1), same "pick one, not a sequence" pattern
// as SPARK Kids (see sparkTracks.js).

import sparkTeens1 from "./sparkTeensData1";
import sparkTeens2 from "./sparkTeensData2";
import sparkTeens3 from "./sparkTeensData3";

const TEENS_LESSONS = [sparkTeens1, sparkTeens2, sparkTeens3];

export default TEENS_LESSONS;

export function getLesson(id) {
  return TEENS_LESSONS.find((l) => l.id === id) || null;
}
