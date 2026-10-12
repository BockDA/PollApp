import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EndingSoonSurveys } from '../ending-soon-surveys/ending-soon-surveys';
import { SurveyList } from '../survey-list/survey-list';

// Startseite der App. Sie wird über die Route '' in app.routes.ts angezeigt.
@Component({
  selector: 'app-home',
  imports: [EndingSoonSurveys, SurveyList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
