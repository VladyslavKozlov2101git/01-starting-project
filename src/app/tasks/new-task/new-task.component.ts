import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({
    required: true,
  })
  userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() addNew = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSumamry = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSumamry,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
