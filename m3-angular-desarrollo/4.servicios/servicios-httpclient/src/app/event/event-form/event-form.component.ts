import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
//ESTE COMPONENTE PERMITE CREAR NUEVOS IEvent Y ACTUALIZAR un IEvent
export class EventFormComponent implements OnInit{

  title:string="";
  createdEvent:IEvent | undefined;
  eventToUpdate:IEvent | undefined; //crear un evento que se va ha actualizar
  titleToUpdate:string = "";

  constructor(private eventService:EventService){}
  ngOnInit(): void { //llama al servicio lo carga desde backend
    //recuperar IEvent por id 1 para cargarlo en
    this.eventService.findById(1).subscribe(data => {
      this.eventToUpdate = data;
      this.titleToUpdate = this.eventToUpdate.title;
    });
    //cargara titulo del IEvent 1 en el formulario de actualizar
  }

  create():void{
    let event:IEvent ={ //CREAR UN OBJETO
      userId: 1,
      id: undefined,
      title: this.title,
      completed: false
    }
    //llamar al servicio
    this.eventService.create(event).subscribe(data => this.createdEvent = data);
    this.title="";
  }

  update():void{
    if (!this.eventToUpdate) return; //si no hay evento a actualizar nos marchamos
      this.eventToUpdate.title = this.titleToUpdate;
      this.eventService.update(this.eventToUpdate).subscribe(data=> console.log(data));
    }
}


