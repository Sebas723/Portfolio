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
      company: 'Example', 
      startDate: 'Enero', 
      endDate:'Presente', 
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ab earum nemo natus soluta fuga pariatur
        totam laudantium repudiandae perferendis suscipit ullam voluptas et quasi ad accusamus impedit eaque rem 
        fugit aperiam praesentium facere corporis possimus! Veritatis vitae at harum minus numquam quidem possimus 
        unde explicabo amet officia neque dolor, tempora cumque optio nisi dolores maiores? Ducimus sunt voluptatem, 
        aliquid voluptatibus commodi dolore repellat natus, magni optio beatae nulla quaerat similique neque ipsam 
        consequatur impedit nisi quam eveniet eius! Odit at recusandae optio architecto doloremque quisquam modi 
        molestias nobis in eius, veritatis ducimus nostrum ea illo dolore repudiandae. Alias, ratione?`
      ,
      technologies: [
        { name: 'HTML', link: '' },
        { name: 'CSS', link: '' },
        { name: 'TypeScript', link: '' },
      ] 
    },
    { 
      id: 2,
      position: 'Desarrollador de software', 
      company: 'Example', 
      startDate: 'Enero', 
      endDate:'Presente', 
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ab earum nemo natus soluta fuga pariatur
        totam laudantium repudiandae perferendis suscipit ullam voluptas et quasi ad accusamus impedit eaque rem 
        fugit aperiam praesentium facere corporis possimus! Veritatis vitae at harum minus numquam quidem possimus 
        unde explicabo amet officia neque dolor, tempora cumque optio nisi dolores maiores? Ducimus sunt voluptatem, 
        aliquid voluptatibus commodi dolore repellat natus, magni optio beatae nulla quaerat similique neque ipsam 
        consequatur impedit nisi quam eveniet eius! Odit at recusandae optio architecto doloremque quisquam modi 
        molestias nobis in eius, veritatis ducimus nostrum ea illo dolore repudiandae. Alias, ratione?`
      ,
      technologies: [
        { name: 'HTML', link: '' },
        { name: 'CSS', link: '' },
        { name: 'TypeScript', link: '' },
      ] 
    },
    { 
      id: 3,
      position: 'Desarrollador de software', 
      company: 'Example', 
      startDate: 'Enero', 
      endDate:'Presente', 
      description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ab earum nemo natus soluta fuga pariatur
        totam laudantium repudiandae perferendis suscipit ullam voluptas et quasi ad accusamus impedit eaque rem 
        fugit aperiam praesentium facere corporis possimus! Veritatis vitae at harum minus numquam quidem possimus 
        unde explicabo amet officia neque dolor, tempora cumque optio nisi dolores maiores? Ducimus sunt voluptatem, 
        aliquid voluptatibus commodi dolore repellat natus, magni optio beatae nulla quaerat similique neque ipsam 
        consequatur impedit nisi quam eveniet eius! Odit at recusandae optio architecto doloremque quisquam modi 
        molestias nobis in eius, veritatis ducimus nostrum ea illo dolore repudiandae. Alias, ratione?`
      ,
      technologies: [
        { name: 'HTML', link: '' },
        { name: 'CSS', link: '' },
        { name: 'TypeScript', link: '' },
      ] 
    },
  ];
}
