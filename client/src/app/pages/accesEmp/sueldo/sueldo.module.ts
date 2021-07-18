import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SueldoRoutingModule } from './sueldo-routing.module';
import { SueldoComponent } from './sueldo.component';
import { MaterialModule } from 'src/app/material.model';


@NgModule({
  declarations: [
    SueldoComponent
  ],
  imports: [
    CommonModule,
    SueldoRoutingModule,
    MaterialModule
  ]
})
export class SueldoModule { }
