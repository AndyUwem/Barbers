import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barber } from 'src/app/interface/barber.interface';
import { User } from 'src/app/interface/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  private usersApi = environment.apiUrl;

      constructor(private http: HttpClient){}


      registerNewCustomer(user: User): Observable<User>{
        return this.http.post<User>(`${this.usersApi}/barbers/customers.json`, {...user });
      }

      addBarberToMyList(customerId: number, barber: Barber): Observable<Barber>{
            return this.http
                       .patch<Barber>(
                         `${this.usersApi}/barbers/customers/${customerId}/my-barbers/${barber.phone}.json`,
                          {...barber });
      }


     currentUser(): User{
        return {
        id:'8287272',
        address: '14 fight avenue',
        age:51,
        firstName:'James',
        gender:'M',
        email: 'ushshshsh@gmail.com',
        lastName:'Maddison',
        phone:8287272
          };
      }
}
