import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todo-list',
  template: `
    <p>
      {{todos.length}} todos
    </p>


    <ul>
    <li *ngFor='let td of todos'>
      {{td.task}}
    </li>
  </ul>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {
      // <h2><a routerLink="/user/{{user.id}}"> {{user.name}}</a></h2>

  todos: Object;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => this.todos = todos);
  }

}
