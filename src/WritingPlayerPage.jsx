import { useParams } from "react-router-dom";
import { ACTIVITY_TYPES } from "./WritingActivities";
import ProofreadingActivity from "./ProofreadingActivity";
import StoryMakingActivity from "./StoryMakingActivity";
import MessageReplyActivity from "./MessageReplyActivity";
import RegisterRewriteActivity from "./RegisterRewriteActivity";
import PlayerChrome from "./PlayerChrome";

const PLAYERS = {
  proofreading: ProofreadingActivity,
  storyMaking: StoryMakingActivity,
  messageReply: MessageReplyActivity,
  registerRewrite: RegisterRewriteActivity,
};

// Standalone popup player for one Writing topic, opened via window.open
// from WritingActivities, matching the Editorial View / lesson-player
// pattern (its own window, not embedded in the Library page).
export default function WritingPlayerPage() {
  const { typeKey, topicKey, roundIndex } = useParams();
  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const topic = type ? type.sets.find((t) => t.key === topicKey) : null;

  if (!type || !topic) {
    return (
      <PlayerChrome eyebrow="Writing">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#5C6873" }}>
          This activity isn't available.
        </div>
      </PlayerChrome>
    );
  }

  const Player = PLAYERS[type.key];

  // Proofreading, Story Making, and Register Rewrite are fixed-size,
  // self-contained lesson cards with their own logo baked in -- they
  // don't want PlayerChrome's outer branded header on top of that.
  // Message Reply still uses the shared chrome.
  const isSelfContained = type.key === "proofreading" || type.key === "storyMaking" || type.key === "registerRewrite";
  if (isSelfContained) {
    // Register Rewrite topics are opened one round at a time -- each
    // number on the topic card is its own standalone activity/window.
    if (type.key === "registerRewrite") {
      return <Player item={topic} roundIndex={Number(roundIndex) || 0} />;
    }
    return <Player item={topic} />;
  }

  return (
    <PlayerChrome eyebrow="Writing">
      <Player item={topic} />
    </PlayerChrome>
  );
}
