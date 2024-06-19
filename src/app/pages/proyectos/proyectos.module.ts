import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: 'proyectos',
    component: ProyectosComponent
  }
]


@NgModule({
  declarations: [ProyectosComponent],
  imports: [ CommonModule,
    RouterModule.forChild(routes)  ],
  exports: [ProyectosComponent],
  providers: [],
})
export class ProyectosModule {

}
