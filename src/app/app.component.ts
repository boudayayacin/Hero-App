import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { FirstComponent } from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FirstComponent],  
})
export class AppComponent {
  title = 'testing';
}
