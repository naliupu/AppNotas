import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioNotasComponent } from './components/inicio-notas/inicio-notas.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioNotasComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
