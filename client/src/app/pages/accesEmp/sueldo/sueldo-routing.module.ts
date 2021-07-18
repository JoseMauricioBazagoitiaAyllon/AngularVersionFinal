import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SueldoComponent } from './sueldo.component';

const routes: Routes = [{ path: '', component: SueldoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SueldoRoutingModule { }
