import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable()
export class LoginService {

  token: string | null;

  constructor(private router: Router, private auth: Auth) {
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      response => {
        this.auth.currentUser?.getIdToken().then(
          token => {
            console.log(token)
            this.token = token;
            this.router.navigate(["/"]);
          }
        )
      }
    )
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado() {
    return this.token != null;
  }

  logout() {
    this.auth.signOut().then(() => {
      this.token = null;
      this.router.navigate(['login'])
    }).catch(error => console.log("Error de Logout" + error));
  }
}
