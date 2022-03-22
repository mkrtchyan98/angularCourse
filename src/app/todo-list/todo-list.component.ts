import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor() {}
  @Input()
  todos!: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
