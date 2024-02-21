import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header-categorias',
  standalone: true,
  imports: [],
  templateUrl: './header-categorias.component.html',
  styleUrl: './header-categorias.component.css'
})
export class HeaderCategoriasComponent {

    constructor(private searchService: SearchService) {}

    filterByCategory(category: string) {
      this.searchService.filterByCategory(category);
    }



}
