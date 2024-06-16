import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  showTextBrillo = false;
  showTextTutto = false;
  showTextStable = false;

  toggleTextBrillo() {
    this.showTextBrillo = !this.showTextBrillo;
  }
  toggleTextTutto() {
    this.showTextTutto = !this.showTextTutto;
  }
  toggleTextStable() {
    this.showTextStable = !this.showTextStable;
  }
}
