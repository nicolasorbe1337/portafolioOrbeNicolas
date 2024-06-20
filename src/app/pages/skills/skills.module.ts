import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =[
  {
    path: '',
    component: SkillsComponent
  }
]

@NgModule({
  declarations: [SkillsComponent],
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [SkillsComponent],
  providers: [],
})
export class SkillsModule {

}
