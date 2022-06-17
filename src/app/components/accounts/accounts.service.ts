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
        return this.http.patch<User>(`${this.usersApi}/barbers/customers/${user.id}.json`, {...user });
      }

      addBarberToMyList(id: number, barber: Barber): Observable<Barber>{
            return this.http
                       .patch<Barber>(
                         `${this.usersApi}/barbers/customers/${id}/my-barbers/${barber.phone}.json`,
                          {...barber });
      }


}
