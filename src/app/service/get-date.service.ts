import { Injectable } from '@angular/core';
import { Notas } from '../models/notas';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  constructor() { }

public nota: Notas;
}
