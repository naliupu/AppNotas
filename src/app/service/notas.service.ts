import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Notas } from '../models/notas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Notas/';
  }

  SaveNote(notas: Notas): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, notas);
  }

  UpdateNote(notas: Notas): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl, notas);
  }

  DeleteNote(idNotas: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + idNotas);
  }

  GetNotes(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetNote');
  }

//   SearchByDateNote(notas: Notas): Observable<any>{
//     return this.http.get(this.myAppUrl + this.myApiUrl, notas);
//   }
}
