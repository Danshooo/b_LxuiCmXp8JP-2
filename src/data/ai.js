export function generatePracticeTips(instrumentName) {
  const tips = {
    Guitar: [
      'Spend 5 minutes only on clean chord transitions before trying a full song.',
      'Use a slow metronome and keep your strumming hand moving consistently.',
      'End your session by playing one easy progression without stopping.'
    ],
    Piano: [
      'Practice each hand separately first, then combine them at a slower tempo.',
      'Say note names aloud to strengthen note recognition.',
      'Repeat difficult bars three times correctly, not ten times quickly.'
    ],
    Violin: [
      'Start with open strings to check tone before adding left-hand fingers.',
      'Keep shoulders relaxed and watch your bow stay parallel to the bridge.',
      'Use very slow repetitions to train pitch accuracy.'
    ],
    Drums: [
      'Count the beat aloud while keeping your hi-hat steady.',
      'Practice groove first, then add fills only after timing feels stable.',
      'Record a short groove to check whether your tempo stays even.'
    ],
    Ukulele: [
      'Practice two easy chords and one simple strumming pattern today.',
      'Keep your strum small and relaxed instead of using large arm movements.',
      'Finish with one short song section to make practice feel rewarding.'
    ]
  };

  return tips[instrumentName] || ['Start slowly, stay relaxed, and repeat short sections with focus.'];
}

export function simplifyLesson(lesson) {
  return `In simple words: ${lesson.title} teaches the most important basics first. Focus on ${lesson.description.toLowerCase()}. Do it slowly, repeat a few clean attempts, and do not worry about speed yet.`;
}

export function generateMotivation(name = 'student') {
  const messages = [
    `Small practice sessions still count, ${name}. Consistency is stronger than perfect motivation.`,
    `${name}, every clean repetition builds real skill. Progress in music is quiet at first, then suddenly obvious.`,
    `You do not need a long session today, ${name}. One focused lesson is enough to move forward.`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}
