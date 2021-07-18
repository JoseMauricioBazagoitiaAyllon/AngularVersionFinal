import { ElementRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SueldoTotalEmpService } from './sueldo-total-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-sueldo-total-emp',
  templateUrl: './sueldo-total-emp.component.html',
  styleUrls: ['./sueldo-total-emp.component.scss']
})
export class SueldoTotalEmpComponent implements OnInit {

  displayedColumns: string[] = [ 'Empleado','Sueldo_Total','Pago_Horas_Extras','Beneficio_Antiguedad',
  'Descuentos', 'Impuestos', 'Impuestos_pagados_con_facturas','Total_a_pagar_Con_facturas','mes'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:SueldoTotalEmpService,private dialog:MatDialog){
      
    } 
    @ViewChild('Table1',{static: false})
    el !: ElementRef;
  
    ngOnInit(): void {
      const id = <number><unknown>localStorage.getItem('id');
      this.ActSvc.getById(id).subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    generatePDF(){
      let pdf1 = new jsPDF('p','pt','a2');
      pdf1.html(this.el.nativeElement,{
        callback: (pdf1)=>{
          pdf1.save("Sueldo.pdf");
        }
      });
    }
}
