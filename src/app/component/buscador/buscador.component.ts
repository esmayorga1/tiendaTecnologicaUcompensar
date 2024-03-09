import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  searchTerm: string = '';
  constructor(private searchService: SearchService, private productService: ProductsService) { }

  search(query: string) {
    this.productService.getProduct().subscribe(products => {
      const searchTermLower = query.toLowerCase();

     
      const searchResults = searchTermLower
        ? products.filter(product =>
            product.Nombre.toLowerCase().includes(searchTermLower) ||
            product.categoria.some(category => category.toLowerCase().includes(searchTermLower))
          )
        : products;

      this.searchService.updateResults(searchResults);
    });
  }


}
