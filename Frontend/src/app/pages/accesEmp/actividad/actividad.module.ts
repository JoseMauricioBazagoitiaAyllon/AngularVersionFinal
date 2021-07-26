import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';
import { MaterialModule } from 'src/app/material.model';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    MaterialModule,FormsModule
  ]
})
export class ActividadModule { }
