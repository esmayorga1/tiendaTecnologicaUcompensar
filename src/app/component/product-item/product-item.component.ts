import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

  @Input() product: any

  ngOnInit(): void {
  
    console.log(this.product)
  }

}
