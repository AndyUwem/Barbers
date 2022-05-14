import { Injectable } from '@angular/core';
import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { Barber } from 'src/app/interface/barber.interface';

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

  public getAllBarbers(): Array<Barber> {
    return [
      {
        id: 0,
        firstName: 'Aron',
        lastName: 'Black',
        email: 'arronblack12@gmail.com',
        address: '31, sadin avenue',
        gender: 'Male',
        phone: 17128883984,
        companyName: 'Aron\'s Cut',
        companyImage:
          'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/25-mens-dreadlocks-hairstyle.jpg?resize=500%2C586',
        cliper: [
          {
            id: '1',
            cliperName: 'Chaoba 1x0',
            cliperImage: '',
            brand: 'chaoba',
            cost: 5.00
          },
        ],
        hairStyle: [
          {
            id: '1001',
            hairStyleName: 'Afro',
            hairStyleImage: '',
            cost: 50,
          },
          {
            id: '1002',
            hairStyleName: 'Low Cut',
            hairStyleImage: '',
            cost: 2.00,
          },
        ],
        hairServiceType: [
          {
            title: 'Home Service',
            subTitle: 'set this apointment at your place.',
            cost: 10.00
          },
          {
            title: 'Barber\'s Shop',
            subTitle:
              'set this apointment at the barber\'s shop.',
              cost: 6.00
          },
        ],
        hairDieColors: [
          { color: 'Gold', cost: 5.00 },
          { color: 'Black', cost: 4.00 },
          { color: 'None', cost: 0.00 }
        ],
        hairTreatmentOptions: [
          { option: 'Yes', cost: 1.00 },
          { option: 'No', cost: 0.00 }
          ]
      },
    ];
  }
}
