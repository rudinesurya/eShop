import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from 'src/app/models/ShoppingCartItem';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html'
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem!: ShoppingCartItem;
  @Output() onRemoveCartItem: EventEmitter<ShoppingCartItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onRemoveCartItem.emit(this.cartItem);
  }
}
