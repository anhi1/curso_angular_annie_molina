import { Component } from '@angular/core';
interface Task {
    title: string;
    done: boolean;
}
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    tasks: Task[] = [
        { title: 'Tarea 1', done: false },
        { title: 'Tarea 2', done: true },
    ];
    newTaskTitle = '';
    addTask(): void {
        if (this.newTaskTitle.trim()) {
            this.tasks.push({ title: this.newTaskTitle, done: false });
            this.newTaskTitle = '';
        }
    }
    removeTask(index: number): void {
        this.tasks.splice(index, 1);
    }
}