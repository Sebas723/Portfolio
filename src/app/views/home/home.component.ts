import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollArrowComponent } from "../../shared/scroll-arrow/scroll-arrow.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ScrollArrowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  orbits = [
    { animation: 'animate-spin-slow' },
    { animation: 'animate-spin-reverse' },
    { animation: 'animate-spin-fast' },
    { animation: 'animate-spin-reverse-fast' },
    { animation: 'animate-spin-fast-1' },
    { animation: 'animate-spin-reverse-fast-1' },
    { animation: 'animate-spin-fast-2' },
    { animation: 'animate-spin-reverse-fast-2' }
  ]
}
