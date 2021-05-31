import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment'
import { Notas } from '../models/notas';
import { Observable } from 'rxjs';
import { ApiServiceService} from '../service/api-service.service'
 
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private api: ApiServiceService) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Notas/';
  }

  SaveNote(notas: Notas): Observable<any>{
    // return this.http.post(this.myAppUrl + this.myApiUrl, notas);
    return this.api.post(this.myAppUrl + this.myApiUrl + "Registrar", notas)
  }

  UpdateNote(notas: Notas): Observable<any>{
    return this.api.put(this.myAppUrl + this.myApiUrl + "Modificar", notas);
  }

  DeleteNote(idNotas: number): Observable<any>{
    return this.api.delete(this.myAppUrl + this.myApiUrl + "Eliminar", idNotas);
  }

  GetNotes(): Observable<any>{
    return this.api.get(this.myAppUrl + this.myApiUrl + "Listar");
  }

  SearchByDateNote(fecha: Date): Observable<any>{
    return this.api.get(this.myAppUrl + this.myApiUrl, fecha);
  }
}
