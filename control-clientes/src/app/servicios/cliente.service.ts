import { Cliente } from './../modelo/cliente.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, docData, orderBy, DocumentReference } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class ClienteServicio {

  clientesColeccion: CollectionReference<Cliente>;
  clienteDoc: DocumentReference<Cliente>;
  clientes: Observable<Cliente[]>;
  cliente!: Observable<Cliente | null>;

  constructor(private firestore: Firestore) {
    this.clientesColeccion = collection(this.firestore, "clientes"), orderBy("name", "asc");
  }

  getClientes(): Observable<Cliente[]> {
    return collectionData(this.clientesColeccion, { idField: 'id' }) as Observable<Cliente[]>;
  }

  agregarCliente(cliente: Cliente) {
    addDoc(this.clientesColeccion, cliente);
  }

  getCliente(id: string): Observable<Cliente> {
    this.clienteDoc = doc(this.firestore, `clientes/${id}`);
    return docData(this.clienteDoc, { idField: 'id' });
  }

  modificarCliente(cliente: Cliente) {
    this.clienteDoc = doc(this.firestore, `clientes/${cliente.id}`);
    return updateDoc(this.clienteDoc, { ...cliente });
  }

  eliminarCliente(id: string) {
    this.clienteDoc = doc(this.firestore, `clientes/${id}`);
    return deleteDoc(this.clienteDoc);
  }

}

