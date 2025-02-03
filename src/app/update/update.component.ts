import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [FormsModule ,CommonModule ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
hero: any ;
id: any ;

constructor (private act: ActivatedRoute , public _shared: SharedService , private router: Router){}

ngOnInit(): void {
  this.id = this.act.snapshot.paramMap.get('id');
  console.log(this.id);
  this._shared.getHeroById(this.id).subscribe(
    res => {
      console.log(res);
      this.hero = res ;
    },
    err => {
      console.log(err);
    }
  )
}
update(){
  this._shared.updateHero(this.id , this.hero).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/list'])
    },
    err => {
      console.log(err);
      
    }
  )
  
}

}
