import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor='let td of todos'>
        <a routerLink="/{{td.id}}">
            {{td.task}}
        </a>
      </li>
    </ul>

    <hr/>

    <h2>Template form</h2>
    <form #f="ngForm" (ngSubmit)="formSubmit(f.value)">
      <input ngModel type="text" name="task" placeholder="task description"/>

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

  formSubmit(value: JSON){
    console.log(value);
    this.todoService.createTodo(value);
  }

}
