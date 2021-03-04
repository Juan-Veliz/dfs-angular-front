import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Class } from '../_class/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  host = `${environment.endpoint}/itemclass`
  constructor(
    private http: HttpClient
  ) { }

  getClass(params:any):Observable<Class[]>{
    return this.http.get<Class[]>(this.host,{ params});
  }

  createClass(clase:Class){
    return this.http.post(this.host, clase);
  }

  updateClass(clase:Class, id:number){
    return this.http.put(`${this.host}/${id}`, clase);
  }

  viewClass(params:any, id:number){
    return this.http.get(`${this.host}/${id}`, {params});
  }

  listClass():Observable<Class[]>{
    return this.http.get<Class[]>(`${this.host}/list`);
  }
}
