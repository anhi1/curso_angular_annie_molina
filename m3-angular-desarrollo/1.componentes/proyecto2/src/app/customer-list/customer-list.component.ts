import { Component } from '@angular/core';
import { ICliente } from './modelo.cliente';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  clientes: ICliente[]=[
    {
    nombre: 'Pepito',
    edad: 37,
    calle: 'Calle canillas'
    },
    {
    nombre: 'Paco',
    edad: 45,
    calle: 'Corazon de maria'
    }
  ]
  }

