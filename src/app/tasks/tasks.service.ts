import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master',
      summary: 'Prueba 1',
      dueDate: '20225-12-15',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master',
      summary: 'Prueba 1',
      dueDate: '20225-12-15',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master',
      summary: 'Prueba 2',
      dueDate: '20225-12-29',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master',
      summary: 'Prueba 3',
      dueDate: '20225-12-30',
    },
  ];

  getUserTasks(userId: String) {
    return (this.tasks = this.tasks.filter((task) => task.userId !== userId));
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
