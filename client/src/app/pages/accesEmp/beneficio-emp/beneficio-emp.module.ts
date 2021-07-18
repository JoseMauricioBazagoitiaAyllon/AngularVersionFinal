import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficioEmpRoutingModule } from './beneficio-emp-routing.module';
import { BeneficioEmpComponent } from './beneficio-emp.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    BeneficioEmpComponent
  ],
  imports: [
    CommonModule,
    BeneficioEmpRoutingModule,
    MaterialModule
  ]
})
export class BeneficioEmpModule { }
