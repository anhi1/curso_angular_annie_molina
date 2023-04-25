// CREAR CLASE
// La palabra export permite que se pueda utilizar
// la clase desde otros archivos
export class Laptop {

    constructor(private id: number,
                private ram:number,
                private cores: number,
                private manufacturer:string,
                private model:string){} // modificador de visibilidad : privated


    getFullName(){
    return `${this.manufacturer} ${this.model}`
    }
}