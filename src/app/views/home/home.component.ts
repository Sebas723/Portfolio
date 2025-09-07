import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
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
