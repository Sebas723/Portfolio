import { Component } from '@angular/core';

// Componentes
import { FiltersComponent } from "./components/filters/filters.component";
import { CardsComponent } from "./components/cards/cards.component";

// Services
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-projects',
  imports: [FiltersComponent, CardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
}
