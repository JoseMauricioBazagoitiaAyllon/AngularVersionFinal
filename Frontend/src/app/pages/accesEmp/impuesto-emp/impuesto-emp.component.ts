import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ImpuestoEmpService } from './impuesto-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-impuesto-emp',
  templateUrl: './impuesto-emp.component.html',
  styleUrls: ['./impuesto-emp.component.scss']
})
export class ImpuestoEmpComponent implements OnInit {

  displayedColumns: string[] = ['Empleado','Nombre_impuesto','Porcentaje_Impuesto','Impuestos_a_Pagar',
  'mes'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:ImpuestoEmpService,private dialog:MatDialog){
      
    } 
  
    ngOnInit(): void {
      const id = <number><unknown>localStorage.getItem('id');
      this.ActSvc.getById(id).subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    handlerError(error: { message: any; }):Observable<never>{
      let errorMessage = "Error Unknow";
      if (error) {
        errorMessage = `Error ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
}
