import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  createTodo(task: JSON){

    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    let response = this.http.post(
      `http://localhost:8080/todo/`, 
       task,
       {headers: headers});
    response.subscribe(r => console.log(r));
  }
}
