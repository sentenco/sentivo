import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Library from './Library.jsx'
import Flashcards from './Flashcards.jsx'
import LessonPlayerPage from './LessonPlayerPage.jsx'
import TeacherGuide from './TeacherGuide.jsx'
import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/curriculum" element={<Library />} />
          <Route path="/library/curriculum/:level" element={<Library />} />
          <Route path="/library/curriculum/:level/:track" element={<Library />} />
          <Route path="/library/stress" element={<Flashcards />} />
          <Route path="/lesson-player/:id" element={<LessonPlayerPage />} />
          <Route path="/teacher-guide/:level/:track" element={<TeacherGuide />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)