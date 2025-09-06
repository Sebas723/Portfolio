import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

//Interfaces
import { NavbarTemplate } from '../../models/NavbarTemplate';

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

  //Navbar
  navbarItems: NavbarTemplate[] = [
    { 
      navbarOptions: [
        { id: 1, name: 'Inicio', sectionId: '' },
        { id: 2, name: 'Experiencia', sectionId: '' },
        { id: 3, name: 'Proyectos', sectionId: '' },
        { id: 4, name: 'Acerca de mi', sectionId: '' },
        { id: 5, name: 'Contacto', sectionId: '' }
      ],
      navbarIcons: [
        { id: 1, icon: 'pi pi-linkedin', link: '' },
        { id: 2, icon: 'pi pi-github', link: '' },
        { id: 3, icon: 'pi pi-github', link: '' },
        { id: 4, icon: 'pi pi-linkedin', link: '' },
      ]
    },
  ];

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
