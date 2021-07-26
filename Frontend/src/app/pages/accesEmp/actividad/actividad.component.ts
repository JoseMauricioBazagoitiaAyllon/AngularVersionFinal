import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActividadService } from './actividad.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ModalActividadComponent } from '../../accesAdmi/components/modal-actividad/modal-actividad.component';
import { Acti } from 'src/app/shared/models/empl.interface';
import { PdfMakeWrapper} from 'pdfmake-wrapper';
import { takeUntil } from 'rxjs/operators';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {
  filterElement = '';
  j1 = true;
  a = true;
  isChecked= false;
  textoA = "Edicion";
  displayedColumns: string[] = ['cod_Registros_Emp','Nombre','Horas_Extras',
'Dias_Puntual', 'Dias_Atrasado', 'Dias_que_Falto','Dias_Totales','Mes_de_informacion','actions'];//
//,'Anhos_De_Antiguedad'
  
dataSource = new MatTableDataSource();
private desrtroy$ = new Subject<any>();
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private ActSvc:ActividadService,private dialog:MatDialog){
    
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
  onOpenModal(Acti = {}): void{
    console.log('Actividad---->',Acti)
    const dialogRef = this.dialog.open(ModalActividadComponent,{
      height: '400px',
      width:'600px',
      hasBackdrop:false,
      data:{
        title:'Generar Actividades' , Acti
      } ,
    });
    dialogRef.afterClosed().subscribe(data=>{
      this.ActSvc.getall().subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    })
  }
  ngOnDestroy(): void{
    this.desrtroy$.next({});
    this.desrtroy$.complete();
  }
  onDelete(Acti:number):void{
    if(window.confirm("¿Enserio Quieres Eliminar este Acceso?")){
      this.ActSvc.delete(Acti)
      .pipe(takeUntil(this.desrtroy$))
      .subscribe((res)=>{
        window.alert("Acceso Eliminado");
      });
      this.ActSvc.getall().subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    }
 }
 generatePDF(){
  this.a = false;
  const pdf = new PdfMakeWrapper();
  let pdf1 = new jsPDF('p','pt','a2');
  pdf1.html(this.el.nativeElement,{
    callback: (pdf1)=>{ 
      pdf1.save("ACtividad.pdf");
      }
    });
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  actualizar(){
    if (this.isChecked ) {
      this.textoA = "Vista";
      this.displayedColumns= ['cod_Registros_Emp','Nombre','Horas_Extras',
      'Dias_Puntual', 'Dias_Atrasado', 'Dias_que_Falto','Dias_Totales','Mes_de_informacion'];
      this.ActSvc.getall().subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    } 
    else {
      this.textoA = "Edicion";
      this.displayedColumns= ['cod_Registros_Emp','Nombre','Horas_Extras',
      'Dias_Puntual', 'Dias_Atrasado', 'Dias_que_Falto','Dias_Totales','Mes_de_informacion','actions'];
      this.ActSvc.getall().subscribe((Act)=>{
        this.dataSource.data = Act;
      });
    }
    
  }
  excel():void{
    this.ActSvc.excel(this.dataSource.data, 'Empleados');
  }

}
