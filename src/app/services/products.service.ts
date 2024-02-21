import { Injectable } from '@angular/core';
import { apiServe } from '../apiServe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private ApiUrl: string = apiServe.serveUrl

  constructor(private http: HttpClient) {   }

  // Sistema de administración para incorporar los datos base para la consulta

   getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ApiUrl}`);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.ApiUrl}/products${productId}`);
    
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.ApiUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.ApiUrl}/products/${product.id}`, product);
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.ApiUrl}/products/${productId}`);
  }

  deleteCategory(categoryId: string): Observable<void> {
    return this.http.delete<void>(`${this.ApiUrl}/categories/${categoryId}`);
  }


}
