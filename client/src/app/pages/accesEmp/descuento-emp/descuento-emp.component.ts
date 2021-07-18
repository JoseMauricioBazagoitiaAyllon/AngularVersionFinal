import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DescuentoEmpService } from './descuento-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-descuento-emp',
  templateUrl: './descuento-emp.component.html',
  styleUrls: ['./descuento-emp.component.scss']
})
export class DescuentoEmpComponent implements OnInit {
  displayedColumns: string[] = ['Empleado','Descuento','Porcentaje','Descuentos_a_Pagar_Total',
  'mes'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:DescuentoEmpService,private dialog:MatDialog){
      
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
  
}
