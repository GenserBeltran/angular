import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasServices {

  personas: Persona[] = [
    new Persona("Juan", "Perez"),
    new Persona("Gabo", "Paz"),
    new Persona("Karla", "Lara")
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LogginService) {

  }

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola("Accediendo a login desde Persona y agregarmos la persona: " + persona.apellido);
    this.personas.push(persona);
  }

  encontarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }

}
