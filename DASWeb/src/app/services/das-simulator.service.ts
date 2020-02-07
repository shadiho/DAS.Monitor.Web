import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule,HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import {Appointment} from '../models/Appointment';

const httpOptions={
  headers: new HttpHeaders({
  'content-type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DasSimulatorService {
  appointment:Appointment;
  appointmentCreationSrvUrl:string = 'http://localhost:5000/api/v1/appointments/Book';
  appointmentCancelationSrvUrl:string = 'http://localhost:5000/api/v1/appointments/Cancel';
  constructor(private http:HttpClient) { }
  createAppointment(appointment:Appointment):Observable<any>{
    return this.http.post(this.appointmentCreationSrvUrl,appointment,httpOptions);
  }
  cancelAppointment(appointment:Appointment):Observable<any>{
    
    return this.http.post(this.appointmentCancelationSrvUrl,appointment,httpOptions);
  }
}
