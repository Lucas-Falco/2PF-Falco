import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionComponent } from './autenticacion.component';



@NgModule({
  declarations: [
    AutenticacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AutenticacionComponent],
})
export class AutenticacionModule { }
