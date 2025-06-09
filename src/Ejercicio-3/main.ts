import { Cancion } from "./Cancion";

const miCancion = new Cancion('Ritual', 'Electronica');
miCancion.autor = 'Marshmello';
miCancion.mostrarDatos();

console.log(miCancion.autor)