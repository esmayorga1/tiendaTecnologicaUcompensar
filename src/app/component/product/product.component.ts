import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { NgFor, NgIf } from '@angular/common';
import { ComentariosComponent } from "../comentarios/comentarios.component";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [NgFor, ComentariosComponent, NgIf]
})
export class ProductComponent implements OnInit, OnDestroy {
  id: string | undefined

  product: Product | undefined;
  productSub: Subscription | undefined


  galeria: Array<any> = []
  renderGaleria: Boolean = true

  currentImg: string | undefined



  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    // console.log(this.route)

    this.id = this.route.snapshot.params['id']

    this.productSub = this.productService.getProduct().subscribe({
      next: (product: Product[]) => {

        this.product = product.filter(p => p.id === this.id)[0]
        this.currentImg = this.product.imagUrl[0]
      },
      error: (err: any) => {
        console.error(err)
      }

    })

  }

  cambioImg(itemImg: string){
    this.currentImg = itemImg
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
    
}

}
