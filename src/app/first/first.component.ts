import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule , CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  hero = {
    name: '',
    power: 0,
    url: ''
  }
  heros: any[] = []

  click(){
    this.heros.push(this.hero);
    this.hero = {
      name: '',
      power: 0,
      url: ''
    }
  }
}
