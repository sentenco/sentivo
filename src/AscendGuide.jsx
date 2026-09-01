import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./ascendTracks";
import AscendPushGuide from "./AscendPushGuide.jsx";

// Every Ascend lesson now uses the "Push" mechanic (see AscendPushGuide.jsx).
// This file is just the route entry point that resolves the lesson/track
// and hands off -- the original say/do teacher-guide layout it used to
// render directly has been fully replaced and removed.
export default function AscendGuide() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));

  if (!lesson) {
    return (
      <div style={{ textAlign: "center", marginTop: 60, fontFamily: "'Quicksand', sans-serif", color: "#5C8177" }}>
        This lesson isn't ready yet.
      </div>
    );
  }

  return <AscendPushGuide lesson={lesson} track={getTrack(trackId)} />;
}
