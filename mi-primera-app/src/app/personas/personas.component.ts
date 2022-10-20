import { Component } from "@angular/core";

 @Component({
selector: 'app-personas',
templateUrl: './personas.component.html',
styleUrls: [`./personas.component.css`],
 })
 export class PersonasComponent{

  deshabilitar = false;
  mensaje = 'No se agregado ninguna Persona';
  titulo = "";
  estadoCivil = "Solter@";
  mensaje2 = '';
  mostrar = false;


  agregarPersona(){
this.mensaje = "Persona agregada";
  }
  modificarTitulo(event: Event){
    console.log("Entrando a metodo modificar Titulo");
    this.titulo = (<HTMLInputElement>event.target).value;
  }

  agregarPersona2(){
    this.mostrar = true;
    this.mensaje2 = "Persona agregada con Directiva *ngIf";
      }


 }

