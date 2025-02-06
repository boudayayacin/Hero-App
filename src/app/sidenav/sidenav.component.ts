import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true ,
  imports: [RouterModule ,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
collapsed = false ;
navData = navbarData

toggleCollapse(){
this.collapsed = !this.collapsed
console.log('collapsed:', this.collapsed);
}
colseSidenav(){
this.collapsed = false
}
}
