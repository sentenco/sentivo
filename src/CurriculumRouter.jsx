import { useNavigate } from "react-router-dom";
import CurriculumOverview from "./CurriculumOverview";
import LevelPage from "./LevelPage";
import LessonsGrid from "./LessonsGrid";
import UnitPage from "./UnitPage";

/**
 * CurriculumRouter
 *
 * Renders the curriculum section (Overview -> Level -> Lessons) based
 * purely on the `level`/`track` props, which Library.jsx derives from
 * the URL (/library/curriculum/:level/:track). Navigating within this
 * section pushes real URL changes via react-router, so browser back/
 * forward and page refresh both land you back exactly where you were.
 */

export default function CurriculumRouter({ isPro = false, level = null, track = null, unit = null }) {
  const navigate = useNavigate();

  function goLevel(lvl) {
    navigate(`/library/curriculum/${lvl}`);
  }

  function goLessons(trk) {
    navigate(`/library/curriculum/${level}/${trk}`);
  }

  if (level && unit) {
    return (
      <UnitPage
        level={level}
        unitNum={unit}
        onBack={() => goLevel(level)}
      />
    );
  }

  if (level && track) {
    return (
      <LessonsGrid
        level={level}
        ageTrack={track}
        onBackToLevel={() => goLevel(level)}
        isPro={isPro}
      />
    );
  }

  if (level) {
    return (
      <LevelPage
        level={level}
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
