import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULOS
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule} from '../../shared/shared.module'

//COMPONENTES
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
