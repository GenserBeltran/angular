import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,
    private flashMessages: FlashMessagesService,
    private loginService: LoginService) { }

  ngOnInit() {
    //Revisando si el usuario este Logeado quitamos la pagina de registrarse
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    })
  }

  registro() {
    this.loginService.registrarse(this.email, this.password)
      .then(res => {
        console.log(res);
        this.router.navigate(['/']);
      })
      .catch(error => {
        console.log(error);
        this.flashMessages.show(error.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

}
