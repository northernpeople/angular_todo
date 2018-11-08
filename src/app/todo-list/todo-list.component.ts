import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-todo-list',
  template: `
   
    <mat-card class="example-card" *ngFor='let td of todos'>
    <a routerLink="/{{td.id}}">
      <mat-card-header>
        {{td.task}}
      </mat-card-header>
    </a>
    </mat-card>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {
      // <h2><a routerLink="/user/{{user.id}}"> {{user.name}}</a></h2>

  todos: any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => this.todos = todos);
  }

}
