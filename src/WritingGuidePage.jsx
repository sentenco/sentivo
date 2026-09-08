import { useParams } from "react-router-dom";
import { ACTIVITY_TYPES } from "./WritingActivities";
import ProofreadingGuide from "./ProofreadingGuide";

// Only Proofreading has a Teacher's Guide so far -- add an entry here as
// the other Writing activities get one too.
const GUIDES = {
  proofreading: ProofreadingGuide,
};

export default function WritingGuidePage() {
  const { typeKey, topicKey } = useParams();
  const type = ACTIVITY_TYPES.find((t) => t.key === typeKey);
  const topic = type ? type.sets.find((t) => t.key === topicKey) : null;
  const Guide = GUIDES[typeKey];

  if (!type || !topic || !Guide) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "sans-serif", color: "#5C6873" }}>
        There isn't a teacher's guide for this activity yet.
      </div>
    );
  }

  return <Guide item={topic} />;
}
