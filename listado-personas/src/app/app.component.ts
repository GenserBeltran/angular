import { PersonasServices } from './personas.services';
import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'listado De Personas';
  personas: Persona[] = [];

  constructor(private logginService: LogginService, private personasServices: PersonasServices) {
  }
  ngOnInit(): void {
    this.personas = this.personasServices.personas
  }

}
