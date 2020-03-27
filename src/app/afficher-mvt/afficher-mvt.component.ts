import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../affichage.service';
import {Router} from '@angular/router';
import { Mvt } from '../mvt';


@Component({
  selector: 'app-afficher-mvt',
  templateUrl: './afficher-mvt.component.html',
  styleUrls: ['./afficher-mvt.component.css']
})
export class AfficherMvtComponent implements OnInit {
 
mvt : any
id : number;

constructor(private service:AffichageService) { }

public findMvtById(){
  let resp= this.service.getMvtById(this.id)
  resp.subscribe((data)=>this.mvt=data);
 }

  ngOnInit() {
    let resp=this.service.getAllMvt();
    resp.subscribe((data)=>this.mvt=data);
   
  }

  
}
