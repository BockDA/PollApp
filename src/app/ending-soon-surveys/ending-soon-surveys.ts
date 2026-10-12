import { ChangeDetectionStrategy, Component } from '@angular/core';

// Bereich mit den bald endenden Umfragen auf dem Homescreen.
@Component({
  selector: 'app-ending-soon-surveys',
  templateUrl: './ending-soon-surveys.html',
  styleUrl: './ending-soon-surveys.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndingSoonSurveys {}
