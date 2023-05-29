import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http : HttpClient) { }

  getQuotes(num:number){
    return this.http.get(environment.baseApi + num)
  }
}
