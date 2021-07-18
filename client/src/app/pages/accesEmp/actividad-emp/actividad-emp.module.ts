import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadEmpRoutingModule } from './actividad-emp-routing.module';
import { ActividadEmpComponent } from './actividad-emp.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    ActividadEmpComponent
  ],
  imports: [
    CommonModule,
    ActividadEmpRoutingModule,
    MaterialModule
  ]
})
export class ActividadEmpModule { }
