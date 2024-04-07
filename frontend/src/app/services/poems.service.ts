import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poem } from '../models/poem.model';

@Injectable({
  providedIn: 'root',
})
export class PoemsService {
  constructor(private http: HttpClient) {}

  limit: number = 20;
  url: string = 'http://localhost:3000/api/poems';

  getAllPoems(): Observable<Poem[]> {
    const poems = this.http.get<Poem[]>(`${this.url}/all`);
    return poems;
  }

  getTenPoems(): Observable<Poem[]> {
    const poems = this.http.get<Poem[]>(`${this.url}`);
    return poems;
  }

  getVariableQuantityPoems(): Observable<Poem[]> {
    const poems = this.http.get<Poem[]>(`${this.url}?limit=${this.limit}`);
    return poems;
  }
}
