import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  constructor() { }

  public get getApointmentListItems() {
    return [
      {
        title: 'Select hair service type',
        value: '.......'
      },
      {
        title: 'Select hair style',
        value: '.......'
      },
      {
        title: 'Do you wish to apply hair die ?',
        value: '.......'
      },
      {
        title: 'Select hair die color',
        value: '.......'
      },
      {
        title: 'Select prefered cliper brand',
        value: '.......'
      },
      {
        title: 'Do you wish to apply hair treatments ?',
        value: '.......'
      },
      {
        title: 'Appointment Date',
        value: '.......'
      }
    ];
  }
}
