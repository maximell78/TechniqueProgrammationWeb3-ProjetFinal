import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meteo } from './meteo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  forfaitsUrl = 'http://localhost/TechniqueProgrammationWeb3-ProjetFinal/src/api/';

  constructor(private http: HttpClient) { }

  getMeteo(): Observable<Meteo[]> {
    return this.http.get<Meteo[]>(this.forfaitsUrl);
  }
}
