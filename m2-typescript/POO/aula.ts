class Aula{
    constructor(private id:number, private capacidad:number, private ventilacion:boolean ){}
    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad:number){
        this.capacidad = capacidad > 0 && capacidad <= 40 ? capacidad : this.capacidad;// 
    }
}

//creando objetos
const aulaCursoAngular = new Aula(1, 25, true);
const aulaReuniones = new Aula(2, 3, false );
const aulaAnalisisDatos = new Aula(3, 20, true);

console.log(aulaCursoAngular);
//console.log(aulaCursoAngular.id);

//PRUEBA 1: CAMBIAR CAPACIDAD A UN VALOR PERMITIDO
aulaCursoAngular.setCapacidad(35);
console.log(aulaCursoAngular.getCapacidad());

//PRUEBA : CAMBIAR CAPACIDAD A UN VALOR NO PERMITIDO
aulaCursoAngular.setCapacidad(80);
console.log(aulaCursoAngular.getCapacidad());



