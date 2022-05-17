import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Barber } from 'src/app/interface/barber.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MyBarbersService{


     constructor(private http: HttpClient){}


     public addNewBarber(barber: Barber): Observable<any>{
      return this.http.post(`${environment.apiUrl}/barbers/.json`, {...barber, id: null });
  }


  public getAllBarbers(): any {
     return this.http.get(environment.apiUrl+'.json');
  }

}
