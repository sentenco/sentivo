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
            <Route path="/library/writing/:typeKey/:comboKey/:topicIndex/player" element={<WritingPlayerPage />} />
            <Route path="/library/notebook" element={<NotebookHub />} />
            <Route path="/library/feedback" element={<FeedbackGenerator />} />
            <Route path="/library/notebook/:design" element={<NotebookPage />} />
            <Route path="/library/wheel" element={<WheelPage />} />
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