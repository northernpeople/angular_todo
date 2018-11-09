import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get("http://localhost:8080/todo");
  }

  getTodo(id: String){
    return this.http.get(`http://localhost:8080/todo/${id}`);
  }

  createTodo(task: String){
    let response = this.http.post(
      `http://localhost:8080/todo/`, 
      JSON.stringify({'task' : task}));
    response.subscribe(r => console.log(r));
  }
}
