import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private url = 'http://localhost:3000/center';
  constructor(private http: HttpClient) { }

  getcenters = () => this.http.get<any>(`${this.url}`);
  sendcenters = (datacenter) => this.http.get<any>(`${this.url}`,datacenter);

  crearCentro = (datacenter) =>
    this.http.post(`${this.url}`, datacenter);

}




