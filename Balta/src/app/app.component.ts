import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OpenERX';
  public todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo(1, false, 1));
    this.todos.push(new Todo(2, true, 2));
    this.todos.push(new Todo(3, true, 3));
    this.todos.push(new Todo(4, true, 4));
    this.todos.push(new Todo(5, true, 5));
    this.todos.push(new Todo(6, false, 6));
    this.todos.push(new Todo(7, true, 7));
    this.todos.push(new Todo(8, false, 8));
  }
}
