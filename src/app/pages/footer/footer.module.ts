import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent
  ],
  imports: [ CommonModule, BrowserModule,
    RouterModule],
  exports: [FooterComponent],
  providers: [],
})
export class FooterModule {}
