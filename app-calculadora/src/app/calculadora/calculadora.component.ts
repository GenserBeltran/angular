import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  mensaje = "Resultado:"

  operandaA : number = 0;
  operandaB : number = 0;
  resultado : number = 0;

sumar():void{
  this.resultado = this.operandaA + this.operandaB;
}



}
