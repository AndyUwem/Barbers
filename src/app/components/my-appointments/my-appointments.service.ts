import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookedAppointment } from 'src/app/interface/booked-appointment.interface';
import { environment } from 'src/environments/environment';
import { AccountsService } from '../accounts/accounts.service';


@Injectable({
  providedIn: 'root'
})
export class MyAppointmentsService {

  private usersApi = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private accountService: AccountsService
    ){ }

  findMyAppointments(customerId: number): Observable<any>{
    return this.http
               .get<BookedAppointment[]>
               (`${this.usersApi}/barbers/customers/${customerId}/my-appointments.json`)
               .pipe(map(
                 (appointment: BookedAppointment[] ) =>this.getBarberObjects(appointment)
                 ));
  }

  private getBarberObjects(responseData: BookedAppointment[]): BookedAppointment[]{
    const appointments: BookedAppointment[] = [];

    for(const key in responseData){
      if(responseData.hasOwnProperty(key)){

        appointments.push({
          bookingId: key,
          customer: responseData[key].customer,
          hairStyleName: responseData[key].hairStyleName,
          hairStyleImage: responseData[key].hairStyleImage,
          hairServiceType: responseData[key].hairServiceType,
          hairDieColor: responseData[key].hairDieColor,
          hairTreatments: responseData[key].hairTreatments,
          cliperBrand: responseData[key].cliperBrand,
          cliperName: responseData[key].cliperName,
          cliperImage: responseData[key].cliperImage,
          apointmentDate: responseData[key].apointmentDate,
          totalCost: responseData[key].totalCost,
        });
      }
    }

    return appointments;
  }
}
