
//Crear objetos


import { IProduct } from "./product.model";
import { ISupermarket } from "./supermarket.model";


let mercadona: ISupermarket={
    id: 1,
    brandName: "",
    m2: 0,
    numEmployees: 0,
    products: []
}

let yogures: IProduct ={
    id: 1,
    title: "Yogures sabor a kiwi",
    price: 4.99,
    quantity: 6,
    supermarket: mercadona
}

let pan: IProduct ={
    id: 2,
    title: "pan de pueblo rustico",
    price: 0.99,
    quantity: 20,
    supermarket: mercadona
}
// hacer que la asociacion se bidireccional
//completar la asociacion bidirecional
//Desde un producto acceder a un supermercado
//Desde un supermecado puede acceder a los producto
mercadona.products.push(yogures);
mercadona.products.push(pan);

// Crear otro supermercado esta vez pasando los productos directamente

let alimerka: ISupermarket ={ //ESTO ES UNIDIRECCIONAL
    id: 2,
    brandName: "Alimerka",
    m2: 200,
    numEmployees: 24,
    products: [
        {
            id: 3,
            title:'platano',
            price: 9.87,
            quantity:7,
        //supermarket opcional
        },
        {
            id: 4,
            title: "Naranjas",
            price: 0.87,
            quantity:600
        }
    ]
}
//manual
alimerka.products[0].supermarket = alimerka;

//Asignar supermercado alimerka a los productos alimerka


// Asignar supermercado alimerka a los productos alimerka utilizando un for

for (const product of alimerka.products){
    product.supermarket = alimerka;
    }

//forEach : recibe otra funcion como parametro
//
alimerka.products.forEach(product => product.supermarket = alimerka);