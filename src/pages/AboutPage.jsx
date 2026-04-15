export default function AboutPage() {
  return (
    <section className="container page-section about-grid">
      <div className="section-heading left-align">
        <span className="eyebrow">About the project</span>
        <h1>Music Mentor is a student-friendly learning product concept</h1>
        <p>
          The goal is to help beginners learn instruments in a simple, motivating, and clear way.
          The interface stays clean while still showing enough functionality for a strong demo.
        </p>
      </div>
      <article className="card">
        <h3>Why this project works</h3>
        <ul className="list-reset">
          <li>• Structured lessons by level</li>
          <li>• Visible progress tracking</li>
          <li>• AI-generated practice support and simplified explanations</li>
          <li>• Simple navigation across all pages</li>
        </ul>
      </article>
      <article className="card">
        <h3>How AI is used</h3>
        <p>
          AI tools are used to generate practice advice, simplify lesson explanations, and create
          motivational messages. In this demo project, responses are simulated so the UI remains
          fast, reliable, and easy to present.
        </p>
      </article>
    </section>
  );
}
