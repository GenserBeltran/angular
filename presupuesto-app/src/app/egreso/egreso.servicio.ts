import { Egreso } from "./Egreso.model";

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso("Alquiler", 900),
    new Egreso("Ropa", 200)
  ];

  elminar(egreso: Egreso) {
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
