import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { TodoComponent } from './app/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
