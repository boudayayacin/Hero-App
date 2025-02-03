import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  imports: [FormsModule , CommonModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  constructor (public _shared: SharedService , private router: Router){}
  hero = {
    name: '',
    power: 0,
    url: ''
  }
  click(){
    this._shared.createHero(this.hero)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/'])
        
      },
      err =>{
        console.log(err);
        
      }
    )
    this.hero = {
      name: '',
      power: 0,
      url: ''
    }
  }
}
