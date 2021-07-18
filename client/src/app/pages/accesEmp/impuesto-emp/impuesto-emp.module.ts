import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpuestoEmpRoutingModule } from './impuesto-emp-routing.module';
import { ImpuestoEmpComponent } from './impuesto-emp.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    ImpuestoEmpComponent
  ],
  imports: [
    CommonModule,
    ImpuestoEmpRoutingModule,
    MaterialModule
  ]
})
export class ImpuestoEmpModule { }
