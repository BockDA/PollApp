import { Survey } from '../models/survey';
import { selectEndingSoonSurveys } from './ending-soon-surveys';

// Fester Zeitpunkt, damit die Tests unabhängig vom heutigen Datum immer gleich ausgehen.
const NOW = new Date('2026-10-13T12:00:00Z');

// Erzeugt eine Testumfrage; nur id und endDate sind für diese Tests wichtig.
function createSurvey(id: number, endDate: Date | null): Survey {
  return { id, title: `Survey ${id}`, category: 'Team Activities', endDate };
}

function getIds(surveys: Survey[]): number[] {
  return surveys.map((survey) => survey.id);
}

describe('selectEndingSoonSurveys', () => {
  it('sorts by end date, earliest first', () => {
    const surveys = [
      createSurvey(1, new Date('2026-10-16T12:00:00Z')),
      createSurvey(2, new Date('2026-10-14T12:00:00Z')),
      createSurvey(3, new Date('2026-10-15T12:00:00Z')),
    ];

    expect(getIds(selectEndingSoonSurveys(surveys, NOW))).toEqual([2, 3, 1]);
  });

  it('returns at most 3 surveys', () => {
    const surveys = [
      createSurvey(1, new Date('2026-10-14T12:00:00Z')),
      createSurvey(2, new Date('2026-10-15T12:00:00Z')),
      createSurvey(3, new Date('2026-10-16T12:00:00Z')),
      createSurvey(4, new Date('2026-10-17T12:00:00Z')),
    ];

    expect(getIds(selectEndingSoonSurveys(surveys, NOW))).toEqual([1, 2, 3]);
  });

  it('leaves out surveys without a deadline', () => {
    const surveys = [createSurvey(1, null), createSurvey(2, new Date('2026-10-14T12:00:00Z'))];

    expect(getIds(selectEndingSoonSurveys(surveys, NOW))).toEqual([2]);
  });

  it('leaves out expired surveys, including a deadline exactly now', () => {
    const surveys = [
      createSurvey(1, new Date('2026-10-12T12:00:00Z')),
      createSurvey(2, NOW),
      createSurvey(3, new Date('2026-10-13T12:00:01Z')),
    ];

    expect(getIds(selectEndingSoonSurveys(surveys, NOW))).toEqual([3]);
  });

  it('returns an empty array when no survey matches', () => {
    const surveys = [createSurvey(1, null), createSurvey(2, new Date('2026-10-01T12:00:00Z'))];

    expect(selectEndingSoonSurveys(surveys, NOW)).toEqual([]);
  });
});
