import { PersonasServices } from '../../personas.services';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona: Persona = new Persona("Pola", "Kako");
  @Input() indice: number = 0;

  constructor(private personasServices: PersonasServices) {

  }
  emitirSaludo() {
    this.personasServices.saludar.emit(this.indice)
  }
}
