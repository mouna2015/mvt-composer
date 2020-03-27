import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AfficherMvtComponent} from './afficher-mvt/afficher-mvt.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:"",redirectTo:"afficher",pathMatch:"full"},
   {path:"afficher",component:AfficherMvtComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
