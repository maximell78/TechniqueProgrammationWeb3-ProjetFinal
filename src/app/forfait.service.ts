import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfaits } from './forfaits';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  forfaitsUrl = 'http://localhost/TechniqueProgrammationWeb3-ProjetFinal/src/api/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfaits[]> {
    return this.http.get<Forfaits[]>(this.forfaitsUrl);
  }

  addForfait(forfait: Forfaits): Observable<Forfaits> {
    return this.http.post<Forfaits>(this.forfaitsUrl, forfait, httpOptions);
  }

  editForfait(forfait: Forfaits): Observable<Forfaits> {
    return this.http.put<Forfaits>(this.forfaitsUrl + "?id=" + "forfait.id", forfait, httpOptions);
  }

  deleteForfait(id: string): Observable<Forfaits> {
    return this.http.delete<Forfaits>(this.forfaitsUrl + "?id=" +  id);
  }
}
