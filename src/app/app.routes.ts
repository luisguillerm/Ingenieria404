import { Routes } from '@angular/router';
import { Home } from './home/home';  // Importa HomeComponent
import { Luis } from './luis/luis';  // Im

export const routes: Routes = [
  { path: '', component: Home },  // Página de bienvenida
  { path: 'luis', component: Luis }  // Ruta hacia el componente Luis
];

