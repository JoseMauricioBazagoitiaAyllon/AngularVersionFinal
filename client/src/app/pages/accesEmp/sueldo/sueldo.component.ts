import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SueldoService } from './sueldo.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import jsPDF, { jsPDFAPI } from 'jspdf';
import { callbackify } from 'util';

 


@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.scss']
})
export class SueldoComponent implements OnInit {

  displayedColumns: string[] = [ 'Empleado','Sueldo_Total','Pago_Horas_Extras','Beneficio_Antiguedad',
  'Descuentos', 'Impuestos', 'Impuestos_pagados_con_facturas','Total_a_pagar_Con_facturas','mes'];//;//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:SueldoService,private dialog:MatDialog){
      
    } 
    @ViewChild('Table1',{static: false})
    el !: ElementRef;

    ngOnInit(): void {
      this.ActSvc.getall().subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    generatePDF(){
      const pdf = new PdfMakeWrapper();
      let pdf1 = new jsPDF('p','pt','a2');
      
      pdf1.html(this.el.nativeElement,{
        callback: (pdf1)=>{
          pdf1.save("Sueldos.pdf");
        }
      });
      //pdf.add(
        //new Txt('Hello world').bold().italics().end
      //);
      //pdf.create().open();
      
    }
}
