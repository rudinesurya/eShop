import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() onAddProductToCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(product: Product){
    this.onAddProductToCart.emit(product);
  }
}
