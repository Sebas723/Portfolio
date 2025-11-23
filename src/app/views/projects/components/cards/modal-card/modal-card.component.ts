import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-card',
  imports: [],
  templateUrl: './modal-card.component.html',
  styleUrl: './modal-card.component.css'
})
export class ModalCardComponent {

  @Input() card: any;
  @Output() close = new EventEmitter<void>();

  closeModal(): void{
    this.close.emit();
  }

  nextImage(card: any): void {
    card.currentIndex = (card.currentIndex + 1) % card.images.length;
  }

  prevImage(card: any): void {
    card.currentIndex =
      (card.currentIndex - 1 + card.images.length) % card.images.length;
  }

}
