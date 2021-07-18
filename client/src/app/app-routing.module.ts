import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './shared/guards/check-login.guard';

const routes: Routes = [
  { path: 'notFound', loadChildren: () => 
    import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'login', loadChildren: () => 
    import('./pages/auth/login/login.module').then(m => m.LoginModule),canActivate:[CheckLoginGuard],   
  },
  { path: '', loadChildren: () => 
  import('./pages/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'empleados', loadChildren: () => 
  import('./pages/empleados/empleados.module').then(m => m.EmpleadosModule) },
  { path: 'sueldos', loadChildren: () => 
  import('./pages/accesAdmi/sueldos/sueldos.module').then(m => m.SueldosModule) },
  { path: 'departamentos', loadChildren: () => 
  import('./pages/accesAdmi/departamentos/departamentos.module').then(m => m.DepartamentosModule) },
  { path: 'descuentos', loadChildren: () => 
  import('./pages/accesAdmi/descuentos/descuentos.module').then(m => m.DescuentosModule) },
  { path: 'impuestos', loadChildren: () => 
  import('./pages/accesAdmi/impuestos/impuestos.module').then(m => m.ImpuestosModule) },
  { path: 'roles', loadChildren: () => 
  import('./pages/accesAdmi/roles/roles.module').then(m => m.RolesModule) },
  { path: 'admin', loadChildren: () => 
  import('./pages/accesAdmi/admin/admin.module').then(m => m.AdminModule) },
  { path: 'actividad', loadChildren: () => 
  import('./pages/accesEmp/actividad/actividad.module').then(m => m.ActividadModule) },
  { path: 'factura', loadChildren: () => 
  import('./pages/accesAdmi/factura/factura.module').then(m => m.FacturaModule) },
  { path: 'actividadEmp', loadChildren: () => 
  import('./pages/accesEmp/actividad-emp/actividad-emp.module').then(m => m.ActividadEmpModule) },
  { path: 'descuento-emp', loadChildren: () =>
   import('./pages/accesEmp/descuento-emp/descuento-emp.module').then(m => m.DescuentoEmpModule) },
  { path: 'impuesto-emp', loadChildren: () =>
   import('./pages/accesEmp/impuesto-emp/impuesto-emp.module').then(m => m.ImpuestoEmpModule) },
  { path: 'beneficioEmp', loadChildren: () => 
  import('./pages/accesEmp/beneficio-emp/beneficio-emp.module').then(m => m.BeneficioEmpModule) },
  { path: 'sueldoTotalEmp', loadChildren: () => 
  import('./pages/accesEmp/sueldo-total-emp/sueldo-total-emp.module').then(m => m.SueldoTotalEmpModule) },
  { path: 'FacturasEmp', loadChildren: () => 
  import('./pages/accesEmp/facturas-emp/facturas-emp.module').then(m => m.FacturasEmpModule) },
  { path: 'sueldo', loadChildren: () => import('./pages/accesEmp/sueldo/sueldo.module').then(m => m.SueldoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
