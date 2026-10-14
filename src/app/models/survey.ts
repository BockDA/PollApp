// Erlaubte Kategorien, wie im Figma-Dropdown „Sort by categories“.
export type SurveyCategory =
  | 'Team Activities'
  | 'Health & Wellness'
  | 'Gaming & Entertainment'
  | 'Education & Learning'
  | 'Lifestyle & Preferences'
  | 'Technology & Innovation';

// Beschreibt eine Umfrage, wie sie in der Übersicht angezeigt wird.
export interface Survey {
  id: number;
  title: string;
  category: SurveyCategory;
  // null = keine Deadline (das Feld ist im Formular optional).
  endDate: Date | null;
}
