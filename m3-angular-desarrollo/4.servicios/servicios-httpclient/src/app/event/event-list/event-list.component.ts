import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit{  
  //llamada a un servicio se usa OnInit para q se ejecut auotmaticamente ese metodo y se llame al servicio

  events: IEvent[] = [];
  constructor(private eventService: EventService) { }//importamos el eventService
 

  ngOnInit(): void { //llama al servicio
    this.eventService.findAll().subscribe(data => { //los datos que te lleguen d esa respuesta los asignas a un array de 
      console.log(data);
      this.events = data;
    });
  }
}

/* ngOnInit
Este método es parte del ciclo de vida de los componentes en Angular 
y se llama una vez que se ha creado el componente y Angular ha inicializado sus propiedades.
-Obtener datos iniciales del componente o de un servicio externo.
-Inicializar variables y objetos necesarios para el componente.
-Configurar suscripciones a Observables.
-Llamar a funciones necesarias para configurar el componente.



La función "subscribe()" se utiliza para iniciar la suscripción a un Observable.
 Puede proporcionar una o más funciones de devolución de llamada para manejar
 los valores que se emiten en la secuencia. Por ejemplo, podría tener una 
 función de devolución de llamada que actualice una variable en su componente 
 cada vez que se emita un nuevo valor en el Observable.
*/