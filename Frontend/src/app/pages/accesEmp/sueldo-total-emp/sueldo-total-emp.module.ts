import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SueldoTotalEmpRoutingModule } from './sueldo-total-emp-routing.module';
import { SueldoTotalEmpComponent } from './sueldo-total-emp.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    SueldoTotalEmpComponent
  ],
  imports: [
    CommonModule,
    SueldoTotalEmpRoutingModule,
    MaterialModule
  ]
})
export class SueldoTotalEmpModule { }
