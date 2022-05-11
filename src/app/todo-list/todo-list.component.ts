import {
  Component,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos = ['1','2','3'];
  timeoutId: ReturnType<typeof setInterval> 
 
  ngOnInit() {
    this.addTodos();
    this.timeoutId = setInterval(() => {
      this.addTodos(); 
    },500);
  }
  
  ngOnDestroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId);
    }
  }

  addTodos() {
    this.todos.push(
     uuidv4(),
    );
  }
}
