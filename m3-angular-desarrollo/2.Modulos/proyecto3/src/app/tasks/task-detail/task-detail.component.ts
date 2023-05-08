import { Component } from '@angular/core';
import { ITask } from '../task.model';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  //hay un solo objeto
  fontColor: string ='red';
  idSize: string = "17px";
  task: ITask = {
    id: 1,
    title: 'modulos con angular',
    hours: 5
  }
}
