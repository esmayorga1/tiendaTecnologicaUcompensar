import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { SearchService } from '../../services/search.service';


@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [ProductItemComponent, NgFor, NgIf]
})

export class ProductListComponent implements OnInit, OnDestroy {

    product: Product[] = [];
    productSub: Subscription | undefined
    searchTerm: string = '';

    constructor(private productService: ProductsService, private searchService: SearchService) { }

   /* ngOnInit(): void {
        this.productSub = this.productService.getProduct().subscribe({
            next: (product: Product[]) => {
                this.product = product
                // console.log(this.product)

                if (this.searchTerm.trim() !== '') {
                    this.search();
                  }
            },
            error: (err: any) => {
                console.error(err)
            },
            complete: () => {
                console.log('completado')
            }
        })

        this.searchService.currentResults.subscribe((results) => {
            this.product = results;
          });

    }

    

    ngOnDestroy(): void {
        this.productSub?.unsubscribe();
        
    }

    search() {
        const searchTermLower = this.searchTerm.toLowerCase();
    
        // Filtra los productos solo si hay un término de búsqueda
        const searchResults = searchTermLower
          ? this.product.filter((product) => product.name.toLowerCase().includes(searchTermLower))
          : this.product;
    
        this.searchService.updateResults(searchResults);
      }*/

      ngOnInit(): void {
        this.productSub = this.productService.getProduct().subscribe({
          next: (products: any[]) => {
            this.product = products;
    
            if (this.searchTerm.trim() !== '') {
              this.search();
            }
          },
          error: (err: any) => {
            console.error(err);
          },
          complete: () => {
            console.log('completado');
          }
        });
    
        this.searchService.currentResults.subscribe((results) => {
          this.product = results;
        });
    
        // Realiza la búsqueda inicial al cargar la página
        this.search();
      }
    
      ngOnDestroy(): void {
        this.productSub?.unsubscribe();
      }
 
     

      search() {
        const searchTermLower = this.searchTerm.toLowerCase();
      
        // Filtra los productos solo si hay un término de búsqueda
        const searchResults = searchTermLower
          ? this.product.filter((product) => 
              product.name.toLowerCase().includes(searchTermLower) ||
              product.categoria.some((category: string) => category.toLowerCase().includes(searchTermLower))
            )
          : this.product;
      
        this.searchService.updateResults(searchResults);
      }
}
