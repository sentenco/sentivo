import { useParams } from "react-router-dom";
import { ACTIVITY_TYPES, COMBOS } from "./WritingActivities";
import ProofreadingActivity from "./ProofreadingActivity";
import StoryMakingActivity from "./StoryMakingActivity";

// Standalone popup player for one Writing topic — opened via window.open
// from WritingActivities, matching the Editorial View / lesson-player
// pattern (its own window, not embedded in the Library page).
export default function WritingPlayerPage() {
  const { typeKey, comboKey, topicIndex } = useParams();
  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const combo = COMBOS.find((c) => c.key === comboKey);
  const topics = type && combo ? type.sets[combo.key] : [];
  const topic = topics[Number(topicIndex)];

  if (!type || !combo || !topic) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#5C6873" }}>
        This activity isn't available.
      </div>
    );
  }

  const Player = type.key === "storyMaking" ? StoryMakingActivity : ProofreadingActivity;

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      <Player item={topic} />
    </div>
  );
}
