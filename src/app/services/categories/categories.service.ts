import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url ='http://localhost:3000/category';
  constructor(private http: HttpClient) { }

  getcategories = () => this.http.get<any>(`${this.url}`);
}
