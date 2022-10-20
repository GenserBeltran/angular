import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {



  resultadoPadre : number = 0;

  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }


}
