
import { ElementRef, Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy, AfterViewInit   } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from './empleados.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './components/modal/modal.component';
import{FormBuilder , Validators} from '@angular/forms'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit, AfterViewInit, OnDestroy {
  isChecked= false;
  textoA = "Edicion";
  displayedColumns: string[] = [ 'Cod_Emp','Nombre_Emp','Celular','Direccion','Cod_Dep',
'Cod_Rol', 'Cod_Sueldo', 'actions'];
  dataSource = new MatTableDataSource();

private desrtroy$ = new Subject<any>();
  @ViewChild('Table1',{static: false})
  el !: ElementRef;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private EmpSvc:EmpleadoService,private dialog:MatDialog){
    
  } 
  ngOnInit(): void {
    this.EmpSvc.getall().subscribe((Emp)=>{
      this.dataSource.data = Emp;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    
  }
  onDelete(Cod_Emp:number):void{
     if(window.confirm("¿Enserio Quieres Eliminar este Empleado?")){
       this.EmpSvc.delete(Cod_Emp)
       .pipe(takeUntil(this.desrtroy$))
       .subscribe((res)=>{
         window.alert("Usuario Eliminado");
       });
       this.EmpSvc.getall().subscribe((Emp)=>{
        this.dataSource.data = Emp;
      });
     }
  }
  onOpenModal(Emp = {}): void{
    console.log('Empleado---->',Emp)
    const dialogRef = this.dialog.open(ModalComponent,{
      height: '400px',
      width:'600px',
      hasBackdrop:false,
      data:{
        title:'Nuevo Empleado' , Emp
      } ,
    });
    //Recuperar
    dialogRef.afterClosed().subscribe(data=>{
      this.EmpSvc.getall().subscribe((Emp)=>{
        this.dataSource.data = Emp;
      });
    });
  }

  ngOnDestroy(): void{
    this.desrtroy$.next({});
    this.desrtroy$.complete();
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  actualizar(){
    if (this.isChecked ) {
      this.textoA = "Vista";
      this.displayedColumns= [ 'Cod_Emp','Nombre_Emp','Celular','Direccion','Cod_Dep',
      'Cod_Rol', 'Cod_Sueldo'];
      this.EmpSvc.getall().subscribe((Emp)=>{
        this.dataSource.data = Emp;
      });
    } 
    else {
      this.textoA = "Edicion";
      this.displayedColumns = [ 'Cod_Emp','Nombre_Emp','Celular','Direccion','Cod_Dep',
      'Cod_Rol', 'Cod_Sueldo', 'actions'];
      this.EmpSvc.getall().subscribe((Emp)=>{
        this.dataSource.data = Emp;
      });
    }
    
  }
  generatePDF(){
    let pdf1 = new jsPDF('p','pt','a2');
    pdf1.html(this.el.nativeElement,{
      callback: (pdf1)=>{
        pdf1.save("Impuestos.pdf");
      }
    });
  }
  excel():void{
    this.EmpSvc.excel(this.dataSource.data, 'Empleados');
  }

}
