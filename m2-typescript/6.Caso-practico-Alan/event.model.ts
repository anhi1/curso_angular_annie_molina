

//Opcion 1:con una interfaz
export interface IEvent{ // es contrato comun que me permite crear implementaciones
    id:number;
    title:string;
    fecha:Date;
    priority:string;
    description:string
}

