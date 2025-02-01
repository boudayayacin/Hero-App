import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from '../ajout/ajout.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-first',
  imports: [FormsModule , CommonModule,AjoutComponent,ListComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  
}
