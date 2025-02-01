import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AjoutComponent,ListComponent],  
})
export class AppComponent {
  title = 'testing';
}
