import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, authState } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: Auth) { }


  //Metodo para hacer login
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.authService, email, password)
        .then(res => resolve(res)
          , error => reject(error))
    });
  }

  //Recupera el user autenticado = todos (user && password) = credential
  getAuth() {
    return authState(this.authService).pipe(
      map(auth => auth)
    );
  }

  logout() {
    this.authService.signOut();
  }

  registrarse(email: string, password: string) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.authService, email, password)
        .then(res => resolve(res)
          , error => reject(error))
    });
  }
}
