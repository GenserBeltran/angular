import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {

  cliente: Cliente = {
    nombre: " ",
    apellido: " ",
    email: " ",
    saldo: 0
  }

  //Definir el atributo qeu esta proporcionando la URL
  id: string;


  constructor(private clienteServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  guardar({ value, valid }: NgForm) {
    if (!valid) {
      this.flashMessages.show("Por favor llena el formulario Correctamente", {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;
      //agregar un nuevo cliente
      this.clienteServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }

  eliminar() {
    if (confirm('Seguro que desea elmiminar el CLiente?')) {
      this.clienteServicio.eliminarCliente(this.id);
      this.router.navigate(['/']);
    }
  }
}
