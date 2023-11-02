import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from './pages/forms/forms.module';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, FormsModule,UsuariosModule, RouterModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule {

 }
