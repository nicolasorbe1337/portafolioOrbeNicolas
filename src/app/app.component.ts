import { Component, HostListener, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  private target: HTMLElement | null = null;
  ngOnInit(): void {
    initFlowbite();
    this.target = document.getElementById('animate-me');
    this.handleScroll(); // Llama la función por si ya está en la vista
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    if (this.target && this.isInViewport(this.target)) {
      this.target.classList.add('zoom-in');
      this.target.classList.remove('opacity-0'); // Para que sea visible al empezar la animación
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
