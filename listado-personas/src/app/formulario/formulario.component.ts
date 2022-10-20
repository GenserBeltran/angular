import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCrear = new EventEmitter<Persona>();

  nombreInput:string = "";


  //Concepto Referencias Locales en Angular
  // agregarPersona(apellidoRef:HTMLInputElement){
  //   let persona1 = new Persona( this.nombreInput, apellidoRef.value);
  //   // this.personas.push(persona1); ya que por este medio no tenemos accecso al componente padre
  //   this.personaCrear.emit(persona1);
  // }



  //Para aclarar el concepto ViewChild y Local Reference en Angular
  //Realizaramos un paralelo en apellido donde realice el priceso en este componente de otro modo
  @ViewChild('apellidoRef') apellidoRef: ElementRef ;

  agregarPersona(){
    let persona1 = new Persona( this.nombreInput, this.apellidoRef.nativeElement.value);
    // this.personas.push(persona1); ya que por este medio no tenemos accecso al componente padre
    this.personaCrear.emit(persona1);
  }

}
