import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-raul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './raul.html',  
  styleUrls: ['./raul.css']         // nota: con "s" al final
})

export class RaulComponent {
  nombre = 'Raúl Martínez';
  carrera = 'Ingeniería en Sistemas Computacionales';
  soy = 'Desarrollador de software apasionado por la tecnología';
  foto = '/assets/images/descarga.jpg';
}
