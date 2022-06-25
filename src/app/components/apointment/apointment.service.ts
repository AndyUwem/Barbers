
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApointmentService {

  private usersApi = environment.apiUrl;

  constructor(private http: HttpClient) {}

   get getApointmentListItems(): Array<ApointmentListOptions> {
    return [
      {
        title: 'Select hair service type',
        value: 'none',
      },
      {
        title: 'Select hair style',
        value: 'none',
      },
      {
        title: 'Select hair die',
        value: 'none',
      },
      {
        title: 'Select prefered cliper brand',
        value: 'none',
      },
      {
        title: 'Do you wish to apply hair treatments ?',
        value: 'none',
      },
    ];
  }


  addToMyAppointments(customerId: number, appointment: any): Observable<any>{
    return this.http
               .post<any>(
                 `${this.usersApi}/barbers/customers/${customerId}/my-appointments.json`,
                  {...appointment });
}
}
