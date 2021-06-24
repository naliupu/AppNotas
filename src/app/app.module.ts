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
import { UpdateNotasComponent } from './components/update-notas/update-notas.component';
import { InicioNotasComponent } from './components/inicio-notas/inicio-notas.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateNotasComponent,
    LoginUsersComponent
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
  providers: [InicioNotasComponent
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
