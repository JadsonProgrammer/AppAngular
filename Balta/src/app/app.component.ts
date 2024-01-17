import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public todos: Todo[] = [];
  public form: FormGroup;


  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.todos.push(new Todo("Programar".toUpperCase(), true, 1));
    this.todos.push(new Todo("Malhar".toUpperCase(), true, 2));
    this.todos.push(new Todo("Mercado".toUpperCase(), false, 3));
    this.todos.push(new Todo("Banho no Cachorro".toUpperCase(), false, 4));
    this.todos.push(new Todo("Lavar roupa".toUpperCase(), false, 5));
    this.todos.push(new Todo("Barba".toUpperCase(), true, 6));
    this.todos.push(new Todo("Cabelo".toUpperCase(), true, 7));
    this.todos.push(new Todo("Pano na casa".toUpperCase(), false, 8));
  }
  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1)
    }

  }
  markAsDone(todo: Todo) {
    todo.done = true;

  }

  markAsUndone(todo: Todo) {
    todo.done = false;

  }
  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(title, false, id));
    this.clear();
  }
  clear() {
    this.form.reset();
  }










}
