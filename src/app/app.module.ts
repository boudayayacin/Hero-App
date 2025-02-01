import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations : [
    AppComponent,
    FirstComponent,
    AjoutComponent,
    ListComponent,
  ],
  imports: [BrowserModule, RouterModule , FormsModule], 
  providers: [],
})
export class AppModule {}
