import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],
})
export class CoursesModule { }
