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

  skills = [
    { icon: 'pi pi-code', label: 'Desarrollo Frontend' },
    // { icon: 'pi pi-database', label: 'Desarrollo backend' },
    { icon: 'pi pi-palette', label: 'UI/UX' }
  ]
}
