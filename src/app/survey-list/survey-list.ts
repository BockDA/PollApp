import { ChangeDetectionStrategy, Component } from '@angular/core';

// Allgemeine Umfragenliste mit Reitern (Active / Past) und Kategorienfilter.
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SurveyList {
  // Feste Kategorien aus dem Figma-Dropdown „Sort by categories“.
  protected readonly categories = [
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation',
  ];
}
