import { Component } from '@angular/core';

interface IProduct{
  id: number;
  title: string;
  price: number;
}
@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {
  //variables
  mensaje: string ="hola mundo desde ejemplo";
  precio: number =3.99;

  //objeto
  product1:IProduct={
    id: 1,
    title: 'ordenador portatil MSI Modern',
    price: 99.0
  }

  checkPrice(): string {
    if (this.product1.price <= 50)
      return "green";
    else if (this.product1.price <= 100)
      return "red";
    else
      return "blue";
    //  <= 50 devuelve green
    // > 50 y < 100 devuelve blue
    // >=100 devuelve red
}
