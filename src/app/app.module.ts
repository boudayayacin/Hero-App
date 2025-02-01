import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations : [
    AppComponent,
  ],
  imports: [BrowserModule, RouterModule , FormsModule], 
  providers: [],
})
export class AppModule {}
