import { useState } from 'react';

export default function PracticeForm({ instruments, selectedInstrument, setSelectedInstrument, addPracticeLog }) {
  const [minutes, setMinutes] = useState(20);

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date().toISOString().slice(0, 10);
    addPracticeLog({ date: today, instrument: selectedInstrument, minutes: Number(minutes) });
    setMinutes(20);
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit}>
      <span className="eyebrow">Practice tracker</span>
      <h3>Log today&apos;s practice</h3>
      <label>
        Instrument
        <select value={selectedInstrument} onChange={(event) => setSelectedInstrument(event.target.value)}>
          {instruments.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
        </select>
      </label>
      <label>
        Minutes practiced
        <input type="number" min="5" max="300" value={minutes} onChange={(event) => setMinutes(event.target.value)} />
      </label>
      <button className="primary-btn" type="submit">Add Practice Session</button>
    </form>
  );
}
