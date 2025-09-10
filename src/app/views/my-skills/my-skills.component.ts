import { Component } from '@angular/core';

// Componentes
import { ScrollArrowComponent } from "../../shared/scroll-arrow/scroll-arrow.component";

// Interfaces
import { Skills } from "../../models/Skills";

@Component({
  selector: 'app-my-skills',
  imports: [ScrollArrowComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.css'
})
export class MySkillsComponent {

  skillCards: Skills[] = [
    { 
      id: 1,
      title: 'Frontend', 
      tecnologies: [
        { name: 'HTML', path: 'icons/front/html-5-svgrepo-com.svg' },
        { name: 'CSS', path: 'icons/front/css-svgrepo-com.svg' },
        { name: 'JavaScript', path: 'icons/front/javascript-svgrepo-com.svg' },
        { name: 'Tailwind', path: 'icons/front/tailwindcss-icon-svgrepo-com.svg' },
        { name: 'Angular', path: 'icons/front/angular-icon-svgrepo-com.svg' },
        { name: 'PrimeNG', path: 'icons/front/primeng-svgrepo-com.svg' },
        { name: 'PrimeFlex', path: 'icons/front/primeflex-svgrepo-com.svg' },
      ] 
    },
        { 
      id: 2,
      title: 'Backend', 
      tecnologies: [
        { name: 'PostgreSQL', path: 'icons/back/postgresql-svgrepo-com.svg' },
        { name: 'MySQL', path: 'icons/back/mysql-svgrepo-com.svg' },
      ] 
    },
    { 
      id: 3,
      title: 'Herramientas', 
      tecnologies: [
        { name: 'Git', path: 'icons/tools/git-svgrepo-com.svg' },
        {  name: 'GitHub', path: 'icons/tools/github-svgrepo-com.svg' },
        { name: 'VSCode', path: 'icons/tools/vscode-svgrepo-com.svg' },
        { name: 'Xampp', path: 'icons/tools/xampp-svgrepo-com.svg' },
        { name: 'Postman', path: 'icons/tools/postman-icon-svgrepo-com.svg' },
      ] 
    },
    { 
      id: 4,
      title: 'Aprendiendo', 
      tecnologies: [
        { name: 'Java', path: 'icons/learning/java-svgrepo-com.svg' },
        { name: 'C#', path: 'icons/learning/csharp-svgrepo-com.svg' },
        { name: 'SpringBoot', path: 'icons/learning/spring-boot-svgrepo-com.svg' },
        { name: 'IntelliJ IDEA', path: 'icons/learning/intellij-idea-svgrepo-com.svg' },
      ] 
    },
  ]
}
