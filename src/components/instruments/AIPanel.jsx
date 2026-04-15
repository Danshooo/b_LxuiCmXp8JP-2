import { useMemo, useState } from 'react';
import { generateMotivation, generatePracticeTips } from '../../data/ai';

export default function AIPanel({ instrument }) {
  const [tipsVisible, setTipsVisible] = useState(false);
  const [motivation, setMotivation] = useState('');
  const tips = useMemo(() => generatePracticeTips(instrument.name), [instrument.name]);

  return (
    <section className="ai-grid">
      <article className="card ai-card">
        <span className="eyebrow">AI Practice Assistant</span>
        <h3>Personalized practice tips</h3>
        <p>Get beginner-friendly suggestions based on your selected instrument.</p>
        <button className="primary-btn" onClick={() => setTipsVisible((value) => !value)}>
          Generate Practice Tips
        </button>
        {tipsVisible && (
          <ul className="ai-response list-reset">
            {tips.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        )}
      </article>

      <article className="card ai-card warm">
        <span className="eyebrow">AI Motivation Box</span>
        <h3>Stay encouraged</h3>
        <p>Use a quick motivation boost before or after practice.</p>
        <button className="secondary-btn" onClick={() => setMotivation(generateMotivation('musician'))}>
          Get Motivation
        </button>
        {motivation && <p className="ai-response">{motivation}</p>}
      </article>
    </section>
  );
}
