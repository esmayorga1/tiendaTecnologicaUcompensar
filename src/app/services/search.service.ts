import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchResults = new BehaviorSubject<any[]>([]);
  currentResults = this.searchResults.asObservable();

  constructor(private productService: ProductsService) {
    this.productService.getProduct().subscribe(products => {
      this.searchResults.next(products);
    });
   }

  updateResults(results: any[]) {
    this.searchResults.next(results);
  }

  filterByCategory(category: string) {
    this.productService.getProduct().subscribe(products => {
      const filteredResults = products.filter(product =>
        product.categoria.includes(category)
      );
      this.updateResults(filteredResults);
    });
  }
}
