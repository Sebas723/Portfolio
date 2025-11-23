import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ScrollArrowComponent } from "../../../../shared/scroll-arrow/scroll-arrow.component";

// Services
import { FilterService } from '../../services/filter.service';

// Interfaces
import { Projects } from '../../../../models/Projects';
import { ModalCardComponent } from "./modal-card/modal-card.component";

@Component({
  selector: 'app-cards',
  imports: [ScrollArrowComponent, ModalCardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  
  filterActive = 'Todos';
  selectedCard: Projects | null = null;

  cards: Projects[] = [
    {
      id: 1, 
      type: 'Fullstack',
      status: 'En desarrollo',
      github: 'https://github.com/Sebas723/Emprendev-Angular',
      images: [
        { src: 'images/emprendev/image1.png', alt: 'img-emprendev-home' },
        { src: 'images/emprendev/image3.png', alt: 'img-emprendev-catalog' },
        { src: 'images/emprendev/image4.png', alt: 'img-emprendev-create-offer' },
      ],
      title: 'Emprendev', 
      description: `
        Emprendev es una solución que conecta a mipymes con desarrolladores, creando un espacio
        donde las pequeñas y medianas empresas pueden publicar ofertas laborales y los 
        profesionales de tecnología mostrar sus perfiles.`,
      tecnologies: [
        { name: 'Angular', link: 'https://angular.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
        { name: 'SpringBoot', link: 'https://spring.io/projects/spring-boot' },
        { name: 'MariaDB', link: 'https://mariadb.org/' },
        { name: 'PhpMyAdmin', link: 'https://www.phpmyadmin.net/' },
        { name: 'XAMPP', link: 'https://www.apachefriends.org/es/index.html' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ],
      currentIndex: 0 
    },
    {
      id: 2, 
      type: 'Frontend',
      status: 'Terminado',
      images: [
        { src: 'images/SAGA/no-disponible.jpg', alt: 'img-no-disponible' },
      ],
      title: 'SAGA', 
      description: `
        SAGA es una iniciativa interna de Tata Consultancy Services diseñada para optimizar la recolección
        y visualización de la información de los asociados. Anteriormente, este proceso se realizaba mediante
        archivos de Excel, lo que dificultaba el acceso a la información, reducía su claridad y aumentaba el riesgo de pérdida de datos.`,
      tecnologies: [
        { name: 'Angular', link: 'https://angular.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'PrimeNG', link: 'https://primeng.org/' },
        { name: 'PrimeFlex', link: 'https://primeflex.org/' },
        { name: 'SpringBoot', link: 'https://spring.io/projects/spring-boot' },
        { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ],
      currentIndex: 0 
    },
    {
      id: 3, 
      type: 'Fullstack',
      status: 'Terminado',
      images: [
        { src: 'images/NOVA/no-disponible.jpg', alt: 'img-no-disponible' },
      ],
      title: 'NOVA', 
      description: ` 
        El objetivo del proyecto es centralizar múltiples aplicaciones bancarias junto con sus respectivas reglas de negocio, 
        permitiendo a los equipos de desarrollo visualizar, crear, desactivar y editar dichas reglas de forma sencilla y en tiempo real.`,
      tecnologies: [
        { name: 'Angular', link: 'https://angular.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'PrimeNG', link: 'https://primeng.org/' },
        { name: 'PrimeFlex', link: 'https://primeflex.org/' },
        { name: 'AWS Cognito', link: 'https://aws.amazon.com/es/cognito/' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ],
      currentIndex: 0 
    },
  ];

  constructor(private filterService: FilterService) { 
    this.filterService.filter$.subscribe(value => this.filterActive = value);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.cards.forEach(card => {
        card.currentIndex = (card.currentIndex + 1) % card.images.length;
      });
    }, 6000);
  }

  get filteredCards(): Projects[] {
    return this.filterActive === 'Todos'
      ? this.cards
      : this.cards.filter(c => c.type === this.filterActive);
  }

  nextImage(card: any): void {
    card.currentIndex = (card.currentIndex + 1) % card.images.length;
  }

  prevImage(card: any): void {
    card.currentIndex =
      (card.currentIndex - 1 + card.images.length) % card.images.length;
  }

  openModal(card: Projects): void {
    this.selectedCard = card;
    document.documentElement.classList.add('overflow-hidden');
  }

  closeModal() {
    this.selectedCard = null;
    document.documentElement.classList.remove('overflow-hidden');
  }
}
