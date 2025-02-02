import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = 'http://127.0.0.1:3000/'
  constructor(private http: HttpClient) { }
  
  heros: any[] = []

  createHero(hero: any){
    return this.http.post(this.url + 'hero/ajout',hero) ; 
  }

  getHero(hero: any){
    return this.http.get(this.url + 'hero/all', hero);
  }
}
