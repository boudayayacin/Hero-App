import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  imports: [FormsModule , CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  heros: any ;
  constructor(public _shared: SharedService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._shared.getHero().subscribe(
      res =>{
        console.log(res);
        this.heros = res ;
      },
      err => {
        console.log(err);
        
      }
    )
  }
  delete(id: any) {
    if (window.confirm('Voulez-vous vraiment supprimer ce héros ?')) {
      this._shared.deleteHero(id).subscribe(
        res => {
          console.log("Héros supprimé avec succès");
          this.ngOnInit(); // Rafraîchir la liste
        },
        err => {
          console.log("Erreur lors de la suppression", err);
        }
      );
    }
  }
  
}
