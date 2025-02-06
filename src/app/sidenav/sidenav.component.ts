import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedetatService } from '../sharedetat.service';

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

constructor(private sharedStateService: SharedetatService) {}

toggleCollapse(){
this.collapsed = !this.collapsed
console.log('collapsed:', this.collapsed);
// lorsque il est ouvert le contenu chnage 
// this.sharedStateService.changeSidebarState(this.collapsed);
}
colseSidenav(){
this.collapsed = false
this.sharedStateService.changeSidebarState(this.collapsed);
}
}
