import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this._shared.deleteHero(id).subscribe(
          res => {
            Swal.fire(
              'Supprimé !',
              'Le héros a été supprimé avec succès.',
              'success'
            );
            this.ngOnInit(); // Rafraîchir la liste après suppression
          },
          err => {
            console.log("Erreur lors de la suppression", err);
          }
        );
      }
    });
  }
  
}
