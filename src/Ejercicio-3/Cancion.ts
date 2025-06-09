export class Cancion {
    public titulo: string;
    public genero: string;
    private _autor: string;

    //Constructor
    constructor( titulo: string, genero: string ) {
        this.titulo = titulo;
        this.genero = genero;
        this._autor = '';
    }

    //Metodos
    get autor() { 
        return this._autor; //Para obtener
    }

    set autor( nuevoAutor: string ) {
        this._autor = nuevoAutor; //Para asignar nuevo valor
    }

    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this._autor}`);
    }

}