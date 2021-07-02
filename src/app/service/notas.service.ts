import { Injectable } from '@angular/core';
import { Notas } from '../models/notas';
import { Observable } from 'rxjs';
import { ApiServiceService} from '../service/api-service.service'
import config from './config';
 
const poolData = config.poolData;
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private api: ApiServiceService) { 
  }

  SaveNote(notas: Notas): Observable<any>{
    return this.api.post(poolData.url + "addNotas", notas)
  }

  UpdateNote(notas: Notas): Observable<any>{
    return this.api.post(poolData.url + "updateNotas", notas);
  }

  DeleteNote(notas: Notas): Observable<any>{
    return this.api.post(poolData.url + "deleteNotas", notas);
  }

  GetNotes(): Observable<any>{
    return this.api.get(poolData.url + "getNotas");
  }

  SearchByDateNote(notas : Notas): Observable<any>{
    return this.api.post(poolData.url + "searchDate", notas);
  }
}
