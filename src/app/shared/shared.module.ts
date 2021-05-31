import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

//MODULOS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//COMPONENTES
import { LoadingComponent} from './loading/loading.component'

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
