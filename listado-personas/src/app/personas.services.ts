import { DataServices } from './data.service';
import { Injectable, EventEmitter } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasServices {

  personas: Persona[] = [
    // new Persona("Juan", "Perez"),
    // new Persona("Gabo", "Paz"),
    // new Persona("Karla", "Lara")
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private logginService: LogginService,
    private dataServices: DataServices) {

  }

  //Como la data viene de Firebase se crea un metood para que actualice el arreglo una vezx recuperado
  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }
  obtenerPersonas() {
    return this.dataServices.cargarPersona();
  }

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola("Accediendo a login desde Persona y agregarmos la persona: " + persona.apellido);
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  encontarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //Para que los indices de la DB se regeneren mandamos a cargar nuevamente a las personas
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }

}
