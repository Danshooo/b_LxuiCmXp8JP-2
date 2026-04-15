import { Link } from 'react-router-dom';

export default function InstrumentsPage({ instruments }) {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <span className="eyebrow">Instruments</span>
        <h1>Choose your learning path</h1>
        <p>Each instrument page includes theory, practice tips, common mistakes, a daily routine, and lessons.</p>
      </div>
      <div className="card-grid">
        {instruments.map((instrument) => (
          <Link key={instrument.id} to={`/instruments/${instrument.id}`} className="instrument-card card">
            <img src={instrument.image} alt={instrument.name} />
            <div className="instrument-card-body">
              <span className={`badge ${instrument.accent}`}>{instrument.level}</span>
              <h3>{instrument.name}</h3>
              <p>{instrument.theory}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
