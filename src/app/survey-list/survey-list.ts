import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SAMPLE_SURVEYS } from '../data/sample-surveys';
import { Survey, SurveyCategory } from '../models/survey';
import { formatEndsIn } from '../utils/survey-dates';

// Die beiden Reiter der Liste: laufende oder abgeschlossene Umfragen.
export type SurveyTab = 'active' | 'past';

// Allgemeine Umfragenliste mit Reitern (Active / Past) und Kategorienfilter.
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyList {
  // Feste Kategorien aus dem Figma-Dropdown „Sort by categories“.
  // Der Typ SurveyCategory[] stellt sicher, dass nur erlaubte Kategorien in der Liste stehen.
  protected readonly categories: SurveyCategory[] = [
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation',
  ];

  // VORLÄUFIG: Beispieldaten; später kommen die Umfragen aus Supabase.
  protected readonly surveys = signal<Survey[]>(SAMPLE_SURVEYS);

  // Aktuell gewählter Reiter; beim Öffnen der Seite sind die laufenden Umfragen zu sehen.
  protected readonly selectedTab = signal<SurveyTab>('active');

  // Wird beim Klick auf einen Reiter aufgerufen.
  protected selectTab(tab: SurveyTab): void {
    this.selectedTab.set(tab);
  }

  // Ist das Kategorien-Menü geöffnet? Beim Laden der Seite ist es geschlossen.
  protected readonly isMenuOpen = signal(false);

  // Klick auf „Sort by categories“: öffnet das Menü, wenn es zu ist, und schließt es, wenn es offen ist.
  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  // Gewählte Kategorie; null = „All Surveys“ (kein Filter).
  protected readonly selectedCategory = signal<SurveyCategory | null>(null);

  // Klick auf einen Eintrag im Menü: Auswahl merken und das Menü schließen.
  protected selectCategory(category: SurveyCategory | null): void {
    this.selectedCategory.set(category);
    this.isMenuOpen.set(false);
  }

  // Liefert das Etikett „Ends in X Day(s)“ für einen Listeneintrag im Template.
  protected endsInLabel(endDate: Date | null): string {
    return formatEndsIn(endDate, new Date());
  }
}
