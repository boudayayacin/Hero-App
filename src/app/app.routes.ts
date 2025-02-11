import { Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { DevisComponent } from './devis/devis.component';

export const routes: Routes = [
  { path: 'ajout', component: AjoutComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  { path: 'update/:id',  component: UpdateComponent } ,
  { path: 'login',  component: LoginComponent } ,
  { path: 'table',  component: TableComponent } ,
  { path: 'devis',  component: DevisComponent } ,
  { path: '**',  component: NotfoundComponent } 
];