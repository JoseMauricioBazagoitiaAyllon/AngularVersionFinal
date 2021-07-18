import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasEmpRoutingModule } from './facturas-emp-routing.module';
import { FacturasEmpComponent } from './facturas-emp.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    FacturasEmpComponent
  ],
  imports: [
    CommonModule,
    FacturasEmpRoutingModule,
    MaterialModule
  ]
})
export class FacturasEmpModule { }
