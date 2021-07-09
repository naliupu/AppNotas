import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule} from '../app/shared/shared.module';
import { InicioNotasModule } from './components/inicio-notas/inicio-notas.module';
import { RegisterModule } from './components/register/register.module';

//INTERCEPTORS
import { TokenInterceptor} from '../app/helpers/token.interceptor';

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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
