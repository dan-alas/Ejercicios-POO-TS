// Empleado.ts
import { Persona } from "./Persona";

export class Empleado extends Persona {
  private sueldo: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = 0;
  }

  cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  imprimirSueldo(): void {
    console.log(`Sueldo: $${this.sueldo.toFixed(2)}`);
  }

  mostrarDatosPersonales(): void {
    console.log("Datos del Empleado:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Dirección: ${this.direccion}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Edad: ${this.edad}`);
  }
}
