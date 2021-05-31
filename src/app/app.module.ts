import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule} from '../app/shared/shared.module'
import { InicioNotasModule } from './components/inicio-notas/inicio-notas.module'
import { RegisterModule } from './components/register/register.module'

//COMPONENTES
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,
    InicioNotasModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
