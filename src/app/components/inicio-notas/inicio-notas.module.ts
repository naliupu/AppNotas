import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    SharedModule
  ]
})
export class InicioNotasModule { }
