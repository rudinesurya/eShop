import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  providers: [
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
