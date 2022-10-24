import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment.prod';
import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'listado De Personas';

  constructor(private auth: Auth, private loginService: LoginService) {

  }

  ngOnInit(): void {
    // //Metodo Obsoleto
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBOrXl_V_2pROTiIr8-6E3ipBBFnNaZ5Ao",
    //   authDomain: "listado-personas-47710.firebaseapp.com",
    // })

  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }

}
