import { useMemo, useState } from 'react';
import LessonCard from '../components/lessons/LessonCard';
import LessonModal from '../components/lessons/LessonModal';

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function LessonsPage({ instruments, lessonStatus, onComplete }) {
  const [query, setQuery] = useState('');
  const [instrumentFilter, setInstrumentFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [activeLesson, setActiveLesson] = useState(null);

  const lessonRows = useMemo(
    () => instruments.flatMap((instrument) => instrument.lessons.map((lesson) => ({ ...lesson, instrumentId: instrument.id, instrumentName: instrument.name }))),
    [instruments]
  );

  const filtered = lessonRows.filter((lesson) => {
    const matchesQuery = `${lesson.title} ${lesson.instrumentName}`.toLowerCase().includes(query.toLowerCase());
    const matchesInstrument = instrumentFilter === 'All' || lesson.instrumentName === instrumentFilter;
    const matchesLevel = levelFilter === 'All' || lesson.level === levelFilter;
    return matchesQuery && matchesInstrument && matchesLevel;
  });

  return (
    <section className="container page-section">
      <div className="section-heading">
        <span className="eyebrow">Lessons</span>
        <h1>Search and filter the learning system</h1>
        <p>Open lessons, mark them as completed, and visibly update progress across the app.</p>
      </div>

      <div className="card filter-bar">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by instrument or lesson topic" />
        <select value={instrumentFilter} onChange={(e) => setInstrumentFilter(e.target.value)}>
          <option>All</option>
          {instruments.map((item) => <option key={item.id}>{item.name}</option>)}
        </select>
        <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
          {levels.map((level) => <option key={level}>{level}</option>)}
        </select>
      </div>

      <div className="two-grid section-block">
        {filtered.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={{ ...lesson, description: `${lesson.instrumentName} · ${lesson.description}` }}
            status={lessonStatus[lesson.id]}
            onStart={() => setActiveLesson(lesson)}
            onComplete={(lessonId) => onComplete(lessonId, lesson.instrumentId)}
          />
        ))}
      </div>

      <LessonModal
        lesson={activeLesson}
        isOpen={Boolean(activeLesson)}
        onClose={() => setActiveLesson(null)}
        status={activeLesson ? lessonStatus[activeLesson.id] : 'locked'}
        onComplete={(lessonId) => onComplete(lessonId, activeLesson.instrumentId)}
      />
    </section>
  );
}
