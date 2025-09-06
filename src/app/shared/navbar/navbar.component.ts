import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  isScrolled: boolean = false;
  
  isSidebarOpen = false;

  //Variable para controlar el estado del menú dropdown
  menuOpen = false;

  // Evento para abrir menú dropdown
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Evento para cerrar menú dropdown
  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log(this.isSidebarOpen, 'me ejecute');
  }
}
