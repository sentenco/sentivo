import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Library from './Library.jsx'
import Flashcards from './Flashcards.jsx'
import LessonPlayerPage from './LessonPlayerPage.jsx'
import TeacherGuide from './TeacherGuide.jsx'
import StoryBook from './StoryBook.jsx'
import ArticleReader from './ArticleReader.jsx'
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
import SiteGate from './SiteGate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SiteGate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/curriculum" element={<Library />} />
            <Route path="/library/curriculum/:level" element={<Library />} />
            <Route path="/library/curriculum/:level/:track" element={<Library />} />
            <Route path="/library/stress" element={<Flashcards />} />
            <Route path="/library/articles/:slug" element={<ArticleReader />} />
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
      </SiteGate>
    </AuthProvider>
  </StrictMode>,
)