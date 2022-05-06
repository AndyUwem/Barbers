import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDashboardService {

  constructor() { }


  public get getCards() {
    return [
      {
         tab: '/apointment', iconName: 'cut',
         title: 'Book barbing appointment',
         subTitle: 'Schedule a new barbing session with your favourite barber.'
      },
      {
        tab: '/add-barber', iconName: 'person-add',
        title: 'Add new barber',
        subTitle: 'Add a new barber to your collection of barbers.'
     },
     {
      tab: '/my-barbers', iconName: 'globe',
      title: 'My barbers',
      subTitle: 'View all barbers that are linked to you.'
    },
   {
    tab: '/my-history', iconName: 'book',
    title: 'Check History',
    subTitle: 'View your histories with already linked barbers'
   }
  ];
  }

public get getSlidesImages() {
  return [
    { src: 'assets/barbers-slide1.gif'},
    { src: 'assets/barbers-slide2.gif'},
    { src: 'assets/barbers-slide3.gif'},
  ];
}

}
