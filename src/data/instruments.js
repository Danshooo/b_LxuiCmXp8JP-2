export const instruments = [
  {
    id: 'guitar',
    name: 'Guitar',
    level: 'Beginner Friendly',
    accent: 'gold',
    theory: 'Learn string names, basic chord shapes, rhythm counting, and how to hold the pick correctly.',
    intro: 'The guitar is one of the easiest instruments to start with because you can quickly play songs with a few chords.',
    practiceTips: [
      'Start slowly with chord changes.',
      'Use a metronome for rhythm accuracy.',
      'Practice strumming separately from chord fingering.'
    ],
    commonMistakes: [
      'Pressing too hard on the strings.',
      'Rushing chord changes.',
      'Ignoring timing and rhythm.'
    ],
    routine: '5 min warm-up, 10 min chord switching, 10 min strumming, 5 min song practice.',
    benefits: 'Great for songwriting, rhythm, and building finger strength.',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'gtr-1',
        level: 'Beginner',
        title: 'How to Hold the Guitar',
        duration: '8 min',
        description: 'Posture, hand placement, and tuning basics.',
        content: 'Sit comfortably, rest the guitar body against your torso, keep your back straight, and place your fretting thumb behind the neck. Learn standard tuning: E A D G B E.'
      },
      {
        id: 'gtr-2',
        level: 'Beginner',
        title: 'First 3 Chords',
        duration: '12 min',
        description: 'Learn Em, G, and C for your first simple songs.',
        content: 'Start with Em because it uses only two fingers. Add G and C slowly, then practice switching every four beats with a metronome.'
      },
      {
        id: 'gtr-3',
        level: 'Intermediate',
        title: 'Basic Strumming Patterns',
        duration: '14 min',
        description: 'Downstrokes, upstrokes, and counting rhythm.',
        content: 'Use down-up motion continuously and hit strings only when required. Count 1-and-2-and-3-and-4-and while maintaining a relaxed wrist.'
      },
      {
        id: 'gtr-4',
        level: 'Advanced',
        title: 'Fingerstyle Foundations',
        duration: '18 min',
        description: 'Use thumb and fingers independently.',
        content: 'Assign the thumb to bass strings and fingers to treble strings. Practice alternating bass notes while keeping melody notes steady.'
      }
    ]
  },
  {
    id: 'piano',
    name: 'Piano',
    level: 'Beginner Friendly',
    accent: 'purple',
    theory: 'Understand white and black keys, finger numbers, note names, and simple rhythm patterns.',
    intro: 'The piano is excellent for understanding music theory because every note is visually clear on the keyboard.',
    practiceTips: [
      'Keep fingers curved and relaxed.',
      'Practice each hand separately first.',
      'Say note names aloud while playing.'
    ],
    commonMistakes: [
      'Playing too fast too early.',
      'Lifting wrists too high.',
      'Ignoring finger numbers.'
    ],
    routine: '5 min finger warm-up, 10 min note reading, 10 min hand coordination, 5 min melody practice.',
    benefits: 'Builds theory knowledge, coordination, and musical awareness.',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'pno-1',
        level: 'Beginner',
        title: 'Keyboard Layout',
        duration: '9 min',
        description: 'Recognize key groups and middle C.',
        content: 'Look for groups of two and three black keys. Middle C is near the center of the keyboard and helps you locate all other notes.'
      },
      {
        id: 'pno-2',
        level: 'Beginner',
        title: 'Finger Numbers',
        duration: '10 min',
        description: 'Use correct finger positions for both hands.',
        content: 'On both hands, thumbs are 1 and pinkies are 5. Finger numbers make motion efficient and reduce tension.'
      },
      {
        id: 'pno-3',
        level: 'Intermediate',
        title: 'Reading a Simple Melody',
        duration: '15 min',
        description: 'Treble clef, rhythm values, and note tracking.',
        content: 'Read from left to right, clap rhythm first, then add pitch. Use landmark notes like middle C and G.'
      },
      {
        id: 'pno-4',
        level: 'Advanced',
        title: 'Chord Inversions',
        duration: '17 min',
        description: 'Play triads smoothly across progressions.',
        content: 'Move the closest note possible to the next chord. This reduces hand movement and creates smoother harmony.'
      }
    ]
  },
  {
    id: 'violin',
    name: 'Violin',
    level: 'Intermediate',
    accent: 'violet',
    theory: 'Focus on posture, bow hold, open strings, and pitch control using ear training.',
    intro: 'The violin takes patience at first, but it develops excellent listening skills, posture control, and musical sensitivity.',
    practiceTips: [
      'Practice bowing on open strings first.',
      'Use slow movements to control tone.',
      'Check intonation with a tuner or piano.'
    ],
    commonMistakes: [
      'Holding the bow too tightly.',
      'Raising shoulders while playing.',
      'Playing before the pitch is stable.'
    ],
    routine: '5 min posture setup, 10 min bow control, 10 min intonation, 5 min melody practice.',
    benefits: 'Improves ear training, discipline, and expressive playing.',
    image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'vln-1',
        level: 'Beginner',
        title: 'How to Hold the Violin',
        duration: '11 min',
        description: 'Setup, chin rest use, and shoulder balance.',
        content: 'Place the violin on your left shoulder, rest the jaw gently on the chin rest, and keep the instrument supported without squeezing.'
      },
      {
        id: 'vln-2',
        level: 'Beginner',
        title: 'Bow Hold Basics',
        duration: '12 min',
        description: 'Flexible fingers and relaxed wrist.',
        content: 'Curve the fingers around the bow, keep the thumb bent, and let the pinky rest lightly on top for control.'
      },
      {
        id: 'vln-3',
        level: 'Intermediate',
        title: 'Open String Tone',
        duration: '14 min',
        description: 'Develop a clean sound before fingering notes.',
        content: 'Draw the bow parallel to the bridge using even pressure. Focus on a smooth sound across the full bow stroke.'
      },
      {
        id: 'vln-4',
        level: 'Advanced',
        title: 'First Position Accuracy',
        duration: '18 min',
        description: 'Train intonation and finger spacing.',
        content: 'Play with a drone note or tuner and listen closely for pitch alignment. Build muscle memory with slow repetitions.'
      }
    ]
  },
  {
    id: 'drums',
    name: 'Drums',
    level: 'Beginner Friendly',
    accent: 'emerald',
    theory: 'Learn pulse, subdivisions, stick grip, and how rhythms are counted in 4/4.',
    intro: 'Drums are perfect for learners who enjoy rhythm, energy, and coordination.',
    practiceTips: [
      'Count out loud while playing.',
      'Practice with a metronome daily.',
      'Separate hands and feet before combining.'
    ],
    commonMistakes: [
      'Playing too loudly all the time.',
      'Losing tempo.',
      'Tensing shoulders and wrists.'
    ],
    routine: '5 min pad warm-up, 10 min timing drills, 10 min groove practice, 5 min fills.',
    benefits: 'Builds rhythm, coordination, and confidence.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'drm-1',
        level: 'Beginner',
        title: 'Stick Grip and Pad Control',
        duration: '9 min',
        description: 'Grip, rebound, and basic strokes.',
        content: 'Hold the sticks loosely between thumb and index finger, let the rebound work, and keep the wrists relaxed.'
      },
      {
        id: 'drm-2',
        level: 'Beginner',
        title: 'Your First Rock Beat',
        duration: '11 min',
        description: 'Play kick, snare, and hi-hat together.',
        content: 'Count 1-2-3-4, play kick on 1 and 3, snare on 2 and 4, and steady hi-hats on every beat.'
      },
      {
        id: 'drm-3',
        level: 'Intermediate',
        title: 'Subdivision Practice',
        duration: '13 min',
        description: 'Quarter notes, eighth notes, and sixteenth notes.',
        content: 'Use a metronome and say the counts clearly. Internalizing subdivisions improves groove stability.'
      },
      {
        id: 'drm-4',
        level: 'Advanced',
        title: 'Simple Fill Transitions',
        duration: '16 min',
        description: 'Move between groove and short fills cleanly.',
        content: 'Play a one-bar groove then a short fill on the toms. Return to the beat exactly on count one.'
      }
    ]
  },
  {
    id: 'ukulele',
    name: 'Ukulele',
    level: 'Very Easy',
    accent: 'cyan',
    theory: 'Learn string names, tuning, simple chord shapes, and steady strumming patterns.',
    intro: 'The ukulele is one of the most beginner-friendly instruments because it is light, simple, and fun.',
    practiceTips: [
      'Use small relaxed motions when strumming.',
      'Focus on rhythm before speed.',
      'Memorize two or three chords first.'
    ],
    commonMistakes: [
      'Over-strumming too hard.',
      'Muting strings accidentally.',
      'Changing chords without counting.'
    ],
    routine: '5 min tuning, 10 min chord review, 10 min strumming, 5 min easy song.',
    benefits: 'Great for quick wins, rhythm, and musical confidence.',
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=1200&q=80',
    lessons: [
      {
        id: 'uku-1',
        level: 'Beginner',
        title: 'Ukulele Setup',
        duration: '7 min',
        description: 'Hold, tune, and identify strings.',
        content: 'Learn G-C-E-A tuning, hold the instrument close to your chest, and use the index finger for simple strums.'
      },
      {
        id: 'uku-2',
        level: 'Beginner',
        title: 'Your First Chords',
        duration: '9 min',
        description: 'Play C, F, and G7.',
        content: 'These chords let you play many easy songs. Practice switching while counting four beats on each chord.'
      },
      {
        id: 'uku-3',
        level: 'Intermediate',
        title: 'Island Strumming Pattern',
        duration: '12 min',
        description: 'Learn one of the most common groove patterns.',
        content: 'Try down-down-up-up-down-up slowly. Keep your hand moving even when you skip the strings.'
      },
      {
        id: 'uku-4',
        level: 'Advanced',
        title: 'Chord Flow and Dynamics',
        duration: '15 min',
        description: 'Make your playing sound smoother and more musical.',
        content: 'Use softer and louder strums intentionally and avoid stopping between chord changes.'
      }
    ]
  }
];

export const testimonials = [
  { name: 'Aruzhan', role: 'Beginner Guitar Student', text: 'The lessons are simple, clear, and I can actually see my progress every week.' },
  { name: 'Maksat', role: 'Piano Learner', text: 'The AI tips made practice feel less confusing. I always know what to do next.' },
  { name: 'Dana', role: 'Violin Student', text: 'I liked that the app feels motivating without being too complicated.' }
];

export const whyMusic = [
  'Improves creativity and self-expression',
  'Builds discipline and consistency',
  'Strengthens focus and memory',
  'Helps reduce stress and improve mood'
];
