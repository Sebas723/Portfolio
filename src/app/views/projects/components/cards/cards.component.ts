import { Component } from '@angular/core';

// Componentes
import { ScrollArrowComponent } from "../../../../shared/scroll-arrow/scroll-arrow.component";

// Services
import { FilterService } from '../../services/filter.service';

// Interfaces
import { Projects } from '../../../../models/Projects';

@Component({
  selector: 'app-cards',
  imports: [ScrollArrowComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
  filterActive = 'Todos';

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
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'Tailwind CSS' },
        { name: 'SpringBoot' },
        { name: 'MariaDB' },
        { name: 'PhpMyAdmin' },
        { name: 'XAMPP' },
        { name: 'Git' },
        { name: 'GitHub' },
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
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'PrimeNG' },
        { name: 'PrimeFlex' },
        { name: 'SpringBoot' },
        { name: 'PostgreSQL' },
        { name: 'Git' },
        { name: 'GitHub' },
      ],
      currentIndex: 0 
    },
    {
      id: 3, 
      type: 'FullStack',
      status: 'Terminado',
      images: [
        { src: 'images/NOVA/no-disponible.jpg', alt: 'img-no-disponible' },
      ],
      title: 'NOVA', 
      description: ` 
        El objetivo del proyecto es centralizar múltiples aplicaciones bancarias junto con sus respectivas reglas de negocio, 
        permitiendo a los equipos de desarrollo visualizar, crear, desactivar y editar dichas reglas de forma sencilla y en tiempo real.`,
      tecnologies: [
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'PrimeNG' },
        { name: 'PrimeFlex' },
        { name: 'AWS Cognito' },
        { name: 'Git' },
        { name: 'GitHub' },
      ],
      currentIndex: 0 
    },
  ];

  constructor(private filterService: FilterService) { 
    this.filterService.filter$.subscribe(value => this.filterActive = value);
  }

  get filteredCards() {
    return this.filterActive === 'Todos'
      ? this.cards
      : this.cards.filter(c => c.type === this.filterActive);
  }

  ngOnInit() {
    setInterval(() => {
      this.cards.forEach(card => {
        card.currentIndex = (card.currentIndex + 1) % card.images.length;
      });
    }, 6000);
  }

  nextImage(card: any) {
    card.currentIndex = (card.currentIndex + 1) % card.images.length;
  }

  prevImage(card: any) {
    card.currentIndex =
      (card.currentIndex - 1 + card.images.length) % card.images.length;
  }
}
