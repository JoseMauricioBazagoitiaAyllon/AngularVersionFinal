import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasEmpComponent } from './facturas-emp.component';

const routes: Routes = [{ path: '', component: FacturasEmpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasEmpRoutingModule { }
