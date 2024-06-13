import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addNew = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSumamry = '';
  enteredDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.addNew.emit({
      title: this.enteredTitle,
      summary: this.enteredSumamry,
      dueDate: this.enteredDate,
    });
  }
}
