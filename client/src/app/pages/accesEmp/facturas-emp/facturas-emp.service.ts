import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fact } from 'src/app/shared/models/empl.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturasEmpService {

  constructor(private http: HttpClient) { }
  getById(CodEmp:number):Observable<any>{
    return this.http.get<any>(`/api/VistaFacturas/${CodEmp}`)
    .pipe(catchError(this.handlerError));
  }
  new(Fact:Fact):Observable<Fact>{
    return this.http.post<Fact>(`/api/FacturasPresentadas`,Fact)
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
}
