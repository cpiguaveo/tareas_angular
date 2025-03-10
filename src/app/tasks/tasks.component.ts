import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  //@Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksServices: TasksService) {}

  get selectedUserTasks() {
    return this.tasksServices.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
