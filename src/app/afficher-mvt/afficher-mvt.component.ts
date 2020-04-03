import { Component, OnInit } from '@angular/core';
import { AffichageService } from '../affichage.service';
import {Router} from '@angular/router';
import{Mvt} from '../model/mvt';
import { Observable } from "rxjs";

@Component({
  selector: 'app-afficher-mvt',
  templateUrl: './afficher-mvt.component.html',
  styleUrls: ['./afficher-mvt.component.css']
})
export class AfficherMvtComponent implements OnInit {
 
  mvts: Mvt[];

constructor(private service:AffichageService,  private router: Router) { }

  
  ngOnInit() {
      this.service.findAllMvt().subscribe(data => {
        this.mvts = data;
      });
    }





}
