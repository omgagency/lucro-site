import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QueesComponent } from './pages/quees/quees.component';
import { ComoComponent } from './pages/como/como.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
	{
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'inicio',
      component: HomeComponent,
    },
    {
      path: 'quees',
      component: QueesComponent,
    },
    {
      path: 'como',
      component: ComoComponent,
    },
    {
      path: 'comunidad',
      component: ComunidadComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registro',
      component: RegistroComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
