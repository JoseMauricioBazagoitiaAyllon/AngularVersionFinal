import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Act } from 'src/app/shared/models/empl.interface';
@Injectable({
  providedIn: 'root'
})
export class SueldoService {
  constructor(private http:HttpClient) { }
  getall():Observable<any>{
    return this.http.get<any>(`/api/Total_Sueldo_informe`)
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
