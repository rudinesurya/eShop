import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = "https://localhost:7011/category";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.apiUrl, {
      name: category.name,
      description: category.description
    });
  }
}
