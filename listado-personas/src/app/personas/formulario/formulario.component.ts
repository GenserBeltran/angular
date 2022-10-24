import { ActivatedRoute, Router } from '@angular/router';
import { PersonasServices } from '../../personas.services';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LogginService } from '../../LogginService.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  nombreInput: string = "";
  apellidoInput: string = "";
  index: number;
  modoEdicion: number;

  constructor(
    private logginService: LogginService,
    private personasServices: PersonasServices,
    private router: Router,
    private route: ActivatedRoute) {
    this.personasServices.saludar.subscribe((indice: number) => alert("El inidice es: " + indice));
  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']; //El mas + permite hacer el cambio de tipo de variable en este caso llega estring y con el signo + pasamos a number
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let persona: Persona = this.personasServices.encontarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;

    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      this.personasServices.modificarPersona(this.index, persona1)
    } else {
      this.personasServices.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != null) {
      this.personasServices.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }

}
