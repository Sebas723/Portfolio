import { Component } from '@angular/core';

// Componentes
import { ScrollArrowComponent } from "../../shared/scroll-arrow/scroll-arrow.component";

@Component({
  selector: 'app-about-me',
  imports: [ScrollArrowComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  aboutMeImages = [
    {
      id: 1,
      rotate: '-rotate-[10deg]',
      src: 'images/gallery4.jpg',
      alt: 'img'
    },
    {
      id: 2,
      rotate: 'rotate-12',
      src: 'images/gallery5.png',
      alt: 'img'
    },
    {
      id: 3,
      rotate: '-rotate-[20deg]',
      src: 'images/gallery4.jpg',
      alt: 'img'
    },
  ]
}
