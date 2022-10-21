import { PersonaComponent } from './../persona/persona.component';
import { PersonasServices } from './../personas.services';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from './../LogginService.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  nombreInput: string = "";
  @ViewChild('apellidoRef') apellidoRef: ElementRef;

  constructor(private logginService: LogginService, private personasServices: PersonasServices) {
    this.personasServices.saludar.subscribe((indice: number) => alert("El inidice es: " + indice));
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoRef.nativeElement.value);
    this.personasServices.agregarPersona(persona1);
  }



}
