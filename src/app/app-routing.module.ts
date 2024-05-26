import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  {path: 'proyectos', component: ProyectosComponent },
  {path: 'skills', component: SkillsComponent },
  {path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
