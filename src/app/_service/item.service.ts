import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_class/item';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  host = `${environment.endpoint}/item`
  constructor(
    private http: HttpClient,
  ) { }

  getItems(params:any):Observable<Item[]>{
    return this.http.get<Item[]>(this.host,{ params});
  }

  createItem(item:Item){
    return this.http.post(this.host, item);
  }

  updateItem(item:Item, id:number){
    return this.http.put(`${this.host}/${id}`, item);
  }

  viewItem(params:any, id:number){
    return this.http.get(`${this.host}/${id}`, {params});
  }
}
