import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/product/one';
  constructor(private http: HttpClient) {}

  getcategories = (intidcat) =>
    this.http.get<any>(`${this.url}`, {
      params: { intidcat },
    });
}
