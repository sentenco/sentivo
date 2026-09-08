// Shared, reusable interactive activities for A1 Discover Kids lessons.
// Each component is self-contained (own state, own styles injected once
// via useActivityStyles) and takes plain data as props -- a lesson file
// just imports the ones it needs and passes its own content.
//
// import { MatchGame, SpellGame } from "../activities";

export { default as MatchGame } from "./MatchGame";
export { default as SpellGame } from "./SpellGame";
export { default as SortGame } from "./SortGame";
export { default as BingoGame } from "./BingoGame";
export { default as SceneBuilder } from "./SceneBuilder";
export { default as DetectiveGame } from "./DetectiveGame";
export { default as EmotionPicker } from "./EmotionPicker";
export { default as SentenceBuilder } from "./SentenceBuilder";
export { default as SequenceGame } from "./SequenceGame";
export { default as SoundBlend } from "./SoundBlend";
export { default as OrderGame } from "./OrderGame";
export { default as CatchMistakeGame } from "./CatchMistakeGame";
export { default as ScoreCelebration } from "./ScoreCelebration";
export { default as RecapWheel } from "./RecapWheel";
export { default as FlashcardDeck } from "./FlashcardDeck";
export { default as DialogueGame } from "./DialogueGame";
export { default as OpenMicPrompt } from "./OpenMicPrompt";
