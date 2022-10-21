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

}
