import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioNotasComponent } from './components/inicio-notas/inicio-notas.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateNotasComponent } from './components/update-notas/update-notas.component';
import { LoginUsersComponent } from './components/login-users/login-users.component';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioNotasComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateNotasComponent },
  { path: 'login-users', component: LoginUsersComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
