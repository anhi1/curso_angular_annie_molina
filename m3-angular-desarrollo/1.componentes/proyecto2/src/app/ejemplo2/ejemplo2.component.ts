import { Component } from '@angular/core';
import { ILaptop } from './laptop.model';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {
  mensaje: string = "hola";

  //oredandor1 es un identificador d el avariable
  ordenador1: ILaptop = {
    fabricante: 'MSI',
    modelo: 'Modern 1316',
    ram: 32
  }
  ordenador2: ILaptop = {
    fabricante: 'ASUS',
    modelo: 'A556',
    ram: 16
  }

}
