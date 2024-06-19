import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterModule } from './pages/footer/footer.module';


import { RouterModule } from '@angular/router';
import { NavbarModule } from './pages/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { ProyectosModule } from './pages/proyectos/proyectos.module';
import { SkillsModule } from './pages/skills/skills.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FooterModule,
    NavbarModule,
    HomeModule,
    ProyectosModule,
    SkillsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
