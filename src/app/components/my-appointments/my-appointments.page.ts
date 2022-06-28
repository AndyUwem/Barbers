import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookedAppointment } from 'src/app/interface/booked-appointment.interface';
import { LoaderService } from '../loader/loader.service';
import { MyAppointmentsService } from './my-appointments.service';
import { AppointmentDetailsViewComponent } from './appointment-details-view/appointment-details-view-component';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

   appointments: BookedAppointment[];

  constructor(
    private myAppointmentsService: MyAppointmentsService,
    private loader: LoaderService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {}

  ionViewDidEnter(){
    this.onPageLoad();
  }

  viewBooking(selectedBooking: BookedAppointment): void{
  this.modalCtrl.create({
    component: AppointmentDetailsViewComponent,
    componentProps: { selectedBooking }
  })
  .then((modal: HTMLIonModalElement) => {
    modal.present();
  });


  }


  cancelBooking(): void{
    console.log('canceled');
  }


  private onPageLoad(): void{
    this.loader.load()
    .then((spinner: HTMLIonLoadingElement) => {
      spinner.present();

      this.myAppointmentsService
          .findMyAppointments(8287272)
          .subscribe({
                next: (_appointments: BookedAppointment[]) => {
                  spinner.dismiss();
                  if(_appointments !== []){
                      this.appointments = [..._appointments];
                  }
                },
                error: () => {
                  console.log('something went wrong');
                  spinner.dismiss();
                }
          });
    });
  }


}
