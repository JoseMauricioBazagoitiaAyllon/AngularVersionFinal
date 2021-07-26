import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescuentoEmpComponent } from './descuento-emp.component';

const routes: Routes = [{ path: '', component: DescuentoEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DescuentoEmpRoutingModule { }
