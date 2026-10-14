import { formatEndsIn } from './survey-dates';

// Fester Zeitpunkt, damit die Tests unabhängig vom heutigen Datum immer gleich ausgehen.
const NOW = new Date('2026-10-13T20:00:00Z');

describe('formatEndsIn', () => {
  it('shows "No deadline" when there is no end date', () => {
    expect(formatEndsIn(null, NOW)).toBe('No deadline');
  });

  it('rounds a partial day up to 1 Day (singular)', () => {
    const inFourteenHours = new Date('2026-10-14T10:00:00Z');

    expect(formatEndsIn(inFourteenHours, NOW)).toBe('Ends in 1 Day');
  });

  it('shows exactly 24 hours as 1 Day', () => {
    const inOneDay = new Date('2026-10-14T20:00:00Z');

    expect(formatEndsIn(inOneDay, NOW)).toBe('Ends in 1 Day');
  });

  it('shows 2 Days (plural) once more than 24 hours are left', () => {
    const inOneDayAndOneMinute = new Date('2026-10-14T20:01:00Z');

    expect(formatEndsIn(inOneDayAndOneMinute, NOW)).toBe('Ends in 2 Days');
  });

  it('shows 3 Days for exactly 3 days left', () => {
    const inThreeDays = new Date('2026-10-16T20:00:00Z');

    expect(formatEndsIn(inThreeDays, NOW)).toBe('Ends in 3 Days');
  });
});
