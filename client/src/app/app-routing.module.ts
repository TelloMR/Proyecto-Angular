import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosListComponent } from './components/motos-list/motos-list.component';
import { MotoFormComponent } from './components/moto-form/moto-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/motos',
    pathMatch: 'full'
  },
  {
    path: 'motos',
    component: MotosListComponent
  },
  {
    path: 'motos/add',
    component: MotoFormComponent
  },
  {
    path: 'motos/edit/:id',
    component: MotoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
