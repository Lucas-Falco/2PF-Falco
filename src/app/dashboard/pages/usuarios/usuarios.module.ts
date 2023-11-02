import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { Persona } from '../../persona';





@NgModule({
  declarations: [
    UsuariosComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,SharedModule, MatDividerModule, 
  ],
  exports:[UsuariosComponent]
})
export class UsuariosModule { }
