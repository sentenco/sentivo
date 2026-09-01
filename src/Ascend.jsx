import { useParams } from "react-router-dom";
import { getLesson, getTrack } from "./ascendTracks";
import AscendPush from "./AscendPush.jsx";

// Every Ascend lesson now uses the "Push" mechanic (see AscendPush.jsx).
// This file is just the route entry point that resolves the lesson/track
// and hands off -- the original "Level It Up" mechanic it used to render
// directly has been fully replaced and removed.
export default function Ascend() {
  const { trackId, lessonNum } = useParams();
  const lesson = getLesson(trackId, Number(lessonNum));
  const track = getTrack(trackId);

  if (!lesson) {
    return (
      <div style={{ textAlign: "center", marginTop: 60, fontFamily: "'Quicksand', sans-serif", color: "#5C8177" }}>
        This lesson isn't ready yet.
      </div>
    );
  }

  return <AscendPush lesson={lesson} track={track} />;
}
