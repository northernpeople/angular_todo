import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent} from './todo-details/todo-details.component';


const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: ':id',
    component: TodoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
