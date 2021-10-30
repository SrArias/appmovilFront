import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}

  getProductos = (intidcat) =>
    this.http.get<any>(`${this.url}/one`, {
      params: { intidcat },
    });

  crearProductos = (dataproductos) =>
    this.http.post(`${this.url}`, dataproductos);
}
