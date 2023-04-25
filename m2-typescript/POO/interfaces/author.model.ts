interface IAuthor { // editorial tambien puede ser otra interfaz
    idAuthor:number,
    firstName: string,
    dateFrom: Date,   //fecha que empieza a escribir
    dateTo: Date | undefined,   // fechaq que termino escribir
    city:string,
    bio:string
}

//crear objeto
let author1: IAuthor={
    idAuthor: 1,
    firstName: "Neruda",
    dateFrom: new Date(2000,1,1),
    dateTo: undefined,
    city: "Madrid",
    bio: `Lorem ipsum dolor`
}

let author2: IAuthor ={
    idAuthor: 2,
    firstName: "Eckhart",
    dateFrom: new Date(2000,1,1),
    dateTo: new Date(2019,1,1),
    city: "Barcelona",
    bio: `Lorem ipsum dolor`
}
 
 