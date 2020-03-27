import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Mvt } from './mvt';
@Injectable({
  providedIn: 'root'
})
export class AffichageService {

  

  constructor(private http : HttpClient) { }

  public getAllMvt(){
    return this.http.get("http://localhost:8080/api/v1/mvt/");
  }
  public getMvtById(id){
    return this.http.get("http://localhost:8080/api/v1/mvt/{id_mvt}"+id);

  }
}
