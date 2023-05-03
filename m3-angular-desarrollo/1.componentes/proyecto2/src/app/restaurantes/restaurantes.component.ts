import { Component } from '@angular/core';
import { IRestaurante } from './modelorestaurante';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
  restaurante1: IRestaurante={
    nombre: 'Marisqueria',
    calle: 'corazon de maria 67',
    abierto: false
  }
}
