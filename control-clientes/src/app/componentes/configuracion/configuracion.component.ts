import { ConfiguracionService } from './../../servicios/configuracion.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/modelo/configuracion.model';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  permitirRegistro?= false;

  constructor(
    private router: Router,
    private configuracionService: ConfiguracionService
  ) { }

  ngOnInit(): void {
    //Recuperando el valor de la vriable permitirRegistro de la DB
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  guardar() {
    let configuracion = { permitirRegistro: this.permitirRegistro };
    this.configuracionService.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }

}
