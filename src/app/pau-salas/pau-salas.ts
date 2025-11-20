import { Component } from '@angular/core';

@Component({
  selector: 'app-pau-salas',
  imports: [],
  templateUrl: './pau-salas.html',
  styleUrl: './pau-salas.css'
})
export class PauSalasComponent {
  nombre: string = 'Paulina Salas';
  profesion: string = 'Desarrollo de Software';
  descripcion: string = 'Me gustan los perros y la música';
  edad: number = 20;
  foto: string = '/image/perro.jpg';
}
