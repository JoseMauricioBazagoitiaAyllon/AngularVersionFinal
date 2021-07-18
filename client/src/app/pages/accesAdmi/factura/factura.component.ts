import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FacturaService } from './factura.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFacComponent } from '../components/modal-fac/modal-fac.component';
import{FormBuilder , Validators} from '@angular/forms'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import jsPDF, { jsPDFAPI } from 'jspdf';

@Component({
  selector: 'app-factura', 
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacturaComponent implements OnInit {
  displayedColumns: string[] = ['nombre','Codigo_Factura','empresa_factura','Cantidad',
  'Mes_Descargo'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private FacSvc:FacturaService,private dialog:MatDialog){
      
    } 
    @ViewChild('Table1',{static: false})
    el !: ElementRef;
    
    ngOnInit(): void {
      this.FacSvc.getall().subscribe((Emp)=>{
        this.dataSource.data = Emp;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
  
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }
    generatePDF(){
      let pdf1 = new jsPDF('p','pt','a2');
      pdf1.html(this.el.nativeElement,{
        callback: (pdf1)=>{
          pdf1.save("Impuestos.pdf");
        }
      });
    }
}
