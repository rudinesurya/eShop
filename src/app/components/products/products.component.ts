import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "src/app/models/Product";
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe( {
        next: (products) => this.products = products,
        error: console.error
      });
  }

  addProductToCart(product: Product){
    this.shoppingCartService.addProductToCart(
      "user@gmail.com", 
      product.id!!, 
      1)
      .subscribe( {
        next: () => {
          //todo: update the shoppingCart array
          alert("added " + product.id!!)
        },
        error: console.error
      });;
  }
}
