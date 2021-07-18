import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fac } from 'src/app/shared/models/admi.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }
  getall():Observable<Fac[]>{
    return this.http.get<Fac[]>(`/api/ViewFacturas`)
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
