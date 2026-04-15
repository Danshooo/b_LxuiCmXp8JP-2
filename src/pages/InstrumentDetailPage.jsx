import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import InstrumentHeader from '../components/instruments/InstrumentHeader';
import LessonCard from '../components/lessons/LessonCard';
import LessonModal from '../components/lessons/LessonModal';
import AIPanel from '../components/instruments/AIPanel';

export default function InstrumentDetailPage({ instruments, lessonStatus, onComplete }) {
  const { instrumentId } = useParams();
  const instrument = instruments.find((item) => item.id === instrumentId) || instruments[0];
  const [activeLesson, setActiveLesson] = useState(null);

  const progress = useMemo(() => {
    const total = instrument.lessons.length;
    const completed = instrument.lessons.filter((lesson) => lessonStatus[lesson.id] === 'completed').length;
    return Math.round((completed / total) * 100);
  }, [instrument, lessonStatus]);

  return (
    <section className="page-section">
      <InstrumentHeader instrument={instrument} progress={progress} />
      <div className="container detail-grid">
        <div className="card info-card">
          <span className="eyebrow">Basic theory</span>
          <h3>What to focus on first</h3>
          <p>{instrument.theory}</p>
        </div>
        <div className="card info-card">
          <span className="eyebrow">Practice routine</span>
          <h3>Recommended daily plan</h3>
          <p>{instrument.routine}</p>
        </div>
        <div className="card info-card">
          <span className="eyebrow">Practice tips</span>
          <ul className="list-reset">
            {instrument.practiceTips.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
        <div className="card info-card">
          <span className="eyebrow">Common mistakes</span>
          <ul className="list-reset">
            {instrument.commonMistakes.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      </div>

      <div className="container section-block">
        <div className="section-heading left-align">
          <span className="eyebrow">Lessons</span>
          <h2>{instrument.name} learning path</h2>
        </div>
        <div className="two-grid">
          {instrument.lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              status={lessonStatus[lesson.id]}
              onStart={setActiveLesson}
              onComplete={(lessonId) => onComplete(lessonId, instrument.id)}
            />
          ))}
        </div>
      </div>

      <div className="container section-block">
        <AIPanel instrument={instrument} />
      </div>

      <LessonModal
        lesson={activeLesson}
        isOpen={Boolean(activeLesson)}
        onClose={() => setActiveLesson(null)}
        status={activeLesson ? lessonStatus[activeLesson.id] : 'locked'}
        onComplete={(lessonId) => onComplete(lessonId, instrument.id)}
      />
    </section>
  );
}
