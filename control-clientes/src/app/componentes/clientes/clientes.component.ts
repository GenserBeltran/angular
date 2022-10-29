import { Cliente } from './../../modelo/cliente.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente = {
    nombre: " ",
    apellido: " ",
    email: " ",
    saldo: 0
  }

  //Definimos atributo para limpiar formulario
  @ViewChild("clienteForm") clienteForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  constructor(private clienteServicio: ClienteServicio,
    private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.clienteServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

  // getSaldoTotal() {
  //   let saldoTotal: number;
  //   if (this.clientes) {
  //     this.clientes.forEach(cliente => {
  //       saldoTotal += cliente.saldo;
  //     })
  //   }
  //   return saldoTotal;
  // }

  getSaldoTotal() {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo!;
      })
    }
    return saldoTotal;
  }

  agregar(clienteForm: NgForm) {
    if (!clienteForm.valid) {
      this.flashMessages.show("Por favor llena el formulario Correctamente", { cssClass: 'alert-danger', timeout: 4000 });
    } else {
      //agregar un nuevo cliente
      this.clienteServicio.agregarCliente(clienteForm.value);
      this.clienteForm.resetForm();
      this.cerrarModal();
    }

  }

  private cerrarModal() {
    this.botonCerrar.nativeElement.click();
  }

}
