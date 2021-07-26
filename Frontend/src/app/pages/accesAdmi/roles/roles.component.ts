
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RolesService } from './roles.service'; 
import { MatDialog } from '@angular/material/dialog';
import { ModalRolComponent } from '../components/modal-rol/modal-rol.component'; 
import{FormBuilder , Validators} from '@angular/forms'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RolesComponent implements OnInit {

  displayedColumns: string[] = ['Cod_Rol','Nombre_Rol', 'actions'];
    dataSource = new MatTableDataSource();
  
  private desrtroy$ = new Subject<any>();
  
    @ViewChild(MatSort)
    sort: MatSort = new MatSort;
    constructor(private RolSvc:RolesService,private dialog:MatDialog){
      
    } 
    ngOnInit(): void {
      this.RolSvc.getall().subscribe((Rol)=>{
        this.dataSource.data = Rol;
      });
    }
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
    onDelete(Cod_Rol:number):void{
       if(window.confirm("¿Enserio Quieres Eliminar este Rol?")){
         this.RolSvc.delete(Cod_Rol)
         .pipe(takeUntil(this.desrtroy$))
         .subscribe((res)=>{
           window.alert("Rol Eliminado");
         });
         this.RolSvc.getall().subscribe((Rol)=>{
          this.dataSource.data = Rol;
        });
       }
    }
    onOpenModal(Rol = {}): void{
      console.log('Rol---->',Rol)
      const dialogRef = this.dialog.open(ModalRolComponent,{
        height: '400px',
        width:'600px',
        hasBackdrop:false,
        data:{
          title:'Nuevo Rol' , Rol
        } ,
      });
      dialogRef.afterClosed().subscribe(data=>{
        this.RolSvc.getall().subscribe((Rol)=>{
          this.dataSource.data = Rol;
        });
      })
    }
  
    ngOnDestroy(): void{
      this.desrtroy$.next({});
      this.desrtroy$.complete();
    }
    applyFilter(filterValue:string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
