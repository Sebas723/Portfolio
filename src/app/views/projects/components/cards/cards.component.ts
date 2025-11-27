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
      videos: [
        { src: 'videos/emprendev/emprendev_video.mp4'},
      ],
      title: 'Emprendev', 
      description: [
        `Emprendev es una plataforma creada para conectar a mipymes con desarrolladores. Ofrece un espacio donde pequeñas y medianas
        empresas pueden publicar ofertas laborales enfocadas únicamente en el desarrollo de software, y donde los profesionales
        de tecnología pueden mostrar sus perfiles y postularse fácilmente.`,

        `Este proyecto fue mi trabajo de grado. Junto con mi equipo identificamos
        lo difícil que puede ser conseguir la primera oportunidad laboral, especialmente para desarrolladores
        recién graduados o con poca experiencia. Por eso decidimos construir una solución que ayudara a cerrar esa brecha.`,

        `El proyecto original fue desarrollado en HTML, CSS y JavaScript vanilla. Actualmente estoy refactorizando y migrando toda la plataforma
        a Angular, mejorando las vistas y completando el 100% de las funcionalidades para llevar el proyecto legacy a una versión más moderna,
        escalable y bien estructurada.`
      ],
      keyContributions: [
        { contribution: `Desarrollé y optimicé componentes provenientes de un proyecto legacy construido en HTML,
          JavaScript y CSS, migrando sus funcionalidades hacia tecnologías modernas como Angular y Tailwind CSS.` },
      ],
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
      currentIndex: 0,
    },
    {
      id: 2, 
      type: 'Frontend',
      status: 'Terminado',
      images: [
        { src: 'images/SAGA/no-disponible.jpg', alt: 'img-no-disponible' },
      ],
      title: 'SAGA', 
      description: [
        `SAGA es una iniciativa interna de Tata Consultancy Services creada para optimizar la recolección, administración
        y visualización de la información de los asociados. Antes, estos procesos se realizaban mediante archivos de Excel,
        lo que dificultaba el acceso a la información, afectaba la claridad de los datos y aumentaba el riesgo de pérdida.
        Por ello, se planteó el desarrollo de un sistema que solucionara estas necesidades.`,
        
        `Este fue uno de los proyectos en los que participé durante mi etapa práctica. El objetivo principal del equipo
        era migrar el sistema desde una versión antigua de Angular con Angular Material hacia una versión más actualizada
        utilizando PrimeFlex y PrimeNG. Además, contribuimos en la creación y mejora de diversas funcionalidades y vistas
        que no existían previamente o que estaban incompletas.`
      ],
      keyContributions: [
        { contribution: 'Desarrollé y mejoré componentes de interfaz de usuario con Angular, PrimeNG y PrimeFlex, priorizando un diseño UX/UI limpio.' },
        { contribution: 'Apliqué principios de Clean Code y creé componentes modulares y reutilizables para mejorar la escalabilidad y mantenibilidad.' },
        { contribution: 'Apoyé en la integración con el backend utilizando Spring Boot y PostgreSQL.' },
        { contribution: 'Trabajé dentro de un marco ágil SCRUM, participando en daily, sprint planning y retrospectivas.' },
      ],
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
      description: [ 
       `NOVA es una iniciativa interna de Tata Consultancy Services cuyo objetivo es centralizar las reglas de negocio
        de múltiples aplicaciones bancarias. La plataforma permite a los equipos de desarrollo visualizar, 
        crear, desactivar y editar estas reglas en tiempo real, de acuerdo con su rol y nivel de acceso. 
        Con esto, se busca unificar procesos, mejorar la trazabilidad y facilitar la gestión de configuraciones
        entre diferentes aplicaciones.`,

        `Este fue el segundo proyecto en el que participé durante mis prácticas profesionales, y sin duda fue donde
        tuve el aprendizaje más significativo. Nuestro equipo debía encargarse del desarrollo completo del sistema 
        desde cero: planificación, análisis, diseño, construcción y pruebas. Aunque mi participación llegó solo hasta
        ciertas fases del proyecto —principalmente análisis, planificación y desarrollo inicial— todos los retos y obstáculos
        que enfrentamos en estas etapas se convirtieron en aprendizajes valiosos que nos ayudaron a mejorar, afinar procesos y 
        tener en cuenta múltiples aspectos importantes para futuros desarrollos.`
      ],
      keyContributions: [
        { contribution: `Investigué y comparé tecnologías para apoyar decisiones de desarrollo para el proyecto.` },
        { contribution: `Colaboré en el diseño y desarrollo de un sistema de inicio de sesión sin contraseña con AWS Cognito (OTP) y Flask.` },
        { contribution: `Participé en sesiones de planeación colaborativa con líderes de equipo y personal técnico.` },
        { contribution: `Desarrollé módulos funcionales de interfaz utilizando Angular.` },
        { contribution: `Colaboré en un entorno ágil SCRUM.` },
      ],
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
