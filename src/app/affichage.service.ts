import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mvt } from './model/mvt';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};





@Injectable({
  providedIn: 'root'
})
export class AffichageService {

    

  constructor(private http : HttpClient) { }

  
	private baseUrl = 'http://localhost:8080/api/v1/getAllMvt';



    public findAllMvt(): Observable<Mvt[]> {
        return this.http.get<Mvt[]>(this.baseUrl);
      }
     
  
  
};
