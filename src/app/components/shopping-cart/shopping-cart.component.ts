import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { ShoppingCartItem } from 'src/app/models/ShoppingCartItem';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  cart?: ShoppingCart;

  constructor(private service: ShoppingCartService) { }

  ngOnInit(): void {
    this.service.getCartByUserName("user@gmail.com")
      .subscribe({
        next: (carts) => this.cart = carts[0],
        error: console.error
      });
  }

  removeCartItem(cartItem: ShoppingCartItem){
    this.service.removeProductFromCart(this.cart?.id!!, cartItem.id!!)
      .subscribe({
        next: () => {
          this.cart!.items = this.cart!.items.filter(i => i.id !== cartItem.id);
          alert("removed " + cartItem.id)
        },
        error: console.error
      });
  }
}
