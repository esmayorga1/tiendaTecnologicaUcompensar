import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { Observable, Subscription, catchError, map, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule, PlatformLocation } from '@angular/common';
import { HeaderAdminComponent } from "../header-admin/header-admin.component";

@Component({
    selector: 'app-table-product-item',
    standalone: true,
    templateUrl: './table-product-item.component.html',
    styleUrl: './table-product-item.component.css',
    imports: [RouterLink, RouterModule, FormsModule, CommonModule, HeaderAdminComponent]
})
export class TableProductItemComponent implements OnInit {
  formData: {
    id: string;
    nombreProducto: string;
    marca: string;
    descripcion: string;
    precioVenta: number;
    precioRegular: number;
    categoria: string[];
    imagen: string[];
    fecha: Date;
  } = {
    id: '',
    nombreProducto: '',
    marca: '',
    descripcion: '',
    precioVenta: 0,
    precioRegular: 0,
    categoria: [],
    imagen: [],
    fecha: new Date('01-01-2024'),
  };

  id: string = '0';
  product: Product[] = [];
  producto: any | undefined;
  productSub: Subscription | undefined;
  operacion: string | undefined;
  tipoOperacion: string | undefined;
  valor: Product[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private platformLocation: PlatformLocation

  ) {}

  ngOnInit(): void {
    // Suscribirse a cambios en los parámetros de la ruta
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);

      // Verificar si hay un ID válido antes de hacer la solicitud al servicio
      if (this.id !== '0') {
        console.log('Operación editar producto');
        this.operacion = 'Editar Producto';
        this.tipoOperacion = 'Editar'

        // Obtener el producto usando el ID
        this.getProduct(this.id).subscribe((data) => {
          if (data) {
            // Asignar valores al formulario solo si el producto existe
            this.formData.nombreProducto = data.Nombre;
            this.formData.descripcion = data.Descripcion;
            this.formData.marca = data.Marca ? data.Marca : '';
            this.formData.precioVenta = data.PrecioVenta ? data.PrecioVenta : 0;
            this.formData.precioRegular = data.PrecioRegular
              ? data.PrecioRegular
              : 0;
            this.formData.categoria = data.categoria ? data.categoria : [];
            this.formData.imagen = data.imagUrl ? data.imagUrl : [];
            this.formData.id = data.id ? data.id : '';
            this.formData.fecha = data.FechaLanzamiento
              ? data.FechaLanzamiento
              : new Date('2024-02-02');
          } else {
            console.warn('Producto no encontrado con el ID', this.id);
          }
        });
      } else {
        this.operacion = 'Agregar Nuevo Producto';
        this.tipoOperacion = 'Agregar'
      }
    });
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

  addProduct() {
    const product: Product = {
      Nombre: this.formData.nombreProducto,
      Marca: this.formData.marca,
      Descripcion: this.formData.descripcion,
      PrecioRegular: this.formData.precioRegular,
      PrecioVenta: this.formData.precioVenta,
      categoria: this.formData.categoria,
      imagUrl: this.formData.imagen,
      FechaLanzamiento: this.formData.fecha,
    };

    if (this.id !== '0') {
      // Es editar
      product.id = this.id;
      this.productService.updateProduct(this.id, product).subscribe(() => {
        console.log('Producto editado correctamente');
        this.showMessage('', 'Producto editado correctamente');
        (this.platformLocation as any).back();
        
      });
    } else {
      this.productService.addProduct(product).subscribe(() => {
        console.log('Agregar producto');
        this.resetFormData()
        this.showMessage('Producto agregado', 'Producto agregado correctamente')
      });
    }
  }

  
  resetFormData() {
    // Restablecer los valores del formulario a sus valores iniciales
    this.formData = {
      id: '',
nombreProducto: '',
marca: '',
descripcion: '',
precioVenta: 0,
precioRegular: 0,
categoria: [],
imagen: [],
fecha: new Date('01-01-2024'),
  };
      
    
    
  }


  showMessage(title: string, message: string) {
       alert(`${title}\n\n${message}`);
     }


}
