import { ElementRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy   } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FacturasEmpService } from './facturas-emp.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFacurasComponent } from '../../accesAdmi/components/modal-facuras/modal-facuras.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-facturas-emp',
  templateUrl: './facturas-emp.component.html',
  styleUrls: ['./facturas-emp.component.scss']
})
export class FacturasEmpComponent implements OnInit {

  displayedColumns: string[] = ['nombre','Codigo_Factura','empresa_factura','Cantidad',
  'Mes_Descargo'];//
  //,'Anhos_De_Antiguedad'
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private ActSvc:FacturasEmpService,private dialog:MatDialog){
      
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
  onOpenModal(Admi = {}): void{
    console.log('Acceso---->',Admi)
    const dialogRef = this.dialog.open(ModalFacurasComponent,{
      height: '400px',
      width:'600px',
      hasBackdrop:false,
      data:{
        title:'Nuevo Acceso' , Admi
      } ,
    });
    dialogRef.afterClosed().subscribe(data=>{
      const id = <number><unknown>localStorage.getItem('id');
      this.ActSvc.getById(id).subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    })
  }
  generatePDF(){
    let pdf1 = new jsPDF('p','pt','a2');
    pdf1.html(this.el.nativeElement,{
      callback: (pdf1)=>{
        pdf1.save("Impuestos.pdf");
      }
    });
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
