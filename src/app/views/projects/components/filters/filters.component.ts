import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  
  filterActive = 'Todos';

  filter = [
    { name: 'Todos', value: 'Todos' },
    { name: 'Frontend', value: 'Frontend' },
    { name: 'Backend', value: 'Backend' },
    { name: 'Fullstack', value: 'Fullstack' }
  ]

  constructor(private filterService: FilterService) {
    this.filterService.filter$.subscribe(value => this.filterActive = value);
   }

  togleFilter(filter: string) {
    this.filterService.setFilter(filter);
  }
}
