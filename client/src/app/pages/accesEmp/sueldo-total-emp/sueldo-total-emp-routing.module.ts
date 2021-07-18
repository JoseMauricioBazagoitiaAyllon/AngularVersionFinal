import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SueldoTotalEmpComponent } from './sueldo-total-emp.component';

const routes: Routes = [{ path: '', component: SueldoTotalEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldoTotalEmpRoutingModule { }
