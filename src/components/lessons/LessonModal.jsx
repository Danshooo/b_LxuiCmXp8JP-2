import { useMemo, useState } from 'react';
import { simplifyLesson } from '../../data/ai';

export default function LessonModal({ lesson, isOpen, onClose, status, onComplete }) {
  const [showSimple, setShowSimple] = useState(false);
  const simpleText = useMemo(() => (lesson ? simplifyLesson(lesson) : ''), [lesson]);

  if (!isOpen || !lesson) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal card" onClick={(event) => event.stopPropagation()}>
        <div className="row-between">
          <div>
            <span className="eyebrow">Lesson content</span>
            <h2>{lesson.title}</h2>
          </div>
          <button className="ghost-btn" onClick={onClose}>Close</button>
        </div>
        <p>{lesson.content}</p>
        <div className="ai-highlight">
          <div className="row-between">
            <div>
              <strong>AI Lesson Simplifier</strong>
              <p className="muted">Turn the lesson into simpler words for beginners.</p>
            </div>
            <button className="secondary-btn" onClick={() => setShowSimple((value) => !value)}>
              Explain Simply
            </button>
          </div>
          {showSimple && <p className="ai-response">{simpleText}</p>}
        </div>
        <div className="lesson-actions">
          <button className="primary-btn" disabled={status === 'completed'} onClick={() => onComplete(lesson.id)}>
            {status === 'completed' ? 'Already Completed' : 'Mark as Completed'}
          </button>
        </div>
      </div>
    </div>
  );
}
