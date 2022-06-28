import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookedAppointment } from 'src/app/interface/booked-appointment.interface';

@Component({
  selector: 'app-appointment-details-view',
  templateUrl: './appointment-details-view-component.html',
  styleUrls: ['./appointment-details-view-component.scss'],
})
export class AppointmentDetailsViewComponent implements OnInit {

  @Input() selectedBooking: BookedAppointment;

  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {}


  closeAppointmentDetails(): void{
    this.modalCtrl.dismiss();
  }
}
