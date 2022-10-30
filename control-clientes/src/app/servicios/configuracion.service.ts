import { Configuracion } from './../modelo/configuracion.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { doc, docData, DocumentReference, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  configuracionDoc: DocumentReference<Configuracion>
  configuracion: Observable<Configuracion>;

  id = '1';

  constructor(private db: Firestore) {
  }

  getConfiguracion(): Observable<Configuracion> {
    this.configuracionDoc = doc(this.db, `configuracion/${this.id}`);
    return docData(this.configuracionDoc, { idField: 'id' });
  }

  modificarConfiguracion(configuracion: Configuracion) {
    this.configuracionDoc = doc(this.db, `configuracion/${this.id}`);
    return updateDoc(this.configuracionDoc, configuracion);
  }

}
