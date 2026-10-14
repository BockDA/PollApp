const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

// Erzeugt das Etikett für die Deadline einer Umfrage, z. B. "Ends in 2 Days".
// Angefangene 24 Stunden zählen als ganzer Tag (aufrunden), daher erscheint nie "0 Days".
// "now" wird übergeben, damit Tests einen festen Zeitpunkt verwenden können.
export function formatEndsIn(endDate: Date | null, now: Date): string {
  if (endDate === null) {
    return 'No deadline';
  }

  const daysLeft = Math.ceil((endDate.getTime() - now.getTime()) / MILLISECONDS_PER_DAY);

  if (daysLeft === 1) {
    return 'Ends in 1 Day';
  }

  return `Ends in ${daysLeft} Days`;
}
