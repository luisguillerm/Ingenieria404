import { Component } from '@angular/core';

@Component({
  selector: 'app-daniel-salazar',
  standalone: true,
  imports: [],
  templateUrl: './daniel-salazar.html',
  styleUrl: './daniel-salazar.css'
})
export class DanielSalazarComponent {
  nombre: string = 'Daniel Salazar';
  profesion: string = 'Desarrollo de Software';
  descripcion: string = 'Me gusta la programación y la tecnología';
  edad: number = 20;
  foto: string = '/image/perfil.jpg';
}
