import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  // Leerer Pfad = Startseite (http://localhost:4200/)
  { path: '', component: Home },
];
