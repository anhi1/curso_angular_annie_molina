
//Crear objetos


import { IProduct } from "./product.model";
import { ISupermarket } from "./supermarket.model";


let mercadona: ISupermarket={
    id: 0,
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

//
