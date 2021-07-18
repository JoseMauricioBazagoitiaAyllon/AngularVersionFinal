import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeneficioEmpService {

  constructor(private http: HttpClient) { }
  getById(CodEmp:number):Observable<any>{
    return this.http.get<any>(`/api/beneficios_Informe/${CodEmp}`)
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
