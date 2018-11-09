import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor='let td of todos'>
      <mat-card>
        <a routerLink="/{{td.id}}">
          <mat-card-header>
            {{td.task}}
          </mat-card-header>
        </a>
      </mat-card>
      </li>
    </ul>


    <hr/>
    <form #f="ngForm" (ngSubmit)="formSubmit(f.value)">
      <input ngModel type="text" name="todo"  placeholder="task description"/>

      <div ngModelGroup="authorDetails">
        <input ngModel type="text" name="author" placeholder="author name"/>
      </div>

      <button type="submit">Submit</button>
    </form>

    <pre>{{ f.value | json }}</pre>
    
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

  formSubmit(value: Object){
    console.log(value);
    this.todoService.createTodo(value);
  }

}
