import { Component, OnInit, Input } from '@angular/core';
import {AppointmentOpLog} from '../../models/Appointment-op-log';
@Component({
  selector: 'app-dasappointment-op-log-item',
  templateUrl: './dasappointment-op-log-item.component.html',
  styleUrls: ['./dasappointment-op-log-item.component.css']
})
export class DASAppointmentOpLogItemComponent implements OnInit {

  @Input() opLog1:AppointmentOpLog
  constructor() { }

  ngOnInit() {
  }

  //set Dynamic Classes
  setClasses(){
    let Classes={
        container:true,
        bookContainer: this.opLog1.operation == "book",
        cancelContainer: this.opLog1.operation == "cancel"
    }
    return Classes;
  }

  setOpClass(){
    let classes={
      op:true,
      book: this.opLog1.operation == "book",
      cancel: this.opLog1.operation == "cancel"
    }
    return classes;
  }

}
