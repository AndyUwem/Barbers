
import { Injectable } from '@angular/core';



import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';


@Injectable({
  providedIn: 'root',
})
export class ApointmentService {

  constructor() {}

  public get getApointmentListItems(): Array<ApointmentListOptions> {
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

}
