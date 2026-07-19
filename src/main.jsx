import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Library from './Library.jsx'
import Flashcards from './Flashcards.jsx'
import LessonPlayerPage from './LessonPlayerPage.jsx'
import TeacherGuide from './TeacherGuide.jsx'
import StoryBook from './StoryBook.jsx'
import storybook2 from './storybookData2.js'
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
import Shift from './Shift.jsx'
import ShiftHub from './ShiftHub.jsx'
import ShiftTrack from './ShiftTrack.jsx'
import ShiftGuide from './ShiftGuide.jsx'
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
            <Route path="/library/storybook" element={<StoryBook />} />
            <Route path="/library/storybook-2" element={<StoryBook book={storybook2} />} />
            <Route path="/library/forge" element={<ForgeHub />} />
            <Route path="/library/forge/:trackId" element={<ForgeTrack />} />
            <Route path="/library/forge/:trackId/:lessonNum" element={<Forge />} />
            <Route path="/library/forge/:trackId/:lessonNum/guide" element={<ForgeGuide />} />
            <Route path="/library/ascend" element={<AscendHub />} />
            <Route path="/library/ascend/:trackId" element={<AscendTrack />} />
            <Route path="/library/ascend/:trackId/:lessonNum" element={<Ascend />} />
            <Route path="/library/ascend/:trackId/:lessonNum/guide" element={<AscendGuide />} />
            <Route path="/library/grammar/verb-tenses" element={<VerbTensesTrack />} />
            <Route path="/library/grammar/verb-tenses/:code" element={<VerbTensesLesson />} />
            <Route path="/library/shift" element={<ShiftHub />} />
            <Route path="/library/shift/:trackId" element={<ShiftTrack />} />
            <Route path="/library/shift/:trackId/:lessonNum" element={<Shift />} />
            <Route path="/library/shift/:trackId/:lessonNum/guide" element={<ShiftGuide />} />
            <Route path="/lesson-player/:id" element={<LessonPlayerPage />} />
            <Route path="/teacher-guide/:level/:track" element={<TeacherGuide />} />
          </Routes>
        </BrowserRouter>
      </SiteGate>
    </AuthProvider>
  </StrictMode>,
)