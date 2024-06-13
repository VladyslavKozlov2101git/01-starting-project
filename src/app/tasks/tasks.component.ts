import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({
    required: true,
  })
  userId!: string;
  @Input({
    required: true,
  })
  name?: string;

  isAddingTask = false;

  get selectedUserTasks() {
    return null;
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelTaskHandler() {
    this.isAddingTask = false;
  }
  onAddTaskHandler(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
