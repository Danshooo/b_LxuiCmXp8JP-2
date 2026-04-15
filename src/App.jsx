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
import {
  getLessonProgress,
  saveLessonProgress,
  getPracticeSessions,
  addPracticeSession as storageAddSession,
  deletePracticeSession as storageDeleteSession,
  getPracticeStats
} from './lib/storage';

function buildDefaultLessonStatus() {
  const map = {};
  instruments.forEach((instrument) => {
    instrument.lessons.forEach((lesson, index) => {
      map[lesson.id] = index === 0 ? 'available' : 'locked';
    });
  });
  return map;
}

function lessonProgressToStatus(progressList) {
  const status = buildDefaultLessonStatus();
  progressList.forEach(({ lesson_id, completed }) => {
    if (completed && lesson_id in status) {
      status[lesson_id] = 'completed';
      instruments.forEach((instrument) => {
        const idx = instrument.lessons.findIndex((l) => l.id === lesson_id);
        if (idx !== -1) {
          const next = instrument.lessons[idx + 1];
          if (next && status[next.id] === 'locked') {
            status[next.id] = 'available';
          }
        }
      });
    }
  });
  return status;
}

function statusToProgressList(statusMap) {
  const list = [];
  instruments.forEach((instrument) => {
    instrument.lessons.forEach((lesson) => {
      if (statusMap[lesson.id] === 'completed') {
        list.push({
          instrument_id: instrument.id,
          lesson_id: lesson.id,
          completed: true,
          completed_at: new Date().toISOString()
        });
      }
    });
  });
  return list;
}

function initLessonStatus() {
  const saved = getLessonProgress();
  if (saved.length === 0) return buildDefaultLessonStatus();
  return lessonProgressToStatus(saved);
}

function initPracticeLogs() {
  const saved = getPracticeSessions();
  if (saved.length > 0) return saved;
  const defaults = [
    { id: 'demo-1', date: '2026-04-13', instrument: 'Guitar', minutes: 25 },
    { id: 'demo-2', date: '2026-04-14', instrument: 'Piano', minutes: 30 },
    { id: 'demo-3', date: '2026-04-15', instrument: 'Guitar', minutes: 20 }
  ];
  savePracticeSessions(defaults);
  return defaults;
}

export default function App() {
  const [lessonStatus, setLessonStatus] = useState(initLessonStatus);
  const [practiceLogs, setPracticeLogs] = useState(initPracticeLogs);
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
      saveLessonProgress(statusToProgressList(next));
      return next;
    });
  };

  const addPracticeLog = (log) => {
    const session = { id: `session-${Date.now()}`, ...log };
    storageAddSession(session);
    setPracticeLogs((current) => [session, ...current]);
  };

  const deletePracticeLog = (id) => {
    storageDeleteSession(id);
    setPracticeLogs((current) => current.filter((s) => s.id !== id));
  };

  const stats = useMemo(() => {
    const completedLessons = Object.values(lessonStatus).filter((v) => v === 'completed').length;
    const { totalMinutes, streak } = getPracticeStats(practiceLogs);
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
              deletePracticeLog={deletePracticeLog}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppLayout>
  );
}
