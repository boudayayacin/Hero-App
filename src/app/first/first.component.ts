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
  user = [
    {name: "ahmed",
    age:20},
    {name: "ahmed",
    age:40}
  ]
  
}
