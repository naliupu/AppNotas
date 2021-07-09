import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//MODULOS
import { UpdateNotasRoutingModule } from './update-notas-routing.module';
import { SharedModule} from '../../shared/shared.module'

//COMPONENTES
// import { UpdateNotasComponent } from './update-notas.component';



@NgModule({
  declarations: [
    // UpdateNotasComponent,
  ],
  imports: [
    CommonModule,
    UpdateNotasRoutingModule,
    SharedModule
  ],
  providers: []

})
export class UpdateNotasModule { }
