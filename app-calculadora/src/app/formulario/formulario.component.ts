import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  operandaA : number = 0;
  operandaB : number = 0;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
    //this.resultado = this.operandaA + this.operandaB;
    let resultado = this.operandaA + this.operandaB;
    this.resultadoSuma.emit(resultado);
  }
}
