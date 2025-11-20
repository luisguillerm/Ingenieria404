// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 1. 
import { EnriqueMz } from './enrique-mz/enrique-mz'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // 2. Agregamos el componente a la lista de imports para que pueda ser usado
    EnriqueMz 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Nota: Dejé la variable title por si la necesitas más adelante
  protected readonly title = signal('Angular-404');
}