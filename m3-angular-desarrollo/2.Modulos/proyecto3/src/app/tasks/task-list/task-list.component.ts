import { Component } from '@angular/core';
import { ITask } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: ITask[] = [
  //es un objeto creado desde la interfaz
  {
    id:1,
    title:'crear modulos en angular',
    hours:7
  },
  {
    id:2,
    title:'crear componentes angualar',
    hours: 7
  },
  {
    id:3,
    title:'crear componentes angualar',
    hours: 7
  }
]
}
