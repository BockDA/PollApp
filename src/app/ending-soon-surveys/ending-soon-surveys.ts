import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SAMPLE_SURVEYS } from '../data/sample-surveys';
import { Survey } from '../models/survey';
import { formatEndsIn } from '../utils/survey-dates';

// Laut README: höchstens 3 Karten (Wert aus dem Figma-Design).
const ENDING_SOON_LIMIT = 3;

// Wählt die laufenden Umfragen mit Deadline aus, frühestes Ende zuerst, höchstens 3.
// "now" wird übergeben statt intern erzeugt, damit Tests einen festen Zeitpunkt verwenden können.
export function selectEndingSoonSurveys(surveys: Survey[], now: Date): Survey[] {
  return surveys
    .filter(
      // Typ-Hinweis: Nach dem Filter hat jede Umfrage garantiert ein Enddatum (nicht null).
      (survey): survey is Survey & { endDate: Date } =>
        survey.endDate !== null && survey.endDate > now,
    )
    .sort((a, b) => a.endDate.getTime() - b.endDate.getTime())
    .slice(0, ENDING_SOON_LIMIT);
}

// Bereich mit den bald endenden Umfragen auf dem Homescreen.
@Component({
  selector: 'app-ending-soon-surveys',
  templateUrl: './ending-soon-surveys.html',
  styleUrl: './ending-soon-surveys.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndingSoonSurveys {
  // VORLÄUFIG: Beispieldaten; später kommen die Umfragen aus Supabase.
  protected readonly surveys = signal<Survey[]>(SAMPLE_SURVEYS);

  // Wird automatisch neu berechnet, sobald sich "surveys" ändert.
  protected readonly endingSoonSurveys = computed(() =>
    selectEndingSoonSurveys(this.surveys(), new Date()),
  );

  // Liefert das Etikett „Ends in X Day(s)“ für eine Karte im Template.
  protected endsInLabel(endDate: Date | null): string {
    return formatEndsIn(endDate, new Date());
  }
}
