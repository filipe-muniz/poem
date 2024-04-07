import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poet } from '../models/poet.model';

@Injectable({
  providedIn: 'root',
})
export class PoetsService {
  constructor(private http: HttpClient) {}

  limit: number = 20;
  url: string = 'http://localhost:3000/api/poets';

  getAllPoets(): Observable<Poet[]> {
    const poets = this.http.get<Poet[]>(`${this.url}/all`);
    return poets;
  }

  getTenPoets(): Observable<Poet[]> {
    const poets = this.http.get<Poet[]>(`${this.url}`);
    return poets;
  }

  getVariableQuantityPoets(): Observable<Poet[]> {
    const poets = this.http.get<Poet[]>(`${this.url}?limit=${this.limit}`);
    return poets;
  }
}
