import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//MODULOS
import { InicioNotasRoutingModule } from './inicio-notas-routing.module';
import { SharedModule} from '../../shared/shared.module'

//COMPONENTES
import { InicioNotasComponent } from './inicio-notas.component';


@NgModule({
  declarations: [
    InicioNotasComponent
  ],
  imports: [
    CommonModule,
    InicioNotasRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class InicioNotasModule { }
