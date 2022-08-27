import { ShoppingCartItem } from "./ShoppingCartItem";

export interface ShoppingCart {
    id?: string,
    userName: string,
    items: ShoppingCartItem[],
    totalPrice: number
}