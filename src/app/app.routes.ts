import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DanielSalazarComponent } from './daniel-salazar/daniel-salazar';

export const routes: Routes = [
  { path: '', component: Home },  // Página Daniel Salazar
  { path: 'daniel-salazar', component: DanielSalazarComponent }
];

