import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemInterface } from './ItemInterface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private url = '../assets/data/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<ItemInterface[]> {
    return this.http.get<ItemInterface[]>(this.url);
  }
}
