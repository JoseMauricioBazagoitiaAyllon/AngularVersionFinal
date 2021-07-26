import { ChangeDetectionStrategy, Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FacturasEmpService } from 'src/app/pages/accesEmp/facturas-emp/facturas-emp.service';

enum Action{
  EDIT='edit',
  NEW = 'new'
}

@Component({
  selector: 'app-modal-facuras',
  templateUrl: './modal-facuras.component.html',
  styleUrls: ['./modal-facuras.component.scss']
})
export class ModalFacurasComponent implements OnInit {

  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private AdSvs : FacturasEmpService) { }
  Mes_Emision = 'none';
  Mes_Descargo = 'none';
  FactForm = this.fb.group({
    Cod_Factura: ['',Validators.required],
    Mes_Emision: this.Mes_Emision,
    Mes_Descargo: this.Mes_Descargo, 
    Cod_Empleados: <number><unknown>localStorage.getItem('id')
  });
  ngOnInit(){

  }
  onSave(): void{
    const formValue = this.FactForm.value;
    //if(this.actionTODO  == Action.NEW){
      console.log("Entro en if");
      this.AdSvs.new(formValue).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    //}else{
    //  const userId = this.data.Admi?.Cod_Emp;
   //   console.log("Entro en else");
    //  this.AdSvs.update(userId, formValue).subscribe((res)=> {
    //    console.log('Update', res);}
    //  );
    //  //debugger;
      
    }
  }

  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}

