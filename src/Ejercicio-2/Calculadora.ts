export class Calculadora {

    sumar(num1: number, num2: number):number{
        return num1 + num2;
    }

    restar(num1: number, num2: number):number{
        return num1 - num2;
    }

    multiplicar(num1: number, num2: number):number{
        return num1 * num2;
    }

    dividir(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error('No se puede dividir entre cero');
        }
        return num1 / num2;
    }

    potencia(base: number, exponente: number):number{
        return Math.pow (base, exponente);
    }

   factorial(n: number): number {
        if (n < 0) throw new Error('No se puede calcular el factorial de un número negativo');
        if (n === 0 || n === 1) return 1;
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

}