export default function InstrumentHeader({ instrument, progress }) {
  return (
    <section className="detail-hero container card detail-header">
      <img src={instrument.image} alt={instrument.name} className="detail-image" />
      <div>
        <span className={`badge ${instrument.accent}`}>{instrument.level}</span>
        <h1>{instrument.name}</h1>
        <p>{instrument.intro}</p>
        <div className="progress-inline">
          <div className="progress-bar"><span style={{ width: `${progress}%` }} /></div>
          <small>{progress}% completed</small>
        </div>
      </div>
    </section>
  );
}
