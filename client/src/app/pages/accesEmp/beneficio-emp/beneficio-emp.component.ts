import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BeneficioEmpService } from './beneficio-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-beneficio-emp',
  templateUrl: './beneficio-emp.component.html',
  styleUrls: ['./beneficio-emp.component.scss']
})
export class BeneficioEmpComponent implements OnInit {

  displayedColumns: string[] = ['nombre','Anhos_Antiguedad','porcentaje_Antiguedad','Beneficio_Antiguedad',
  'Horas_Extras', 'Pago_Horas_Extras', 'mes'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:BeneficioEmpService,private dialog:MatDialog){
      
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
