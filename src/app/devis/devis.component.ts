import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-devis',
  standalone: true, // Ajouté pour permettre l'import
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css'] // Correction ici (styleUrls avec un "s")
})
export class DevisComponent implements OnInit {
  selectedServices: any[] = [];
  services: any 
  id: string = "0";

  constructor(public _serv: ServiceService) {}

  ngOnInit(): void {
    this._serv.getAllservice().subscribe(
      res => {
        console.log("Services récupérés :", res);
        this.services = res;
      },
      err => {
        console.error("Erreur lors de la récupération des services", err);
      }
    );
  }

  onServiceChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedId = target.value;

    if (!selectedId || selectedId === "0") return; 

    if (!this.selectedServices.some(s => s.id === selectedId)) {
      const service = this.services.find((s: any) => s.id == selectedId);
      if (service) {
        this.selectedServices.push({ ...service });
        console.log("Service ajouté :", service);
      } else {
        console.warn("Service non trouvé !");
      }
    }
  }

  removeService(index: number) {
    this.selectedServices.splice(index, 1);
    console.log("Service supprimé, index :", index);
  }
}
