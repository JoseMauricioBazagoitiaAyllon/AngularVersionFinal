import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Act } from 'src/app/shared/models/empl.interface';
import { Acti, Mes } from 'src/app/shared/models/empl.interface';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx'
const EXCEL_TYPE = 'application/vnd.openxmlformats-officeofficedocument.spreadsheet.sheet;charset = UTF-8';
const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http:HttpClient) { }
  getall():Observable<Act[]>{
    return this.http.get<Act[]>(`/api/Actividad_De_Empleado`)
    .pipe(catchError(this.handlerError));
  }
  newM(Mes:Mes):Observable<Mes>{
    return this.http.post<Mes>('/api/AutomaticAct',Mes)
    .pipe(catchError(this.handlerError))
  }
  new(Acti:Acti):Observable<Acti>{
    return this.http.post<Acti>(`/api/RE`,Acti)
    .pipe(catchError(this.handlerError));
  }
  update(CodEmp:number, Acti:Acti ):Observable<Acti>{
    return this.http.put<Acti>(`/api/RE/${CodEmp}`,Acti)
    .pipe(catchError(this.handlerError));
  }
  delete(CodEmp : number):Observable<{}>{
    return this.http.delete<Acti>(`/api/RE/${CodEmp}`)
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
