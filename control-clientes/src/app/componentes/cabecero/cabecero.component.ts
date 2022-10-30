import { ConfiguracionService } from './../../servicios/configuracion.service';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { LoginService } from './../../servicios/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string | null;
  permitirRegistro?: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionService: ConfiguracionService
  ) { }

  ngOnInit(): void {
    //Inicializando loggin user
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.configuracionService.getConfiguracion().subscribe(
      configuracion => {
        this.permitirRegistro = configuracion.permitirRegistro;
      }
    )
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);

  }

}
