import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  todos: Todo[] = [    
    {id:1, name:'todo_first', created_at: new Date()},
  {id:2, name:'todo_second', created_at: new Date()}
];


  constructor(
  ) {

  }

  public ngOnInit() {
  }

  onAddTodo(name: string) {

    this.todos.unshift({
      id:this.todos.length + 1,
      name: name,
      created_at: new Date()
    });
  }

  onRemoveTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}