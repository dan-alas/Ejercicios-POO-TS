import { Cuenta } from './Cuenta';

const miCuenta = new Cuenta('Daniel Alas', 10, 'Ahorro', 123456);
miCuenta.mostrarInformacion();
miCuenta.depositar(20);
miCuenta.retirar(5); 

