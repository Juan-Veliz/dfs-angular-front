import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../_class/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  host = `${environment.endpoint}/itemcategory`
  constructor(
    private http: HttpClient
  ) { }

  getCategory(params:any):Observable<Category[]>{
    return this.http.get<Category[]>(this.host,{ params});
  }

  createCategory(category:Category){
    return this.http.post(this.host, category);
  }

  updateCategory(category:Category, id:number){
    return this.http.put(`${this.host}/${id}`, category);
  }

  viewCategory(params:any, id:number){
    return this.http.get(`${this.host}/${id}`, {params});
  }

  listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.host}/list`);
  }
}
