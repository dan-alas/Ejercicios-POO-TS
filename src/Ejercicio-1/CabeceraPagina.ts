export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    //Constructor
    constructor(){
        this.titulo = '';
        this.color = '';
        this.fuente = '';
        this.alineacion = 'Izquierda'; //Ya que es la alineacion por defecto en paginas web
    }
    //Metodos 
    public obtenerPropiedades(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    public indicarAlineacion (alineacion: string){
        this.alineacion = alineacion;
    }

    public mostrarPropiedades(){
        console.log('El título es:', this.titulo);
        console.log('El color: es', this.color);
        console.log('La fuente: es', this.fuente);
        console.log('La alineación es:', this.alineacion);
    }
}