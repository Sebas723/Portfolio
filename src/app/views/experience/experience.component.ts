import { Component } from '@angular/core';

//Componentes
import { ScrollArrowComponent } from "../../shared/scroll-arrow/scroll-arrow.component";

//Interfaces
import { Experience } from "../../models/Experience";

@Component({
  selector: 'app-experience',
  imports: [ScrollArrowComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  //Datos de la experiencia
  experience: Experience[] = [
    { 
      id: 1,
      position: 'Desarrollador de software', 
      company: 'Tata Consultancy Services', 
      startDate: 'Octubre 2024',
      endDate:'Enero 2025', 
      description: `
        Participé en el proyecto <span class="text-blue-300">SAGA</span>, una <span class="text-blue-300">plataforma interna para centralizar y visualizar datos</span> del equipo, 
        desempeñando el rol de <span class="text-blue-300">desarrollador frontend con apoyo en backend</span>. 
        Me enfoqué en el <span class="text-blue-300">diseño y mejora de la interfaz de usuario</span> utilizando Angular, PrimeNG y PrimeFlex, 
        aplicando principios de Clean Code para crear <span class="text-blue-300">componentes modulares, reutilizables y con un diseño 
        UX/UI limpio</span>, además de apoyar en la integración con el backend desarrollado en Spring Boot y PostgreSQL. 
        Trabajé dentro de un equipo ágil bajo el marco <span class="text-blue-300">SCRUM, participando activamente en ceremonias como daily 
        stand-ups, sprint planning y retrospectivas</span>, y consolidé experiencia en el uso de tecnologías como Angular 
        18, TypeScript, PrimeNG, PrimeFlex, SCSS, Spring Boot, PostgreSQL, Git y GitHub en un entorno colaborativo y 
        orientado a la entrega continua de valor.`
      ,
      technologies: [
        { name: 'Angular', link: 'https://angular.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'PrimeNG', link: 'https://primeng.org/' },
        { name: 'PrimeFlex', link: 'https://primeflex.org/' },
        { name: 'CSS', link: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        { name: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
        { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ]
    },
    { 
      id: 2,
      position: 'Desarrollador de software', 
      company: 'Tata Consultancy Services',
      startDate: 'Enero 2025', 
      endDate:'Abril 2025', 
      description: `
        Participé en la <span class="text-blue-300">ideación y diseño</span> del proyecto <span class="text-blue-300">NOVA</span>, 
        una herramienta para la gestión de reglas de negocio en aplicaciones bancarias con acceso centralizado y 
        edición de reglas. Durante la  fase de desarrollo asumí un rol principalmente de frontend, donde implementé y optimicé módulos
        funcionales de la interfaz de usuario con Angular, aplicando principios de Clean Code y 
        priorizando la escalabilidad y mantenibilidad del sistema. En colaboración con el equipo, 
        trabajamos en la integración de un sistema de <span class="text-blue-300">autenticación passwordless mediante AWS Cognito</span>, 
        gestionado a través de <span class="text-blue-300">Flask</span>, lo que permitió fortalecer la seguridad del acceso sin necesidad 
        de contraseñas tradicionales. Además, participé activamente en un entorno ágil bajo el marco <span class="text-blue-300">SCRUM</span>, 
        contribuyendo en sesiones de planeación colaborativa y ceremonias de equipo, y <span class="text-blue-300">consolidé experiencia 
        con tecnologías como Angular 19, TypeScript, PrimeNG, PrimeFlex, CSS, PostgreSQL, 
        Git y GitHub</span> en un contexto de desarrollo colaborativo y orientado a la entrega continua de valor.`
      ,
      technologies: [
        { name: 'Angular', link: 'https://angular.dev/' },
        { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { name: 'PrimeNG', link: 'https://primeng.org/' },
        { name: 'PrimeFlex', link: 'https://primeflex.org/' },
        { name: 'CSS', link: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        { name: 'Flask', link: 'https://flask.palletsprojects.com/en/stable/' },
        { name: 'PostgreSQL', link: 'https://www.postgresql.org/' },
        { name: 'AWS Cognito', link: 'https://aws.amazon.com/es/cognito/' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ] 
    },
    { 
      id: 3,
      position: 'Analista y Desarrollador de software', 
      company: 'Servicio Nacional de aprendizaje (SENA)',
      startDate: 'Enero 2021', 
      endDate:'Abril 2025', 
      description: `
        Durante mi formación adquirí una base sólida en el <span class="text-blue-300">desarrollo de software</span> y
        la <span class="text-blue-300">gestión de proyectos tecnológicos</span>, aprendiendo a diseñar, construir y evaluar
        soluciones informáticas de acuerdo con las necesidades del negocio. Desarrollé
        habilidades en <span class="text-blue-300">HTML, CSS, JavaScript, Python, MySQL Workbench, PhpMyAdmin, 
        XAMPP y Postman</span>, además de entender profundamente <span class="text-blue-300">metodologías ágiles como Kanban y Scrum</span> 
        para la gestión de proyectos. Complementé mi aprendizaje con el uso de <span class="text-blue-300">diagramas UML</span> 
        para el modelado de sistemas, así como con técnicas de <span class="text-blue-300">recolección y análisis
        de información del negocio </span> que me permitieron conectar los requerimientos de los 
        usuarios con la construcción de soluciones efectivas. Aunque no corresponde a una
        experiencia laboral en un entorno empresarial, considero importante mencionarla 
        porque fue una etapa <span class="text-blue-300">muy valiosa y educativa</span> en mi desarrollo profesional.`
      ,
      technologies: [
        { name: 'HTML', link: 'https://developer.mozilla.org/es/docs/Web/HTML' },
        { name: 'CSS', link: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        { name: 'JavaScript', link: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
        { name: 'Python', link: 'https://www.python.org/' },
        { name: 'MySQL Workbench', link: 'https://www.mysql.com/' },
        { name: 'PhpMyAdmin', link: 'https://www.phpmyadmin.net/' },
        { name: 'XAMPP', link: 'https://www.apachefriends.org/es/index.html' },
        { name: 'Postman', link: 'https://www.postman.com/' },
        { name: 'Git', link: 'https://git-scm.com/' },
        { name: 'GitHub', link: 'https://github.com/' },
      ] 
    },
  ];
}
