import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Barber } from 'src/app/interface/barber.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MyBarbersService{

  private barberObservable = new Subject<Barber>();

     constructor(private http: HttpClient){}


     public addNewBarber(barber: Barber): Observable<any>{
      return this.http.post(`${environment.apiUrl}/barbers/.json`, {...barber, id: null });
    }

  public getAllBarbers(): Observable<Barber[]> {
     return this.http.get<{[key: string]: Barber[]}>(environment.apiUrl+'barbers.json')
            .pipe(map((data: any) =>{
              const barbers = [];
                  for(const key in data){
                    if(data.hasOwnProperty(key)){
                      const newBarberObject: Barber = {
                        companyName: data[key].companyName,
                        companyImage: data[key].companyImage,
                        cliper: data[key].cliper,
                        hairStyle: data[key].hairStyle,
                        hairServiceType: data[key].hairServiceType,
                        hairDieColors: data[key].hairDieColors,
                        hairTreatmentOptions: data[key].hairTreatmentOptions,
                        id: key,
                        firstName: data[key].firstName,
                        lastName: data[key].lastName,
                        email: data[key].email,
                        address: data[key].address,
                        gender: data[key].gender,
                        phone: data[key].phone
                      };
                      barbers.push(newBarberObject);
                    }
                  }

                  return barbers;
            }),
            tap((barber: Barber[]) => barber));
  }

   public setSelectedBarber(barber: Barber): void {
        this.barberObservable.next(barber);
   }

   public getSelectedBarber(): Observable<Barber> {
        return this.barberObservable.asObservable();
  }


}
