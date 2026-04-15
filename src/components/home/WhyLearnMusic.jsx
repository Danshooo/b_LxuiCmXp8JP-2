import { whyMusic } from '../../data/instruments';

export default function WhyLearnMusic() {
  return (
    <section className="container section-block split-grid">
      <div className="section-heading left-align">
        <span className="eyebrow">Why learn music?</span>
        <h2>Music builds more than performance skill</h2>
        <p>
          Good music practice helps students stay creative, focused, and disciplined while also
          making learning feel enjoyable.
        </p>
      </div>
      <div className="benefits-grid">
        {whyMusic.map((item) => (
          <article key={item} className="card benefit-card">
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
