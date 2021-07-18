import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadEmpComponent } from './actividad-emp.component';

const routes: Routes = [{ path: '', component: ActividadEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadEmpRoutingModule { }
