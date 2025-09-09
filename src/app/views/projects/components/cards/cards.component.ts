import { Component } from '@angular/core';

// Componentes
import { ScrollArrowComponent } from "../../../../shared/scroll-arrow/scroll-arrow.component";

// Services
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-cards',
  imports: [ScrollArrowComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  
  filterActive = 'Todos';

  cards = [
    { title: 'Proyecto 1', type: 'Frontend', images: [
      { src: 'images/gallery4.jpg', alt: 'img' },
      { src: 'images/gallery5.png', alt: 'img' },
      { src: 'images/gallery4.jpg', alt: 'img' },
    ],
    currentIndex: 0 },
    { 
      title: 'Proyecto 2', type: 'Backend', images: [
        { src: 'images/gallery4.jpg', alt: 'img' },
        { src: 'images/gallery5.png', alt: 'img' },
        { src: 'images/gallery4.jpg', alt: 'img' },
      ],
      currentIndex: 0 
    },
    { title: 'Proyecto 3', type: 'Fullstack', images: [
      { src: 'images/gallery4.jpg', alt: 'img' },
      { src: 'images/gallery5.png', alt: 'img' },
      { src: 'images/gallery4.jpg', alt: 'img' },
    ],
    currentIndex: 0 },
        { title: 'Proyecto 3', type: 'Fullstack', images: [
      { src: 'images/gallery4.jpg', alt: 'img' },
      { src: 'images/gallery5.png', alt: 'img' },
      { src: 'images/gallery4.jpg', alt: 'img' },
    ],
    currentIndex: 0 },
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
