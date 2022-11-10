import { Component } from '@angular/core';

@Component({
  selector: 'to-do',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: any = [1,2,3];

  addItem() {
    this.todos.push(4);
    console.log(this.todos);
  }
}
