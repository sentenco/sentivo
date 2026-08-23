import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Library from './Library.jsx'
import Flashcards from './Flashcards.jsx'
import LessonPlayerPage from './LessonPlayerPage.jsx'
import TeacherGuide from './TeacherGuide.jsx'
import StoryBook from './StoryBook.jsx'
import SearchLookup from './SearchLookup.jsx'
import Community from './Community.jsx'
import Subscription from './Subscription.jsx'
import LegalPage from './LegalPage.jsx'
import FileCabinet from './FileCabinet.jsx'
import Messenger from './Messenger.jsx'
import MentorDirectory from './MentorDirectory.jsx'
import MentorApply from './MentorApply.jsx'
import MentorAdmin from './MentorAdmin.jsx'
import TeacherProfile from './TeacherProfile.jsx'
import ArticleReader from './ArticleReader.jsx'
import ArticlePlayerPage from './ArticlePlayerPage.jsx'
import VocabularyPlayerPage from './VocabularyPlayerPage.jsx'
import WritingPlayerPage from './WritingPlayerPage.jsx'
import NotebookHub from './NotebookHub.jsx'
import FeedbackGenerator from './FeedbackGenerator.jsx'
import NotebookPage from './NotebookPage.jsx'
import WheelPage from './WheelPage.jsx'
import TeacherBoard from './TeacherBoard.jsx'
import SlideDeckHub from './SlideDeckHub.jsx'
import SlideDeckEditor from './SlideDeckEditor.jsx'
import SlideDeckPlayer from './SlideDeckPlayer.jsx'
import storybook2 from './storybookData2.js'
import storybook3 from './storybookData3.js'
import storybook4 from './storybookData4.js'
import storybook5 from './storybookData5.js'
import storybook6 from './storybookData6.js'
import storybook7 from './storybookData7.js'
import storybook8 from './storybookData8.js'
import storybook9 from './storybookData9.js'
import storybook10 from './storybookData10.js'
import storybook11 from './storybookData11.js'
import storybook12 from './storybookData12.js'
import storybook13 from './storybookData13.js'
import storybook14 from './storybookData14.js'
import storybook15 from './storybookData15.js'
import storybook16 from './storybookData16.js'
import storybook17 from './storybookData17.js'
import storybook18 from './storybookData18.js'
import storybook19 from './storybookData19.js'
import storybook20 from './storybookData20.js'
import storybook21 from './storybookData21.js'
import storybook22 from './storybookData22.js'
import storybook23 from './storybookData23.js'
import storybook24 from './storybookData24.js'
import storybook25 from './storybookData25.js'
import storybook26 from './storybookData26.js'
import storybook27 from './storybookData27.js'
import storybook28 from './storybookData28.js'
import storybook29 from './storybookData29.js'
import storybook30 from './storybookData30.js'
import storybook31 from './storybookData31.js'
import storybook32 from './storybookData32.js'
import storybook33 from './storybookData33.js'
import storybook34 from './storybookData34.js'
import storybook35 from './storybookData35.js'
import storybook36 from './storybookData36.js'
import storybook37 from './storybookData37.js'
import storybook38 from './storybookData38.js'
import storybook39 from './storybookData39.js'
import storybook40 from './storybookData40.js'
import storybook41 from './storybookData41.js'
import storybook42 from './storybookData42.js'
import storybook43 from './storybookData43.js'
import storybook44 from './storybookData44.js'
import storybook45 from './storybookData45.js'
import storybook46 from './storybookData46.js'
import storybook47 from './storybookData47.js'
import storybook48 from './storybookData48.js'
import storybook49 from './storybookData49.js'
import storybook50 from './storybookData50.js'
import storybook51 from './storybookData51.js'
import storybook52 from './storybookData52.js'
import storybook53 from './storybookData53.js'
import storybook54 from './storybookData54.js'
import storybook55 from './storybookData55.js'
import storybook56 from './storybookData56.js'
import storybook57 from './storybookData57.js'
import storybook58 from './storybookData58.js'
import storybook59 from './storybookData59.js'
import storybook60 from './storybookData60.js'
import storybook61 from './storybookData61.js'
import storybook62 from './storybookData62.js'
import storybook63 from './storybookData63.js'
import storybook64 from './storybookData64.js'
import storybook65 from './storybookData65.js'
import storybook66 from './storybookData66.js'
import storybook67 from './storybookData67.js'
import storybook68 from './storybookData68.js'
import storybook69 from './storybookData69.js'
import storybook70 from './storybookData70.js'
import storybook71 from './storybookData71.js'
import storybook72 from './storybookData72.js'
import storybook73 from './storybookData73.js'
import storybook74 from './storybookData74.js'
import storybook75 from './storybookData75.js'
import storybook76 from './storybookData76.js'
import storybook77 from './storybookData77.js'
import storybook78 from './storybookData78.js'
import storybook79 from './storybookData79.js'
import storybook80 from './storybookData80.js'
import Forge from './Forge.jsx'
import ForgeHub from './ForgeHub.jsx'
import ForgeTrack from './ForgeTrack.jsx'
import ForgeGuide from './ForgeGuide.jsx'
import Ascend from './Ascend.jsx'
import AscendHub from './AscendHub.jsx'
import AscendTrack from './AscendTrack.jsx'
import AscendGuide from './AscendGuide.jsx'
import VerbTensesTrack from './VerbTensesTrack.jsx'
import VerbTensesLesson from './VerbTensesLesson.jsx'
import SentencePatternsTrack from './SentencePatternsTrack.jsx'
import SentencePatternsLesson from './SentencePatternsLesson.jsx'
import ModalsTrack from './ModalsTrack.jsx'
import ModalsLesson from './ModalsLesson.jsx'
import ConditionalsTrack from './ConditionalsTrack.jsx'
import ConditionalsLesson from './ConditionalsLesson.jsx'
import PassiveVoiceTrack from './PassiveVoiceTrack.jsx'
import PassiveVoiceLesson from './PassiveVoiceLesson.jsx'
import QuestionFormationTrack from './QuestionFormationTrack.jsx'
import QuestionFormationLesson from './QuestionFormationLesson.jsx'
import NounsArticlesTrack from './NounsArticlesTrack.jsx'
import NounsArticlesLesson from './NounsArticlesLesson.jsx'
import PronounsTrack from './PronounsTrack.jsx'
import PronounsLesson from './PronounsLesson.jsx'
import ComparativesTrack from './ComparativesTrack.jsx'
import ComparativesLesson from './ComparativesLesson.jsx'
import ReportedSpeechTrack from './ReportedSpeechTrack.jsx'
import ReportedSpeechLesson from './ReportedSpeechLesson.jsx'
import RelativeClausesTrack from './RelativeClausesTrack.jsx'
import RelativeClausesLesson from './RelativeClausesLesson.jsx'
import GerundsInfinitivesTrack from './GerundsInfinitivesTrack.jsx'
import GerundsInfinitivesLesson from './GerundsInfinitivesLesson.jsx'
import PrepositionsTrack from './PrepositionsTrack.jsx'
import PrepositionsLesson from './PrepositionsLesson.jsx'
import ConjunctionsLesson from './ConjunctionsLesson.jsx'
import LinkingWordsLesson from './LinkingWordsLesson.jsx'
import CausativeVerbsLesson from './CausativeVerbsLesson.jsx'
import WordOrderLesson from './WordOrderLesson.jsx'
import InversionLesson from './InversionLesson.jsx'
import WishIfOnlyLesson from './WishIfOnlyLesson.jsx'
import UsedToLesson from './UsedToLesson.jsx'
import TooEnoughLesson from './TooEnoughLesson.jsx'
import SoSuchLesson from './SoSuchLesson.jsx'
import PhrasalVerbsLesson from './PhrasalVerbsLesson.jsx'
import ExclamationsLesson from './ExclamationsLesson.jsx'
import EmphasisDoLesson from './EmphasisDoLesson.jsx'
import SubjectVerbAgreementLesson from './SubjectVerbAgreementLesson.jsx'
import DirectIndirectObjectsLesson from './DirectIndirectObjectsLesson.jsx'
import CountableUncountableTrapsLesson from './CountableUncountableTrapsLesson.jsx'
import WouldRatherHadBetterLesson from './WouldRatherHadBetterLesson.jsx'
import BothEitherNeitherLesson from './BothEitherNeitherLesson.jsx'
import QuestionTagsModalsLesson from './QuestionTagsModalsLesson.jsx'
import FewLittleDeepDiveLesson from './FewLittleDeepDiveLesson.jsx'
import GerundsPrepositionsTimeLesson from './GerundsPrepositionsTimeLesson.jsx'
import AllWholeLesson from './AllWholeLesson.jsx'
import EvenThoughIfSoLesson from './EvenThoughIfSoLesson.jsx'
import ReflexiveVerbsNoSelfLesson from './ReflexiveVerbsNoSelfLesson.jsx'
import CleftSentencesLesson from './CleftSentencesLesson.jsx'
import GetPassiveBePassiveLesson from './GetPassiveBePassiveLesson.jsx'
import IrregularForeignPluralsLesson from './IrregularForeignPluralsLesson.jsx'
import MandativeSubjunctiveLesson from './MandativeSubjunctiveLesson.jsx'
import WhomLesson from './WhomLesson.jsx'
import ParallelStructureLesson from './ParallelStructureLesson.jsx'
import NominalizationLesson from './NominalizationLesson.jsx'
import PunctuationEssentialsTrack from './PunctuationEssentialsTrack.jsx'
import PunctuationEssentialsLesson from './PunctuationEssentialsLesson.jsx'
import StressShiftLesson from './StressShiftLesson.jsx'
import HomophonesLesson from './HomophonesLesson.jsx'
import NearSynonymNuanceLesson from './NearSynonymNuanceLesson.jsx'
import WordFamiliesLesson from './WordFamiliesLesson.jsx'
import ConfusablePairsLesson from './ConfusablePairsLesson.jsx'
import TrickyUncountablesLesson from './TrickyUncountablesLesson.jsx'
import CollocationsLesson from './CollocationsLesson.jsx'
import PolysemyLesson from './PolysemyLesson.jsx'
import EponymsLesson from './EponymsLesson.jsx'
import PortmanteauLesson from './PortmanteauLesson.jsx'
import PartsOfSpeechTrack from './PartsOfSpeechTrack.jsx'
import PartsOfSpeechLesson from './PartsOfSpeechLesson.jsx'
import Shift from './Shift.jsx'
import ShiftHub from './ShiftHub.jsx'
import ShiftTrack from './ShiftTrack.jsx'
import ShiftGuide from './ShiftGuide.jsx'
import Spark from './Spark.jsx'
import SparkHub from './SparkHub.jsx'
import SparkGuide from './SparkGuide.jsx'
import SparkTeens from './SparkTeens.jsx'
import SparkTeensGuide from './SparkTeensGuide.jsx'
import SparkAdults from './SparkAdults.jsx'
import SparkAdultsGuide from './SparkAdultsGuide.jsx'
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/curriculum" element={<Library />} />
            <Route path="/library/curriculum/:level" element={<Library />} />
            <Route path="/library/curriculum/:level/:track" element={<Library />} />
            <Route path="/library/stress" element={<Flashcards />} />
            <Route path="/library/articles/:slug" element={<ArticleReader />} />
            <Route path="/library/articles/:slug/player" element={<ArticlePlayerPage />} />
            <Route path="/library/vocabulary/:gameKey/:categoryKey/player" element={<VocabularyPlayerPage />} />
            <Route path="/library/vocabulary/lessons/stress-shift" element={<StressShiftLesson />} />
            <Route path="/library/vocabulary/lessons/homophones" element={<HomophonesLesson />} />
            <Route path="/library/vocabulary/lessons/near-synonym-nuance" element={<NearSynonymNuanceLesson />} />
            <Route path="/library/vocabulary/lessons/word-families" element={<WordFamiliesLesson />} />
            <Route path="/library/vocabulary/lessons/confusable-pairs" element={<ConfusablePairsLesson />} />
            <Route path="/library/vocabulary/lessons/tricky-uncountables" element={<TrickyUncountablesLesson />} />
            <Route path="/library/vocabulary/lessons/collocations" element={<CollocationsLesson />} />
            <Route path="/library/vocabulary/lessons/polysemy" element={<PolysemyLesson />} />
            <Route path="/library/vocabulary/lessons/eponyms" element={<EponymsLesson />} />
            <Route path="/library/vocabulary/lessons/portmanteau" element={<PortmanteauLesson />} />
            <Route path="/library/writing/:typeKey/:topicKey/player" element={<WritingPlayerPage />} />
            <Route path="/library/notebook" element={<NotebookHub />} />
            <Route path="/library/feedback" element={<FeedbackGenerator />} />
            <Route path="/library/notebook/:design" element={<NotebookPage />} />
            <Route path="/library/wheel" element={<WheelPage />} />
            <Route path="/library/teacher-board" element={<TeacherBoard />} />
            <Route path="/library/slides" element={<SlideDeckHub />} />
            <Route path="/library/slides/:deckId/edit" element={<SlideDeckEditor />} />
            <Route path="/library/slides/:deckId/present" element={<SlideDeckPlayer />} />
            <Route path="/library/storybook" element={<StoryBook />} />
            <Route path="/library/storybook-2" element={<StoryBook book={storybook2} />} />
            <Route path="/library/storybook-3" element={<StoryBook book={storybook3} />} />
            <Route path="/library/storybook-4" element={<StoryBook book={storybook4} />} />
            <Route path="/library/storybook-5" element={<StoryBook book={storybook5} />} />
            <Route path="/library/storybook-6" element={<StoryBook book={storybook6} />} />
            <Route path="/library/storybook-7" element={<StoryBook book={storybook7} />} />
            <Route path="/library/storybook-8" element={<StoryBook book={storybook8} />} />
            <Route path="/library/storybook-9" element={<StoryBook book={storybook9} />} />
            <Route path="/library/storybook-10" element={<StoryBook book={storybook10} />} />
            <Route path="/library/storybook-11" element={<StoryBook book={storybook11} />} />
            <Route path="/library/storybook-12" element={<StoryBook book={storybook12} />} />
            <Route path="/library/storybook-13" element={<StoryBook book={storybook13} />} />
            <Route path="/library/storybook-14" element={<StoryBook book={storybook14} />} />
            <Route path="/library/storybook-15" element={<StoryBook book={storybook15} />} />
            <Route path="/library/storybook-16" element={<StoryBook book={storybook16} />} />
            <Route path="/library/storybook-17" element={<StoryBook book={storybook17} />} />
            <Route path="/library/storybook-18" element={<StoryBook book={storybook18} />} />
            <Route path="/library/storybook-19" element={<StoryBook book={storybook19} />} />
            <Route path="/library/storybook-20" element={<StoryBook book={storybook20} />} />
            <Route path="/library/storybook-21" element={<StoryBook book={storybook21} />} />
            <Route path="/library/storybook-22" element={<StoryBook book={storybook22} />} />
            <Route path="/library/storybook-23" element={<StoryBook book={storybook23} />} />
            <Route path="/library/storybook-24" element={<StoryBook book={storybook24} />} />
            <Route path="/library/storybook-25" element={<StoryBook book={storybook25} />} />
            <Route path="/library/storybook-26" element={<StoryBook book={storybook26} />} />
            <Route path="/library/storybook-27" element={<StoryBook book={storybook27} />} />
            <Route path="/library/storybook-28" element={<StoryBook book={storybook28} />} />
            <Route path="/library/storybook-29" element={<StoryBook book={storybook29} />} />
            <Route path="/library/storybook-30" element={<StoryBook book={storybook30} />} />
            <Route path="/library/storybook-31" element={<StoryBook book={storybook31} />} />
            <Route path="/library/storybook-32" element={<StoryBook book={storybook32} />} />
            <Route path="/library/storybook-33" element={<StoryBook book={storybook33} />} />
            <Route path="/library/storybook-34" element={<StoryBook book={storybook34} />} />
            <Route path="/library/storybook-35" element={<StoryBook book={storybook35} />} />
            <Route path="/library/storybook-36" element={<StoryBook book={storybook36} />} />
            <Route path="/library/storybook-37" element={<StoryBook book={storybook37} />} />
            <Route path="/library/storybook-38" element={<StoryBook book={storybook38} />} />
            <Route path="/library/storybook-39" element={<StoryBook book={storybook39} />} />
            <Route path="/library/storybook-40" element={<StoryBook book={storybook40} />} />
            <Route path="/library/storybook-41" element={<StoryBook book={storybook41} />} />
            <Route path="/library/storybook-42" element={<StoryBook book={storybook42} />} />
            <Route path="/library/storybook-43" element={<StoryBook book={storybook43} />} />
            <Route path="/library/storybook-44" element={<StoryBook book={storybook44} />} />
            <Route path="/library/storybook-45" element={<StoryBook book={storybook45} />} />
            <Route path="/library/storybook-46" element={<StoryBook book={storybook46} />} />
            <Route path="/library/storybook-47" element={<StoryBook book={storybook47} />} />
            <Route path="/library/storybook-48" element={<StoryBook book={storybook48} />} />
            <Route path="/library/storybook-49" element={<StoryBook book={storybook49} />} />
            <Route path="/library/storybook-50" element={<StoryBook book={storybook50} />} />
            <Route path="/library/storybook-51" element={<StoryBook book={storybook51} />} />
            <Route path="/library/storybook-52" element={<StoryBook book={storybook52} />} />
            <Route path="/library/storybook-53" element={<StoryBook book={storybook53} />} />
            <Route path="/library/storybook-54" element={<StoryBook book={storybook54} />} />
            <Route path="/library/storybook-55" element={<StoryBook book={storybook55} />} />
            <Route path="/library/storybook-56" element={<StoryBook book={storybook56} />} />
            <Route path="/library/storybook-57" element={<StoryBook book={storybook57} />} />
            <Route path="/library/storybook-58" element={<StoryBook book={storybook58} />} />
            <Route path="/library/storybook-59" element={<StoryBook book={storybook59} />} />
            <Route path="/library/storybook-60" element={<StoryBook book={storybook60} />} />
            <Route path="/library/storybook-61" element={<StoryBook book={storybook61} />} />
            <Route path="/library/storybook-62" element={<StoryBook book={storybook62} />} />
            <Route path="/library/storybook-63" element={<StoryBook book={storybook63} />} />
            <Route path="/library/storybook-64" element={<StoryBook book={storybook64} />} />
            <Route path="/library/storybook-65" element={<StoryBook book={storybook65} />} />
            <Route path="/library/storybook-66" element={<StoryBook book={storybook66} />} />
            <Route path="/library/storybook-67" element={<StoryBook book={storybook67} />} />
            <Route path="/library/storybook-68" element={<StoryBook book={storybook68} />} />
            <Route path="/library/storybook-69" element={<StoryBook book={storybook69} />} />
            <Route path="/library/storybook-70" element={<StoryBook book={storybook70} />} />
            <Route path="/library/storybook-71" element={<StoryBook book={storybook71} />} />
            <Route path="/library/storybook-72" element={<StoryBook book={storybook72} />} />
            <Route path="/library/storybook-73" element={<StoryBook book={storybook73} />} />
            <Route path="/library/storybook-74" element={<StoryBook book={storybook74} />} />
            <Route path="/library/storybook-75" element={<StoryBook book={storybook75} />} />
            <Route path="/library/storybook-76" element={<StoryBook book={storybook76} />} />
            <Route path="/library/storybook-77" element={<StoryBook book={storybook77} />} />
            <Route path="/library/storybook-78" element={<StoryBook book={storybook78} />} />
            <Route path="/library/storybook-79" element={<StoryBook book={storybook79} />} />
            <Route path="/library/storybook-80" element={<StoryBook book={storybook80} />} />
            <Route path="/library/search" element={<SearchLookup />} />
            <Route path="/library/community" element={<Community />} />
            <Route path="/library/subscription" element={<Subscription />} />
            <Route path="/library/legal/:doc" element={<LegalPage />} />
            <Route path="/library/files" element={<FileCabinet />} />
            <Route path="/library/messages" element={<Messenger />} />
            <Route path="/library/mentors" element={<MentorDirectory />} />
            <Route path="/library/mentors/apply" element={<MentorApply />} />
            <Route path="/library/admin/mentors" element={<MentorAdmin />} />
            <Route path="/library/teacher/:id" element={<TeacherProfile />} />
            <Route path="/library/forge" element={<ForgeHub />} />
            <Route path="/library/forge/:trackId" element={<ForgeTrack />} />
            <Route path="/library/forge/:trackId/:lessonNum" element={<Forge />} />
            <Route path="/library/forge/:trackId/:lessonNum/guide" element={<ForgeGuide />} />
            <Route path="/library/ascend" element={<AscendHub />} />
            <Route path="/library/ascend/:trackId" element={<AscendTrack />} />
            <Route path="/library/ascend/:trackId/:lessonNum" element={<Ascend />} />
            <Route path="/library/ascend/:trackId/:lessonNum/guide" element={<AscendGuide />} />
            <Route path="/library/grammar/parts-of-speech" element={<PartsOfSpeechTrack />} />
            <Route path="/library/grammar/parts-of-speech/:code" element={<PartsOfSpeechLesson />} />
            <Route path="/library/grammar/verb-tenses" element={<VerbTensesTrack />} />
            <Route path="/library/grammar/verb-tenses/:code" element={<VerbTensesLesson />} />
            <Route path="/library/grammar/sentence-patterns" element={<SentencePatternsTrack />} />
            <Route path="/library/grammar/sentence-patterns/:code" element={<SentencePatternsLesson />} />
            <Route path="/library/grammar/modals" element={<ModalsTrack />} />
            <Route path="/library/grammar/modals/:code" element={<ModalsLesson />} />
            <Route path="/library/grammar/conditionals" element={<ConditionalsTrack />} />
            <Route path="/library/grammar/conditionals/:code" element={<ConditionalsLesson />} />
            <Route path="/library/grammar/passive-voice" element={<PassiveVoiceTrack />} />
            <Route path="/library/grammar/passive-voice/:code" element={<PassiveVoiceLesson />} />
            <Route path="/library/grammar/question-formation" element={<QuestionFormationTrack />} />
            <Route path="/library/grammar/question-formation/:code" element={<QuestionFormationLesson />} />
            <Route path="/library/grammar/nouns-articles-quantifiers" element={<NounsArticlesTrack />} />
            <Route path="/library/grammar/nouns-articles-quantifiers/:code" element={<NounsArticlesLesson />} />
            <Route path="/library/grammar/pronouns-possessives" element={<PronounsTrack />} />
            <Route path="/library/grammar/pronouns-possessives/:code" element={<PronounsLesson />} />
            <Route path="/library/grammar/comparatives-superlatives" element={<ComparativesTrack />} />
            <Route path="/library/grammar/comparatives-superlatives/:code" element={<ComparativesLesson />} />
            <Route path="/library/grammar/reported-speech" element={<ReportedSpeechTrack />} />
            <Route path="/library/grammar/reported-speech/:code" element={<ReportedSpeechLesson />} />
            <Route path="/library/grammar/relative-clauses" element={<RelativeClausesTrack />} />
            <Route path="/library/grammar/relative-clauses/:code" element={<RelativeClausesLesson />} />
            <Route path="/library/grammar/gerunds-infinitives" element={<GerundsInfinitivesTrack />} />
            <Route path="/library/grammar/gerunds-infinitives/:code" element={<GerundsInfinitivesLesson />} />
            <Route path="/library/grammar/prepositions" element={<PrepositionsTrack />} />
            <Route path="/library/grammar/prepositions/:code" element={<PrepositionsLesson />} />
            <Route path="/library/grammar/conjunctions" element={<ConjunctionsLesson />} />
            <Route path="/library/grammar/linking-words" element={<LinkingWordsLesson />} />
            <Route path="/library/grammar/causative-verbs" element={<CausativeVerbsLesson />} />
            <Route path="/library/grammar/word-order" element={<WordOrderLesson />} />
            <Route path="/library/grammar/inversion" element={<InversionLesson />} />
            <Route path="/library/grammar/wish-if-only" element={<WishIfOnlyLesson />} />
            <Route path="/library/grammar/used-to" element={<UsedToLesson />} />
            <Route path="/library/grammar/too-enough" element={<TooEnoughLesson />} />
            <Route path="/library/grammar/so-such" element={<SoSuchLesson />} />
            <Route path="/library/grammar/phrasal-verbs" element={<PhrasalVerbsLesson />} />
            <Route path="/library/grammar/exclamations" element={<ExclamationsLesson />} />
            <Route path="/library/grammar/emphasis-do" element={<EmphasisDoLesson />} />
            <Route path="/library/grammar/subject-verb-agreement" element={<SubjectVerbAgreementLesson />} />
            <Route path="/library/grammar/direct-indirect-objects" element={<DirectIndirectObjectsLesson />} />
            <Route path="/library/grammar/countable-uncountable-traps" element={<CountableUncountableTrapsLesson />} />
            <Route path="/library/grammar/would-rather-had-better" element={<WouldRatherHadBetterLesson />} />
            <Route path="/library/grammar/both-either-neither" element={<BothEitherNeitherLesson />} />
            <Route path="/library/grammar/question-tags-modals" element={<QuestionTagsModalsLesson />} />
            <Route path="/library/grammar/few-little-deep-dive" element={<FewLittleDeepDiveLesson />} />
            <Route path="/library/grammar/gerunds-prepositions-time" element={<GerundsPrepositionsTimeLesson />} />
            <Route path="/library/grammar/all-whole" element={<AllWholeLesson />} />
            <Route path="/library/grammar/even-though-if-so" element={<EvenThoughIfSoLesson />} />
            <Route path="/library/grammar/reflexive-verbs-no-self" element={<ReflexiveVerbsNoSelfLesson />} />
            <Route path="/library/grammar/cleft-sentences" element={<CleftSentencesLesson />} />
            <Route path="/library/grammar/get-passive-be-passive" element={<GetPassiveBePassiveLesson />} />
            <Route path="/library/grammar/irregular-foreign-plurals" element={<IrregularForeignPluralsLesson />} />
            <Route path="/library/grammar/mandative-subjunctive" element={<MandativeSubjunctiveLesson />} />
            <Route path="/library/grammar/whom" element={<WhomLesson />} />
            <Route path="/library/grammar/parallel-structure" element={<ParallelStructureLesson />} />
            <Route path="/library/grammar/nominalization" element={<NominalizationLesson />} />
            <Route path="/library/grammar/punctuation-essentials" element={<PunctuationEssentialsTrack />} />
            <Route path="/library/grammar/punctuation-essentials/:code" element={<PunctuationEssentialsLesson />} />
            <Route path="/library/shift" element={<ShiftHub />} />
            <Route path="/library/shift/:trackId" element={<ShiftTrack />} />
            <Route path="/library/shift/:trackId/:lessonNum" element={<Shift />} />
            <Route path="/library/shift/:trackId/:lessonNum/guide" element={<ShiftGuide />} />
            <Route path="/library/spark" element={<SparkHub />} />
            <Route path="/library/spark/teens/:lessonId" element={<SparkTeens />} />
            <Route path="/library/spark/teens/:lessonId/guide" element={<SparkTeensGuide />} />
            <Route path="/library/spark/adults/:lessonId" element={<SparkAdults />} />
            <Route path="/library/spark/adults/:lessonId/guide" element={<SparkAdultsGuide />} />
            <Route path="/library/spark/:lessonId" element={<Spark />} />
            <Route path="/library/spark/:lessonId/guide" element={<SparkGuide />} />
            <Route path="/lesson-player/:id" element={<LessonPlayerPage />} />
            <Route path="/teacher-guide/:level/:track" element={<TeacherGuide />} />
          </Routes>
        </BrowserRouter>
      </>
    </AuthProvider>
  </StrictMode>,
)