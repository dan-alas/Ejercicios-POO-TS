import { Calculadora } from './Calculadora';

const operacion = new Calculadora();

console.log('Suma:', operacion.sumar(8, 2));
console.log('Resta:', operacion.restar(8, 2));
console.log('Multiplicación:', operacion.multiplicar(8, 2));
console.log('División:', operacion.dividir(8, 2));
console.log('Potencia:', operacion.potencia(2, 4));
console.log('Factorial:', operacion.factorial(5));