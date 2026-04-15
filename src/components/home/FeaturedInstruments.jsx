import { Link } from 'react-router-dom';

export default function FeaturedInstruments({ instruments }) {
  return (
    <section className="container section-block">
      <div className="section-heading row-between">
        <div>
          <span className="eyebrow">Featured instruments</span>
          <h2>Start with an instrument that fits your style</h2>
        </div>
        <Link className="secondary-btn" to="/instruments">View all</Link>
      </div>
      <div className="card-grid">
        {instruments.map((instrument) => (
          <Link key={instrument.id} to={`/instruments/${instrument.id}`} className="instrument-card card">
            <img src={instrument.image} alt={instrument.name} />
            <div className="instrument-card-body">
              <span className={`badge ${instrument.accent}`}>{instrument.level}</span>
              <h3>{instrument.name}</h3>
              <p>{instrument.intro}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
