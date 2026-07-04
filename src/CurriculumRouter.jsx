import React, { useState } from "react";
import CurriculumOverview from "./CurriculumOverview";
import LevelPage from "./LevelPage";
import LessonsGrid from "./LessonsGrid";

/**
 * CurriculumRouter
 *
 * Drop this component wherever the curriculum section should render
 * (e.g. inside your main content area when the sidebar "Curriculum"
 * or a level link is active). Pass `isPro` from your theme state.
 *
 * Example usage in Library.jsx:
 *
 *   import CurriculumRouter from "./CurriculumRouter";
 *
 *   // Inside your render, wherever the main content goes:
 *   {activeSidebarItem === "curriculum" && (
 *     <CurriculumRouter isPro={isPro} initialLevel={activeCurriculumLevel} />
 *   )}
 *
 * The component manages its own internal navigation state (overview →
 * level → lessons) so Library.jsx stays clean.
 */

export default function CurriculumRouter({ isPro = false, initialLevel = null }) {
  // view: "overview" | "level" | "lessons"
  const [view, setView] = useState(initialLevel ? "level" : "overview");
  const [selectedLevel, setSelectedLevel] = useState(initialLevel || "A1");
  const [selectedTrack, setSelectedTrack] = useState(null);

  function goOverview() {
    setView("overview");
    setSelectedLevel(null);
    setSelectedTrack(null);
  }

  function goLevel(level) {
    setSelectedLevel(level);
    setSelectedTrack(null);
    setView("level");
  }

  function goLessons(track) {
    setSelectedTrack(track);
    setView("lessons");
  }

  if (view === "lessons" && selectedLevel && selectedTrack) {
    return (
      <LessonsGrid
        level={selectedLevel}
        ageTrack={selectedTrack}
        onBack={goOverview}
        onBackToLevel={() => goLevel(selectedLevel)}
        isPro={isPro}
      />
    );
  }

  if (view === "level" && selectedLevel) {
    return (
      <LevelPage
        level={selectedLevel}
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
