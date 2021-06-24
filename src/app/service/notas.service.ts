import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Notas } from '../models/notas';
import { Observable } from 'rxjs';
import { ApiServiceService} from '../service/api-service.service'
import config from './config';
 
const poolData = config.poolData;
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private api: ApiServiceService, private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Notes/';
  }

  SaveNote(notas: Notas): Observable<any>{
    // return this.http.post(this.myAppUrl + this.myApiUrl + "Registrar", notas);
    return this.http.post(this.myAppUrl + this.myApiUrl + "addNotas", notas);
    // return this.api.post(poolData.url + 'Registrar', notas)
  }

  UpdateNote(notas: Notas): Observable<any>{
    // return this.http.post(this.myAppUrl + this.myApiUrl + "Modificar", notas);
    return this.http.post(this.myAppUrl + this.myApiUrl + "updateNotas", notas);
    // return this.api.put(poolData.url + "Modificar", notas);
  }

  DeleteNote(notas: Notas): Observable<any>{
    // return this.http.delete(this.myAppUrl + this.myApiUrl + "Eliminar/"+ idNotas);
    // return this.api.delete(poolData.url + "Eliminar", idNotas);
    return this.http.post(this.myAppUrl + this.myApiUrl + "deleteNotas", notas);
    // return this.api.post(poolData.url + "deleteNotas", notas);
  }

  GetNotes(): Observable<any>{
    return this.api.get(poolData.url + "getNotas");
    // return this.http.get(this.myAppUrl + this.myApiUrl + "getNotas");
  }

  SearchByDateNote(notas : Notas): Observable<any>{
    // return this.http.get(this.myAppUrl + this.myApiUrl + "ListarFecha/" + fecha);
    return this.http.post(this.myAppUrl + this.myApiUrl + "searchDate/", notas);
    // return this.api.post(poolData.url + "searchDate", notas);
  }
}
