import { LogginService } from './LogginService.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private LoginService: LoginService) { }

  //Metodo Guardar Personas
  guardarPersonas(personas: Persona[]) {
    const token = this.LoginService.getIdToken();
    this.httpClient.put("https://listado-personas-47710-default-rtdb.firebaseio.com/datos.json?auth=" + token, personas)
      .subscribe(
        response => console.log("Resultado de guardar las personas" + response),
        error => console.log("Error al guardar Personas: " + error)
      );
  }

  //Carggar Persona
  cargarPersona() {
    const token = this.LoginService.getIdToken();
    return this.httpClient.get<Persona[]>("https://listado-personas-47710-default-rtdb.firebaseio.com/datos.json?auth=" + token);
  }

  //Modificar Persona nuevo metodo que obtenga el ondice de la db para  luego modificarlo

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    const token = this.LoginService.getIdToken();
    url = "https://listado-personas-47710-default-rtdb.firebaseio.com/datos/" + index + ".json?auth=" + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("Resultado modificar Persona: " + response)
        , error => console.log("Error en modificar Persona: " + error)
      )
  }

  eliminarPersona(index: number) {
    let url: string;
    const token = this.LoginService.getIdToken();
    url = "https://listado-personas-47710-default-rtdb.firebaseio.com/datos/" + index + ".json?auth=" + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("Resultado eliminar Persona: " + response)
        , error => console.log("Error en eliminar Persona: " + error)
      )
  }

}
