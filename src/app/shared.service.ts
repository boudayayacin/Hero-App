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
  getHero(){
    return this.http.get(this.url + 'hero/all');
  }
  deleteHero(id: any){
    return this.http.delete(this.url + 'hero/supprimer/'+ id)
  }
  updateHero(id: any , hero: any){
    return this.http.put(this.url + 'hero/update/' + id , hero);
  }
  getHeroById(id: any){
    return this.http.get(this.url + 'hero/getbyid/'+id);
  }
}
