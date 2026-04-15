const KEYS = {
  LESSON_PROGRESS: 'musicmentor_lesson_progress',
  PRACTICE_SESSIONS: 'musicmentor_practice_sessions'
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
  }
}

export function getLessonProgress() {
  return readJSON(KEYS.LESSON_PROGRESS, []);
}

export function saveLessonProgress(progressList) {
  writeJSON(KEYS.LESSON_PROGRESS, progressList);
}

export function getPracticeSessions() {
  return readJSON(KEYS.PRACTICE_SESSIONS, []);
}

export function savePracticeSessions(sessions) {
  writeJSON(KEYS.PRACTICE_SESSIONS, sessions);
}

export function addPracticeSession(session) {
  const sessions = getPracticeSessions();
  const updated = [session, ...sessions];
  savePracticeSessions(updated);
  return updated;
}

export function deletePracticeSession(id) {
  const sessions = getPracticeSessions();
  const updated = sessions.filter((s) => s.id !== id);
  savePracticeSessions(updated);
  return updated;
}

export function getPracticeStats(sessions) {
  const totalMinutes = sessions.reduce((sum, s) => sum + (s.minutes ?? s.duration ?? 0), 0);
  const uniqueDays = [...new Set(sessions.map((s) => s.date))].sort();

  let streak = 0;
  if (uniqueDays.length) {
    streak = 1;
    for (let i = uniqueDays.length - 1; i > 0; i -= 1) {
      const diff = (new Date(uniqueDays[i]) - new Date(uniqueDays[i - 1])) / 86400000;
      if (diff === 1) streak += 1;
      else break;
    }
  }

  return { totalMinutes, streak };
}
