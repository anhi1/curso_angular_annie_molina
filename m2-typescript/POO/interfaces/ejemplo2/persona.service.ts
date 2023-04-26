
interface IPersonaService {
    guardarPersona(nif:string):void;
}

//clase 1: implentar los metodos de la interface utilizando un array
class PersonaServiceArray implements IPersonaService{

    personas:string[] = [];

    guardarPersona(nif: string): void {
        this.personas.push(nif);
    }
    
}

//clase 2: implementa los metodos de la interfaz utilizando otra estructura
class PersonaServiceSet implements IPersonaService{

    personas:Set<string> = new Set();

    guardarPersona(nif: string): void {
        this.personas.add(nif);
    }
    
}

//  Guardar este nif en un array
let persona1: IPersonaService = new PersonaServiceArray();
let persona2: IPersonaService = new PersonaServiceArray();
persona1.guardarPersona('51532669L');
persona2.guardarPersona('78946632L');
console.log(persona1,persona2)



