import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

//Interfaces
import { Navbar } from '../../models/Navbar';

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
  navbarItems: Navbar[] = [
    { 
      navbarOptions: [
        { id: 1, name: 'Inicio', sectionId: 'home' },
        { id: 2, name: 'Experiencia', sectionId: 'experience' },
        { id: 3, name: 'Proyectos', sectionId: 'projects' },
        { id: 4, name: 'Acerca de mí', sectionId: 'about-me' },
        { id: 5, name: 'Habilidades', sectionId: 'skills' },
      ],
      navbarIcons: [
        { id: 1, icon: 'pi pi-linkedin', link: 'https://www.linkedin.com/in/sebastian-ramirez-henao-169885314/' },
        { id: 2, icon: 'pi pi-github', link: 'https://github.com/Sebas723' },
      ]
    },
  ];

  // Evento para abrir menú dropdown
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Funcion para cerrar menú dropdown
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

  // Funcion para desplazarse a la sección indicada en el home-page
  scrollTo(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
