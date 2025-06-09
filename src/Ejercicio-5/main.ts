// index.ts
import { Empleado } from "./Empleado";

const empleado1 = new Empleado("Daniel", "Alas", "Sonsonate", "7049-1519", 17);
empleado1.cargarSueldo(350.00);

empleado1.mostrarDatosPersonales();
empleado1.verificarMayorEdad();
empleado1.imprimirSueldo();
