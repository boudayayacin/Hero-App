import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedetatService } from './sharedetat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule,SidenavComponent],
})
export class AppComponent {
  isSidebarCollapsed = false;
  title = 'testing';

  constructor(private sharedStateService: SharedetatService) {
    this.sharedStateService.currentSidebarState.subscribe(state => {
      this.isSidebarCollapsed = state;
    });
  }
}
