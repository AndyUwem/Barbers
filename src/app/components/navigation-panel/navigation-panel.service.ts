import { Injectable } from '@angular/core';
import { NavRoutes } from 'src/app/interface/navigation-routes.interface';


@Injectable({
  providedIn: 'root'
})

export class NavigationPanelService {

  public backToHomeUrl = '/navigation-panel/nav/home';

  constructor() { }

  public get getTabRoutes(): Array<NavRoutes>{
    return [
      { url: 'home', name: 'home', label: 'Home'},
      { url: 'profile', name: 'person-circle', label: 'Profile'},
    ];
  }

  public get getMenuRoutes(): Array<NavRoutes>{
    return [
      { url: '/', name: 'home', label: 'Home'},
      { url: '/apointment', name: 'cut', label: 'Book'},
      { url: '/my-appointments', name: 'time', label: 'Appointments'},
      { url: '/my-barbers', name: 'globe', label: 'Your Barbers'},
      { url: '/about', name: 'information-circle', label: 'About'}
    ];
  }

}
