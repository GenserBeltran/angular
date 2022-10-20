import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string='Juan';
  apellido: string = 'Perez';
  private edad: number = 28;
  estatura: string = 165  + "cm";

getEdad(): number{
  return this.edad
}

}
