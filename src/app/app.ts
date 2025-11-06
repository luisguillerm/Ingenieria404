import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Solo necesitas RouterOutlet aquí
import { routes } from './app.routes';  // Las rutas están definidas en app.routes.ts

@Component({
  selector: 'app-root',
  standalone: true,  // El componente es standalone
  imports: [RouterOutlet],  // Solo importas RouterOutlet
  templateUrl: './app.html',  // Template del componente
  styleUrls: ['./app.css'],   // Estilos del componente
})
export class App {
  protected readonly title = 'Angular-404';  // Título del componente
}

