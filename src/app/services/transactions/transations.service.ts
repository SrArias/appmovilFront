import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransationsService {

  private url = 'http://localhost:3000/transaction';
  constructor(private http: HttpClient) { }

  sendtrans = (datatrans) => this.http.post(`${this.url}`,datatrans);
}
