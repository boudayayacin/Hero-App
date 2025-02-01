import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  imports: [FormsModule , CommonModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {
  constructor (public _shared: SharedService){}
  hero = {
    name: '',
    power: 0,
    url: ''
  }

  click(){
    this._shared.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      url: ''
    }
  }
}
