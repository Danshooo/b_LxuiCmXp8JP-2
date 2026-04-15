export default function PracticeHistory({ logs }) {
  return (
    <div className="card">
      <span className="eyebrow">History</span>
      <h3>Recent practice sessions</h3>
      <div className="history-list">
        {logs.map((log) => (
          <div className="history-row" key={log.id}>
            <strong>{log.instrument}</strong>
            <span>{log.minutes} min</span>
            <small>{log.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
