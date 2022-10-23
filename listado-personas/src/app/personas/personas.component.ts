import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasServices } from '../personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personasServices: PersonasServices,
    private router: Router) {
  }
  ngOnInit(): void {
    this.personas = this.personasServices.personas
  }

  agregar() {
    this.router.navigate(["personas/agregar"]);
  }
}
