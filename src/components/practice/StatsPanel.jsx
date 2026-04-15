export default function StatsPanel({ stats, selectedInstrument }) {
  return (
    <section className="stats-grid">
      <article className="card stat-tile"><strong>{stats.totalMinutes}</strong><span>Total minutes practiced</span></article>
      <article className="card stat-tile"><strong>{stats.completedLessons}</strong><span>Completed lessons</span></article>
      <article className="card stat-tile"><strong>{stats.streak}</strong><span>Current streak</span></article>
      <article className="card stat-tile"><strong>{selectedInstrument}</strong><span>Selected instrument</span></article>
    </section>
  );
}
