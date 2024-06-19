import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent,
    children:[
      {path: '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {path: 'proyectos',
      loadChildren: () => import('./pages/proyectos/proyectos.module').then(m => m.ProyectosModule) },
      {path: 'skills',
      loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule) }

    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
