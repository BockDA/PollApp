import { Survey } from '../models/survey';

// VORLÄUFIG: Lokale Beispieldaten, bis die Umfragen aus Supabase geladen werden.

// Enddaten relativ zu heute, damit die Testdaten nicht „altern“.
// Negative Werte ergeben ein Datum in der Vergangenheit (abgelaufene Umfrage).
function daysFromNow(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

export const SAMPLE_SURVEYS: Survey[] = [
  // Laufende Umfragen mit Deadline (absichtlich unsortiert, um die Sortierung prüfen zu können)
  {
    id: 1,
    title: 'Gaming habits and favorite games!',
    category: 'Gaming & Entertainment',
    endDate: daysFromNow(1),
  },
  {
    id: 2,
    title: "Let's Plan the Next Team Event Together",
    category: 'Team Activities',
    endDate: daysFromNow(1),
  },
  {
    id: 3,
    title: 'Which online courses would help you most?',
    category: 'Education & Learning',
    endDate: daysFromNow(1),
  },
  {
    id: 4,
    title: 'Fit & wellness survey!',
    category: 'Health & Wellness',
    endDate: daysFromNow(2),
  },

  // Laufende Umfragen ohne Deadline
  {
    id: 5,
    title: 'Which tools should we try next year?',
    category: 'Technology & Innovation',
    endDate: null,
  },
  {
    id: 6,
    title: 'Coffee, tea or something else?',
    category: 'Lifestyle & Preferences',
    endDate: null,
  },

  // Abgelaufene Umfragen für den Reiter „Past survey“
  {
    id: 7,
    title: 'Summer party location',
    category: 'Team Activities',
    endDate: daysFromNow(-5),
  },
  {
    id: 8,
    title: 'Favorite board games for game night',
    category: 'Gaming & Entertainment',
    endDate: daysFromNow(-30),
  },
];
