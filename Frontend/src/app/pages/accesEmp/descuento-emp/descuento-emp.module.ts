import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescuentoEmpRoutingModule } from './descuento-emp-routing.module';
import { DescuentoEmpComponent } from './descuento-emp.component';
import { MaterialModule } from 'src/app/material.model';



@NgModule({
  declarations: [
    DescuentoEmpComponent
  ],
  imports: [
    CommonModule,
    DescuentoEmpRoutingModule,
    MaterialModule
  ]
})
export class DescuentoEmpModule { }
