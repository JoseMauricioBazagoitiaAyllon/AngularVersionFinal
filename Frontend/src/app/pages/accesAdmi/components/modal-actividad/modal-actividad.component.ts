import { ChangeDetectionStrategy, Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActividadService } from 'src/app/pages/accesEmp/actividad/actividad.service';
interface Mes {
  value: number;
  viewValue: string;
}
interface Car {
  value: string;
  viewValue: string;
}
enum Action{
  EDIT='edit',
  NEW = 'new'
}
@Component({
  selector: 'app-modal-actividad',
  templateUrl: './modal-actividad.component.html',
  styleUrls: ['./modal-actividad.component.scss']
})
export class ModalActividadComponent implements OnInit {
  selectedValue!: number;
  selectedCar!: string;

  Meses: Mes[] = [
    {value:1, viewValue: 'Enero'},
    {value:2, viewValue: 'Febrero'},
    {value:3, viewValue: 'Marzo'},
    {value:4, viewValue: 'Abril'},
    {value:5, viewValue: 'Mayo'},
    {value:6, viewValue: 'Junio'},
    {value:7, viewValue: 'Julio'},
    {value:8, viewValue: 'Agosto'},
    {value:9, viewValue: 'Septiembre'},
    {value: 10, viewValue: 'Octubre'},
    {value: 11, viewValue: 'Noviembre'},
    {value: 12, viewValue: 'Diciembre'},
  ];
  actionTODO = Action.NEW;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any
  ,private fb:FormBuilder, private AdSvs : ActividadService) { }

  ActiForm = this.fb.group({
    Cod_Emp: ['',Validators.required],
    Horas_Extras: ['',Validators.required],
    Dias_P: ['',Validators.required], 
    Dias_A: ['',Validators.required], 
    Dias_F: ['',Validators.required], 
    Dias_Totales: ['',Validators.required], 
    Mes_vigente: ['',Validators.required], 
    Anhos_Antiguedad: ['',Validators.required],
  });
  
  ngOnInit(): void {
    console.log(this.data.Acti.hasOwnProperty('Nro_Empleado'))
    if(this.data.Acti.hasOwnProperty('Nro_Empleado')){
      this.actionTODO = Action.EDIT;
      this.data.title = "Editar actividad";
      this.pathFormData();
    }
  }
  onSave(): void{
    const ActiMes= ({
    idMes : this.selectedValue
    });
    const formValue = this.ActiForm.value;
    if(this.actionTODO  == Action.NEW){
      const formValue1 = ActiMes;
      console.log("Entro en if");
      console.log(this.selectedValue);
      console.log(formValue1);
      
      this.AdSvs.newM(formValue1).subscribe(res=>{
        console.log('new' , res)
      })
      //debugger;
    }else{
      const userId = this.data.Acti?.Nro_Empleado;
      console.log(this.data.Acti?.Nro_Empleado);
      console.log("Entro en else");
      this.AdSvs.update(userId, formValue).subscribe((res)=> {
        console.log('Update', res);}
      );
      //debugger;
      
    }
  }


  private pathFormData():void{
    this.ActiForm.patchValue({
      Cod_Emp: this.data?.Acti?.Nro_Empleado,
      Horas_Extras: this.data?.Acti?.Horas_Extras,
      Dias_P: this.data?.Acti?.Dias_Puntual,
      Dias_A: this.data?.Acti?.Dias_Atrasado,
      Dias_F: this.data?.Acti?.Dias_que_Falto,
      Dias_Totales: this.data?.Acti?.Dias_Totales,
      Mes_vigente: this.data?.Acti?.Mes_de_informacion,
      Anhos_Antiguedad: this.data?.Acti?.Anhos_De_Antiguedad,
    })
  }
  
  //checkField(field: string): boolean {
 //   return this.AdmiForm;
  //}
}
