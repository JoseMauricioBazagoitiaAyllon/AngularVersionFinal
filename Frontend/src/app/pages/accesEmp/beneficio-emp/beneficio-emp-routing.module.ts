import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficioEmpComponent } from './beneficio-emp.component';

const routes: Routes = [{ path: '', component: BeneficioEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficioEmpRoutingModule { }
