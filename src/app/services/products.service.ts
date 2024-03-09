import { Injectable } from '@angular/core';
import { apiServe } from '../apiServe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private ApiUrl: string = environment.apiEndpoint
 
 

  constructor(private http: HttpClient) { }

  // Sistema de administración para incorporar los datos base para la consulta


  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ApiUrl}`);
  }

  getProductById(productId: string): Observable<Product>{
    return this.http.get<Product>(this.ApiUrl + '/'+ productId);}

  
 
 
deleteProduct(productId: string): Observable<void> {
  return this.http.delete<void>(`${this.ApiUrl}/${productId}`);
}

  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(this.ApiUrl + '/', product)
  }

  

  updateProduct(id: string, product: Product): Observable<void> {
    return this.http.put<void>(this.ApiUrl + '/'+ id, product);
   
  }

}
