import { ISupermarket } from "./supermarket.model";


//Many products to one Supermarket (Many to one)
export interface IProduct {
    id: number,
    title:string,
    price:number,
    quantity:number, // cantidad de productos : stock
    supermarket?: ISupermarket //Many to one
}