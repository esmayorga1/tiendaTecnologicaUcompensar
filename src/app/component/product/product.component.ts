import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Observable, Subscription, catchError, map, of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ComentariosComponent } from "../comentarios/comentarios.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [NgFor, ComentariosComponent, NgIf, NgClass ]
})
export class ProductComponent implements OnInit, OnDestroy {
  id: string = '0'

  product: any;
  productSub: Subscription | undefined


  galeria: Array<any> = []
  renderGaleria: Boolean = true

  currentImg: string | undefined
  item: number = 0
  itemImg: any


  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    // console.log(this.route)

    this.id = this.route.snapshot.params['id']
    console.log(this.id)

    this.getProduct(this.id).subscribe((data) =>{
      console.log(data)
      this.product = data
      this.currentImg = this.product.ImagenProductos[this.item].UrlImagen
      this.itemImg = this.currentImg;

      console.log(this.currentImg)
      
    })



    // this.productSub = this.productService.getProduct().subscribe({
      // next: (product: Product[]) => {

        // this.product = product.filter(p => p.id === this.id)[0]
        // console.log(this.product)
        // this.currentImg = this.product.imagUrl[0]
        // this.currentImg = this.pro
      // },
      // error: (err: any) => {
        // console.error(err)
      // }

    // })

  }

  cambioImg(itemImg: string){
  
    this.currentImg = itemImg
  }


  getProduct(id: string): Observable<Product | null> {
    return this.productService.getProductById(id).pipe(
      catchError((error) => {
        console.error('Error fetching producto:', error);
        return of(null);
      }),
      map((data) => {
        if (data) {
          return data as Product;
        } else {
          console.warn('Producto con ', id, 'No fue encontrado');
          return null;
        }
      })
    );
  }
  

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
    
}

}
