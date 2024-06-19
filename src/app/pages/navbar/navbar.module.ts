import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [ CommonModule, BrowserModule, RouterModule],
  exports: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
