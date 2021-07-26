import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emp } from 'src/app/shared/models/admi.interface';
import { environment } from 'src/environments/environment';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'
const EXCEL_TYPE = 'application/vnd.openxmlformats-officeofficedocument.spreadsheet.sheet;charset = UTF-8';
const EXCEL_EXT = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }
  getall():Observable<Emp[]>{
    return this.http.get<Emp[]>(`/api/Empleados`)
    .pipe(catchError(this.handlerError));
  }
  getById(CodEmp:number):Observable<Emp>{
    return this.http.get<any>(`/api/Empleados/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Emp:Emp):Observable<Emp>{
    return this.http.post<Emp>(`/api/Empleados`,Emp)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Emp:Emp ):Observable<Emp>{
    return this.http.put<Emp>(`/api/Empleados/${CodEmp}`,Emp)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Emp>(`/api/Empleados/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  handlerError(error: { message: any; }):Observable<never>{
    let errorMessage = "Error Unknow";
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  excel(json:any[], excelFileName: string): void{
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook : XLSX.WorkBook = {Sheets : {'data': worksheet},
    SheetNames: ['data']
    };
    const excelBuffer : any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    this.saveExcel(excelBuffer, excelFileName);
  }
  private saveExcel(buffer: any, fileName : string){
    const data : Blob = new Blob([buffer], {type:EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_Excel' + EXCEL_EXT )
  }
  
}
