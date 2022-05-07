import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  constructor() { }

  public get getApointmentListItems() {
    return [
      { 
        title: 'Select your hair service type',
        value: '.......' 
      },
      { 
        title: 'Select prefered hair style', 
        value: '.......' 
      }
    ]
  }
}
