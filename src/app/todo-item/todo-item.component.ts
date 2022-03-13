import { Component, OnInit,  Input, Output, EventEmitter, ChangeDetectionStrategy,ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Todo } from "../todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  editable = false;

 
  @Input()
  todo!: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  constructor(private cdr: ChangeDetectorRef) {

  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }


  saveTodo(name: string) {
    this.cdr.detectChanges();

    if (!name) return;
    this.editable = false;
    this.todo.name = name;
  }

}
