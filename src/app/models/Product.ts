import { Category } from "./Category";

export interface Product {
    id?: string,
    name: string,
    summary: string,
    description: string,
    imageFile: string,
    price: number,
    category: Category
}