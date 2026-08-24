import { useParams } from "react-router-dom";
import { GAME_TYPES, CATEGORIES_BY_GAME } from "./VocabularyGames";
import WordChoiceGame from "./WordChoiceGame";
import WordSortGame from "./WordSortGame";
import OddOneOutGame from "./OddOneOutGame";
import PlayerChrome from "./PlayerChrome";

// Standalone popup player for one Word Bank category, opened via
// window.open from VocabularyGames, matching the Editorial View /
// lesson-player pattern (its own window, not embedded in the Library page).
export default function VocabularyPlayerPage() {
  const { gameKey, categoryKey } = useParams();
  const game = GAME_TYPES.find((g) => g.key === gameKey);
  const categories = game ? CATEGORIES_BY_GAME[gameKey] : [];
  const category = categories.find((c) => c.key === categoryKey);

  if (!game || !category) {
    return (
      <PlayerChrome eyebrow="Vocabulary">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#5C6873" }}>
          This activity isn't available.
        </div>
      </PlayerChrome>
    );
  }

  return (
    <PlayerChrome eyebrow="Vocabulary">
      {game.kind === "sort" ? (
        <WordSortGame
          title={`${category.title}${category.cefrGroup ? ` (${category.cefrGroup})` : ""}`}
          categoryA={category.pack.categoryA}
          categoryB={category.pack.categoryB}
          items={category.pack.items}
        />
      ) : game.kind === "oddOneOut" ? (
        <OddOneOutGame
          title={`${category.title}${category.cefrGroup ? ` (${category.cefrGroup})` : ""}`}
          items={category.items}
        />
      ) : (
        <WordChoiceGame
          title={`${game.title} · ${category.title}${category.cefrGroup ? ` (${category.cefrGroup})` : ""}`}
          instruction={game.instruction}
          data={category.data}
          hue={game.hue}
        />
      )}
    </PlayerChrome>
  );
}
