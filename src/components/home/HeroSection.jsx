import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection({ stats }) {
  return (
    <section className="hero-section container">
      <div className="hero-copy card glow">
        <span className="eyebrow"><Sparkles size={14} /> Beginner-friendly music learning</span>
        <h1>Learn musical instruments step by step with Music Mentor.</h1>
        <p>
          A clean, motivating learning platform for students who want to start guitar, piano,
          violin, drums, or ukulele with clear lessons, practice tracking, and friendly AI support.
        </p>
        <div className="hero-actions">
          <Link className="primary-btn" to="/instruments">Start Learning</Link>
          <Link className="secondary-btn" to="/lessons">Explore Lessons <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="hero-stats card">
        <h3>Live progress dashboard</h3>
        <div className="stats-grid compact">
          <div className="stat-tile"><strong>{stats.totalMinutes}</strong><span>Total minutes</span></div>
          <div className="stat-tile"><strong>{stats.completedLessons}</strong><span>Completed lessons</span></div>
          <div className="stat-tile"><strong>{stats.streak}</strong><span>Current streak</span></div>
        </div>
        <p className="muted">The project is interactive, presentation-ready, and built to show real UI changes during a demo.</p>
      </div>
    </section>
  );
}
