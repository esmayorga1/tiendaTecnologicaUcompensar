import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
    selector: 'app-tabla-productos',
    standalone: true,
    templateUrl: './tabla-productos.component.html',
    styleUrl: './tabla-productos.component.css',
    imports: [NgFor, FormsModule, RouterLink, HeaderAdminComponent]
})
export class TablaProductosComponent implements OnInit {
  product: Product[] = [];
  productSub: Subscription | undefined;
  selectedProduct: Product | null = null;
  producto: any | undefined;
  

  constructor(private productService: ProductsService) {}

 

  ngOnInit(): void {

    this.productSub = this.productService.getProduct().subscribe({
      next: (products: any[]) => {
        this.product = products;
        console.log(this.product);
      
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('completado');
      },
    });

    
    
    }

    

    deleteProduct(productId: string){

      this.productService.deleteProduct(productId).subscribe((data) => {
        console.log("Producto Eliminado Correctamente");
      });

      const productIndex = this.product.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
          this.product.splice(productIndex, 1); 
        }
    
  }

  // // Método para manejar la edición
  // onEditClick2(productId: string): void {
  // // Llamar al servicio para obtener los datos del producto por ID
  // this.productService.getProductById(productId).subscribe({
  // next: (product: Product) => {
  // // Asignar los datos del producto a la propiedad selectedProduct
  // this.selectedProduct = product;
  // console.log(this.selectedProduct)
  // },
  // error: (err: any) => {
  // console.error(err);
  // }
  // });
  // }

  // onEditClick(productId: string): void {
  // const foundProduct = this.product.find(product => product.ID === productId);
  // console.log(foundProduct);

  // if (foundProduct) {
  // // Asigna los datos del producto al formulario
  // this.formData.nombre_producto = foundProduct.Nombre;
  // this.formData.descripcion = foundProduct.Descripcion;
  // this.formData.marca = foundProduct.Marca ? foundProduct.Marca : '';
  // this.formData.precio_venta = foundProduct.PrecioVenta ? foundProduct.PrecioVenta : 0;
  // this.formData.precio_regular = foundProduct.PrecioRegular ? foundProduct.PrecioRegular : 0;
  // this.formData.categoria = foundProduct.categoria ? foundProduct.categoria : [];
  // this.formData.imagen = foundProduct.imagUrl ? foundProduct.imagUrl : [];
  // this.formData.id = foundProduct.ID ? foundProduct.ID: ''
  // this.formData.fecha = foundProduct.FechaLanzamiento ? foundProduct.FechaLanzamiento: new Date("2024-02-01")

  // }
  // }
}
