import { AuthGuard } from './guardianes/auth.guard';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

const routes: Routes = [
  { path: '', component: TableroComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "registrarse", component: RegistroComponent, canActivate: [ConfiguracionGuard] },
  { path: "configuracion", component: ConfiguracionComponent, canActivate: [AuthGuard] },
  { path: "cliente/editar/:id", component: EditarClientesComponent, canActivate: [AuthGuard] },
  { path: "cliente/editar", component: EditarClientesComponent, canActivate: [AuthGuard] },
  { path: "**", component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
