const steps = [
  { title: 'Choose an instrument', text: 'Start with guitar, piano, violin, drums, or ukulele.' },
  { title: 'Follow structured lessons', text: 'Move from beginner to advanced with short clear lessons.' },
  { title: 'Track practice and progress', text: 'Log minutes, build streaks, and complete lessons step by step.' }
];

export default function HowItWorks() {
  return (
    <section className="container section-block">
      <div className="section-heading">
        <span className="eyebrow">How it works</span>
        <h2>Simple learning flow for students</h2>
      </div>
      <div className="three-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="card step-card">
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
