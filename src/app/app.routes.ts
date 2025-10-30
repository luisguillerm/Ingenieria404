import { Routes } from '@angular/router';
import { Luis } from './luis/luis';  // Importa el componente Luis

export const routes: Routes = [
  { path: '', component: App },       // Página de bienvenida
  { path: 'luis', component: Luis }   // Ruta hacia el componente Luis
];

