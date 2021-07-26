import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActividadEmpService } from './actividad-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import jsPDF, { jsPDFAPI } from 'jspdf';
@Component({
  selector: 'app-actividad-emp',
  templateUrl: './actividad-emp.component.html',
  styleUrls: ['./actividad-emp.component.scss']
})
export class ActividadEmpComponent implements OnInit {

  displayedColumns: string[] = ['Nombre','Celular','Direccion','Horas_Extras',
  'Dias_Puntual', 'Dias_Atrasado', 'Dias_que_Falto','Dias_Totales','Años_De_Antiguedad','Mes_de_informacion'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:ActividadEmpService,private dialog:MatDialog){
      
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
          pdf1.save("ActividadRealizada.pdf");
        }
      });
    }
    applyFilter(filterValue:string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  

}
