import { LoginGuardian } from './login/login-guardian.service';
import { environment } from './../environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasServices } from './personas.services';
import { LogginService } from './LogginService.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.service';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [LogginService, PersonasServices, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
