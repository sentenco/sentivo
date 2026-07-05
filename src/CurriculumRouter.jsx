import { useNavigate } from "react-router-dom";
import CurriculumOverview from "./CurriculumOverview";
import LevelPage from "./LevelPage";
import LessonsGrid from "./LessonsGrid";

/**
 * CurriculumRouter
 *
 * Renders the curriculum section (Overview -> Level -> Lessons) based
 * purely on the `level`/`track` props, which Library.jsx derives from
 * the URL (/library/curriculum/:level/:track). Navigating within this
 * section pushes real URL changes via react-router, so browser back/
 * forward and page refresh both land you back exactly where you were.
 */

export default function CurriculumRouter({ isPro = false, level = null, track = null }) {
  const navigate = useNavigate();

  function goOverview() {
    navigate("/library/curriculum");
  }

  function goLevel(lvl) {
    navigate(`/library/curriculum/${lvl}`);
  }

  function goLessons(trk) {
    navigate(`/library/curriculum/${level}/${trk}`);
  }

  if (level && track) {
    return (
      <LessonsGrid
        level={level}
        ageTrack={track}
        onBack={goOverview}
        onBackToLevel={() => goLevel(level)}
        isPro={isPro}
      />
    );
  }

  if (level) {
    return (
      <LevelPage
        level={level}
        onBack={goOverview}
        onSelectTrack={goLessons}
        isPro={isPro}
      />
    );
  }

  return (
    <CurriculumOverview
      onSelectLevel={goLevel}
      isPro={isPro}
    />
  );
}
