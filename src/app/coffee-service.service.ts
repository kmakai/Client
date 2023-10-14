import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coffee } from 'src/Models/Coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeServiceService {
  private apiUrl = 'https://localhost:7181/coffees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<Coffee[]>(this.apiUrl);
  }
}
