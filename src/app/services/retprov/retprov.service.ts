import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetprovService {

  private url = 'http://localhost:3000/retprov';
  constructor(private http: HttpClient) {}

  crearDev = (dataretprov) => this.http.post(`${this.url}`, dataretprov);   
}
