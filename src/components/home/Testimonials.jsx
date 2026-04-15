import { testimonials } from '../../data/instruments';

export default function Testimonials() {
  return (
    <section className="container section-block">
      <div className="section-heading">
        <span className="eyebrow">Student feedback</span>
        <h2>Demo testimonials</h2>
      </div>
      <div className="three-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="card quote-card">
            <p>“{item.text}”</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
