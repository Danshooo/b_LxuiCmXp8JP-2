import StatsPanel from '../components/practice/StatsPanel';
import PracticeForm from '../components/practice/PracticeForm';
import PracticeHistory from '../components/practice/PracticeHistory';

export default function PracticeTrackerPage({ instruments, stats, practiceLogs, selectedInstrument, setSelectedInstrument, addPracticeLog, deletePracticeLog }) {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <span className="eyebrow">Practice Tracker</span>
        <h1>Track minutes, completed lessons, and streaks</h1>
        <p>Every button triggers a visible change so the project feels realistic during a live demo.</p>
      </div>

      <StatsPanel stats={stats} selectedInstrument={selectedInstrument} />

      <div className="practice-grid section-block">
        <PracticeForm
          instruments={instruments}
          selectedInstrument={selectedInstrument}
          setSelectedInstrument={setSelectedInstrument}
          addPracticeLog={addPracticeLog}
        />
        <PracticeHistory logs={practiceLogs} onDelete={deletePracticeLog} />
      </div>
    </section>
  );
}
