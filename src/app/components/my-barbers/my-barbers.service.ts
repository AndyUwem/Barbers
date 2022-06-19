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

     public fetchMyBarbers(myId: number): Observable<Barber[]> {
      return this.http
             .get<{[key: string]: Barber[]}>(`${environment.apiUrl}barbers/customers/${myId}/my-barbers.json`)
             .pipe(map((responseData: {[key: string]: Barber[]}) => this.getBarberObjects(responseData)),
             tap((barber: Barber[]) => barber));
   }

     public addNewBarber(barber: Barber): Observable<any>{
      return this.http.post(`${environment.apiUrl}barbers.json`, {...barber, id: null });
    }


  public findBarberByPhone(phone: number): Observable<Barber>{
       return this.http
        .get<Barber>(`${environment.apiUrl}barbers/list-of-barbers.json?orderBy="phone"&equalTo=${phone}`)
        .pipe(map((responseData: Barber) => this.getBarberObjects(responseData)[0]),
         tap(barber => barber));
  }

  public deleteBarberByIndex(myId: number, barberId: number): Observable<Barber>{
  return this.http.delete<Barber>(`${environment.apiUrl}barbers/customers/${myId}/my-barbers/${barberId}.json`);
  }

   public setSelectedBarber(barber: Barber): void {
        this.barberObservable.next(barber);
   }

   public getSelectedBarber(): Observable<Barber| Array<Barber>> {
        return this.barberObservable.asObservable();
  }


  private getBarberObjects(responseData: any): Barber[]{
    const barbers: Barber[] = [];

    for(const key in responseData){
      if(responseData.hasOwnProperty(key)){

        barbers.push({
          id: key,
          companyName: responseData[key].companyName,
          companyImage: responseData[key].companyImage,
          cliper: responseData[key].cliper,
          hairStyle: responseData[key].hairStyle,
          hairServiceType: responseData[key].hairServiceType,
          hairDieColors: responseData[key].hairDieColors,
          hairTreatmentOptions: responseData[key].hairTreatmentOptions,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          email: responseData[key].email,
          address: responseData[key].address,
          gender: responseData[key].gender,
          phone: responseData[key].phone,
          age: responseData[key].age
        });
      }
    }

    return barbers;
  }
}
