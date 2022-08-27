import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ShoppingCart } from '../models/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private apiUrl = "https://localhost:7011/cart";

  constructor(private http: HttpClient) { }

  getCarts(): Observable<ShoppingCart[]>{
    return this.http.get<ShoppingCart[]>(this.apiUrl);
  }

  getCartByUserName(userName: string): Observable<ShoppingCart[]>{
    return this.http.get<ShoppingCart[]>(`${this.apiUrl}/?$filter=username eq '${userName}' &$expand=items($expand=product)`);
  }

  addProductToCart(userName: string, productId: string, quantity: number){
    return this.http.post(`${this.apiUrl}/addItem`, 
      {
        userName: userName,
        productId: productId,
        quantity: quantity
      });
  }

  removeProductFromCart(cartId: string, cartItemId: string){
    return this.http.post(`${this.apiUrl}/removeItem`, {
      cartId: cartId,
      cartItemId: cartItemId
    });
  }

  clearCart(cartId: string){
    return this.http.post(`${this.apiUrl}/clearCart`, {
      cartId: cartId
    });
  }

  checkOutCart(cartId: string){
    return this.http.post(`${this.apiUrl}/checkOut`, {
      cartId: cartId
    });
  }
}
