import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemsQueryParams } from '../interfaces/items-query-params';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getAllItems(queryParams: ItemsQueryParams) {
    let url = environment.backendUrl + 'item';
    let key: keyof typeof queryParams;
    let firstParam = true;
    for (key in queryParams) {
      if (queryParams[key]) {
        if (!firstParam) {
          url += '&';
        } else {
          url += '?';
          firstParam = false;
        }
        url += `${key}=` + queryParams[key];
      }
    }
    console.log(url);
    return this.http.get<Item[]>(url);
  }
}
