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

    getone = (idprod) =>
    this.http.get<any>(`${this.url}/oneP`, {
      params: { idprod },
    });

  crearProductos = (dataproductos) =>
    this.http.post(`${this.url}`, dataproductos);

    actualizarProductos = (idprod,dataproductos) =>
    this.http.put(`${this.url}/one`, dataproductos,{
      params:{idprod},
    });
}
