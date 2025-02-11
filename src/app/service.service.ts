import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
   url = 'http://127.0.0.1:3000/'

   getAllservice(){
    return this.http.get(this.url + 'service/all')
   }

}
