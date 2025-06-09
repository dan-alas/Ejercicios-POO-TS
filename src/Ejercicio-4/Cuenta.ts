export class Cuenta {
    //Atributos
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: number;
    //Constructor
    constructor(nombre: string, cantidad:number, tipoCuenta: string, numeroCuenta: number){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    //Metodos
    depositar(valor: number){
        if(valor < 5){
            console.log('La cantidad a depositar debe ser mayor a 5');
        } else {
            this.cantidad += valor;
            console.log(`Cantidad depositada correctamente $${valor} dolares`);
        }
    }

    retirar(valor:number){
        if(valor < 5){
            console.log('La cantidad a retirar debe ser mayor a 5');
        } else if (this.cantidad <= 0) {
            console.log('Cantidad insufiente')
        } else if (valor > this.cantidad) {
            console.log(`Saldo insuficiente, solo tienes: $${this.cantidad.toFixed(2)}`)
        } else {
            this.cantidad -= valor;
            console.log(`Cantidad retirada correctamente $${valor} dolares`);
        }
    }

    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Numero de cuenta: ${this.numeroCuenta}`);
    }

}