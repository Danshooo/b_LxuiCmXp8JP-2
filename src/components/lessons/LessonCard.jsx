export default function LessonCard({ lesson, status, onStart, onComplete }) {
  const disabled = status === 'locked';

  return (
    <article className={`card lesson-card status-${status}`}>
      <div className="lesson-top">
        <span className="badge dark">{lesson.level}</span>
        <span className={`status-pill ${status}`}>{status}</span>
      </div>
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      <div className="lesson-meta">
        <span>{lesson.duration}</span>
      </div>
      <div className="lesson-actions">
        <button className="secondary-btn" disabled={disabled} onClick={() => onStart(lesson)}>
          {status === 'completed' ? 'Continue' : 'Start Lesson'}
        </button>
        <button
          className="primary-btn"
          disabled={disabled || status === 'completed'}
          onClick={() => onComplete(lesson.id)}
        >
          {status === 'completed' ? 'Completed' : 'Mark as Completed'}
        </button>
      </div>
    </article>
  );
}
