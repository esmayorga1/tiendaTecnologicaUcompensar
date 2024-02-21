import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent implements OnInit{
product: Product[] = [];
productSub: Subscription | undefined
selectedProduct: Product | null = null;




constructor(private productService: ProductsService){}

// Propiedades para el formulario
formData: {
  id: string;
  nombre_producto: string;
  marca: string;
  descripcion: string;
  precio_venta: number;
  precio_regular: number;
  categoria: string[];
  imagen: string[];
  fecha: Date
} = {
  id: '',
  nombre_producto: '',
  marca: '',
  descripcion: '',
  precio_venta: 0,
  precio_regular: 0,
  categoria:[],
  imagen:[],
  fecha: new Date("2024-02-01")
};

ngOnInit(): void {

    this.productSub = this.productService.getProduct().subscribe({
      next: (products: any[]) => {
        this.product = products; 
       
        const foundProduct = this.product.find(product => product.id === '1')
        console.log(foundProduct)
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('completado');
      }
    });
  
}


// Método para manejar la edición
onEditClick2(productId: string): void {
  // Llamar al servicio para obtener los datos del producto por ID
  this.productService.getProductById(productId).subscribe({
    next: (product: Product) => {
      // Asignar los datos del producto a la propiedad selectedProduct
      this.selectedProduct = product;
      console.log(this.selectedProduct)
    },
    error: (err: any) => {
      console.error(err);
    }
  });
}



onEditClick(productId: string): void {
  const foundProduct = this.product.find(product => product.id === productId);
  console.log(foundProduct);

  if (foundProduct) {
    // Asigna los datos del producto al formulario
    this.formData.nombre_producto = foundProduct.name;
    this.formData.descripcion = foundProduct.description;
    this.formData.marca = foundProduct.marca ? foundProduct.marca : '';
    this.formData.precio_venta = foundProduct.precio_venta ? foundProduct.precio_venta : 0;
    this.formData.precio_regular = foundProduct.precio_regular ? foundProduct.precio_regular : 0;
    this.formData.categoria = foundProduct.categoria ? foundProduct.categoria : [];
    this.formData.imagen = foundProduct.imagUrl ? foundProduct.imagUrl : [];
    this.formData.id = foundProduct.id ? foundProduct.id: ''
    this.formData.fecha = foundProduct.fecha_lanzamiento ? foundProduct.fecha_lanzamiento: new Date("2024-02-01")
   
  }
}

}
