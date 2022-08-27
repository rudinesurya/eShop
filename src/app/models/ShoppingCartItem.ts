import { Product } from "./Product";

export interface ShoppingCartItem {
    id?: string,
    quantity: number,
    price: number,
    product: Product
}