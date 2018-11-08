import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';


@Component({
  selector: 'app-todo-details',
  template: `
    <p>
      adsf
      {{todo.task}}
    </p>
  `,
  styles: []
})
export class TodoDetailsComponent implements OnInit {

  route: ActivatedRoute;
  service: TodoService;
  todoId: String;
  todo: Object;

  constructor(service: TodoService, route: ActivatedRoute) { 
    this.route = route;
    this.service = service;
    this.route.params.subscribe(params => this.todoId = params.id);
  }

  ngOnInit() {
    this.service.getTodo(this.todoId).subscribe(todo => this.todo = todo);
  }

}
