import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsuariosComponent } from './dashboard/pages/usuarios/usuarios.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  },
  {
    path:'autenticacion',
    component: AutenticacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
