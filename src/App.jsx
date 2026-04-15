import { Routes, Route } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { instruments } from './data/instruments';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import InstrumentsPage from './pages/InstrumentsPage';
import InstrumentDetailPage from './pages/InstrumentDetailPage';
import LessonsPage from './pages/LessonsPage';
import PracticeTrackerPage from './pages/PracticeTrackerPage';
import AboutPage from './pages/AboutPage';

function buildInitialLessons() {
  const map = {};
  instruments.forEach((instrument) => {
    instrument.lessons.forEach((lesson, index) => {
      map[lesson.id] = index === 0 ? 'available' : 'locked';
    });
  });
  return map;
}

export default function App() {
  const [lessonStatus, setLessonStatus] = useState(buildInitialLessons());
  const [practiceLogs, setPracticeLogs] = useState([
    { id: 1, date: '2026-04-13', instrument: 'Guitar', minutes: 25 },
    { id: 2, date: '2026-04-14', instrument: 'Piano', minutes: 30 },
    { id: 3, date: '2026-04-15', instrument: 'Guitar', minutes: 20 }
  ]);
  const [selectedInstrument, setSelectedInstrument] = useState('Guitar');

  const markLessonCompleted = (lessonId, instrumentId) => {
    setLessonStatus((current) => {
      const next = { ...current, [lessonId]: 'completed' };
      const instrument = instruments.find((item) => item.id === instrumentId);
      const lessons = instrument?.lessons || [];
      const lessonIndex = lessons.findIndex((item) => item.id === lessonId);
      const nextLesson = lessons[lessonIndex + 1];
      if (nextLesson && next[nextLesson.id] === 'locked') {
        next[nextLesson.id] = 'available';
      }
      return next;
    });
  };

  const addPracticeLog = (log) => {
    setPracticeLogs((current) => [{ id: Date.now(), ...log }, ...current]);
  };

  const stats = useMemo(() => {
    const totalMinutes = practiceLogs.reduce((sum, item) => sum + item.minutes, 0);
    const completedLessons = Object.values(lessonStatus).filter((value) => value === 'completed').length;
    const uniqueDays = [...new Set(practiceLogs.map((item) => item.date))].sort();

    let streak = 0;
    if (uniqueDays.length) {
      streak = 1;
      for (let i = uniqueDays.length - 1; i > 0; i -= 1) {
        const current = new Date(uniqueDays[i]);
        const previous = new Date(uniqueDays[i - 1]);
        const diff = (current - previous) / (1000 * 60 * 60 * 24);
        if (diff === 1) streak += 1;
        else break;
      }
    }

    return { totalMinutes, completedLessons, streak };
  }, [practiceLogs, lessonStatus]);

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage instruments={instruments} stats={stats} />} />
        <Route path="/instruments" element={<InstrumentsPage instruments={instruments} />} />
        <Route
          path="/instruments/:instrumentId"
          element={
            <InstrumentDetailPage
              instruments={instruments}
              lessonStatus={lessonStatus}
              onComplete={markLessonCompleted}
            />
          }
        />
        <Route
          path="/lessons"
          element={
            <LessonsPage
              instruments={instruments}
              lessonStatus={lessonStatus}
              onComplete={markLessonCompleted}
            />
          }
        />
        <Route
          path="/practice"
          element={
            <PracticeTrackerPage
              instruments={instruments}
              stats={stats}
              practiceLogs={practiceLogs}
              selectedInstrument={selectedInstrument}
              setSelectedInstrument={setSelectedInstrument}
              addPracticeLog={addPracticeLog}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppLayout>
  );
}
