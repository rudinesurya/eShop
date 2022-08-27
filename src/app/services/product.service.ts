import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "https://localhost:7011/product";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, {
      name: product.name,
      summary: product.summary,
      description: product.description,
      imageFile: product.imageFile,
      price: product.price,
      category: product.category
    });
  }
}
