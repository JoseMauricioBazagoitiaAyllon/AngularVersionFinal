import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpuestoEmpComponent } from './impuesto-emp.component';

const routes: Routes = [{ path: '', component: ImpuestoEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImpuestoEmpRoutingModule { }
