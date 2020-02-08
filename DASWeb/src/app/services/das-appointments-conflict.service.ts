import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { AppointmensConflictModel } from '../models/AppointmentsConflictModel';

@Injectable({
  providedIn: 'root'
})
export class DasAppointmentsConflictService {
  appointmentsConflictSrvUrl:string ='http://localhost:53585/api/v1/AppointmentConflictsController/GetConflicts';
  appointmentsConlficts:AppointmensConflictModel[];
  constructor(private http:HttpClient) { }
  getAppointmentsConflict():Observable<AppointmensConflictModel[]>{
    return this.http.get<AppointmensConflictModel[]>(this.appointmentsConflictSrvUrl)
    .pipe(
      retry(5),
      catchError(this.handleError),
      )
    ;
  }
  handleError(error: HttpErrorResponse){
    return throwError(error);
  }
}
 

