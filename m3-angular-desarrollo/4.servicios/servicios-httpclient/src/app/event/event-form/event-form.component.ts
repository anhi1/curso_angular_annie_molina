import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  title:string="";

  constructor(private eventService:EventService){}

  create():void{
    let event:IEvent ={ //CREAR UN OBJETO
      userId: 1,
      id: undefined,
      title: this.title,
      completed: false
    }

    //llamar al servicio
    this.eventService.create(event).subscribe(data => console.log(data));
  }
}
