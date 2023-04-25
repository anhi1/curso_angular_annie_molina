import { IProduct } from "./product.model";

//one Supermarket to many products (one to many)
export interface ISupermarket{
    id : number,
    brandName: string;
    m2: number; //metros cuadrados
    numEmployees: number;
    products: IProduct[] // One to Many - array de productos
}