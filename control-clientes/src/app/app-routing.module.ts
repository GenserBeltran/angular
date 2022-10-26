import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { EditarClientesComponent } from './componentes/editar-clientes/editar-clientes.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: TableroComponent },
  { path: "login", component: LoginComponent },
  { path: "registrar", component: RegistroComponent },
  { path: "configuracion", component: ConfiguracionComponent },
  { path: "cliente/editar", component: EditarClientesComponent },
  { path: "**", component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
