import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooderComponent } from './shared/components/fooder/fooder.component';
import {MaterialModule} from './material.model';
import { SidebarModule } from './shared/components/sidebar/sidebar.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AdminInterceptor } from './shared/interceptors/admi-interceptor';
import { ModalComponent } from './pages/empleados/components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSueldoComponent } from './pages/accesAdmi/components/modal-sueldo/modal-sueldo.component';
import { ModalDepComponent } from './pages/accesAdmi/components/modal-dep/modal-dep.component';
import { ModalDesComponent } from './pages/accesAdmi/components/modal-des/modal-des.component';
import { ModalImpComponent } from './pages/accesAdmi/components/modal-imp/modal-imp.component';
import { ModalRolComponent } from './pages/accesAdmi/components/modal-rol/modal-rol.component';
import { ModalAdminComponent } from './pages/accesAdmi/components/modal-admin/modal-admin.component';
import { ModalFacComponent } from './pages/accesAdmi/components/modal-fac/modal-fac.component';
import { ModalFacurasComponent } from './pages/accesAdmi/components/modal-facuras/modal-facuras.component';
import { ModalActividadComponent } from './pages/accesAdmi/components/modal-actividad/modal-actividad.component';
import { FilterPipe } from './pipes/filter.pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooderComponent,
    ModalComponent,
    ModalSueldoComponent,
    ModalDepComponent,
    ModalDesComponent,
    ModalImpComponent,
    ModalRolComponent,
    ModalAdminComponent,
    ModalFacComponent,
    ModalFacurasComponent,
    ModalActividadComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule
    ,MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AdminInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
