import { Injectable } from '@angular/core';
import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { Barber } from 'src/app/interface/barber.interface';

@Injectable({
  providedIn: 'root'
})

export class ApointmentService {

  constructor() { }

  public get getApointmentListItems(): Array<ApointmentListOptions> {
    return [
      {
        title: 'Select hair service type',
        value: 'none'
      },
      {
        title: 'Select hair style',
        value: 'none'
      },
      {
        title: 'Do you wish to apply hair die ?',
        value: 'none'
      },
      {
        title: 'Select hair die color',
        value: 'none'
      },
      {
        title: 'Select prefered cliper brand',
        value: 'none'
      },
      {
        title: 'Do you wish to apply hair treatments ?',
        value: 'none'
      }
    ];
  }


 public getAllBarbers(): Array<Barber>{
    return [{
     companyName: 'Aron\'s Cut',
     companyImage: 'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/25-mens-dreadlocks-hairstyle.jpg?resize=500%2C586',
     cliper: [
       {
         id: '1',
        cliperName: 'Chaoba 1x0',
        cliperImage: '',
        brand: 'chaoba'
      }
     ],
     hairStyle: [
       {
        id: '1001',
        hairStyleName: 'Afro',
        hairStyleImage: '',
        hairStyleCost: 50
      },
      {
        id: '1002',
        hairStyleName: 'Low Cut',
        hairStyleImage: '',
        hairStyleCost: 10
      }
     ],
     id: 0,
     firstName: 'Aron',
     lastName: 'Black',
     email: 'arronblack12@gmail.com',
     address: '31, sadin avenue',
     gender: 'Male',
     phone: 17128883984,
     hairServiceType: [
       { title: 'Home Service', subTitle: 'select if you want this apointment at your place.'},
       { title: 'Barber\'s Shop', subTitle: 'select if you want this apointment at the barber\'s shop.'},
      ],
     hairDieColors: ['Gold', 'Black'],
     hasHairTreatment: true
   }
  ];
 }


}
