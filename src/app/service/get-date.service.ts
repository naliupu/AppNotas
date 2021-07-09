import { Injectable } from '@angular/core';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  constructor() { }

//Obtener la nota de inicioComponent y llamarla en update para listarla
public nota: Notas;
public dataLogin: any;
public token: any;

}
