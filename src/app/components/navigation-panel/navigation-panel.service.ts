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
      { url: 'about', name: 'information-circle', label: 'About'}
    ];
  }

  public get getMenuRoutes(): Array<NavRoutes>{
    return [
      { url: 'home', name: 'home', label: 'Home'},
      { url: 'profile', name: 'person-circle', label: 'Profile'},
      { url: 'settings', name: 'settings', label: 'Settings'},
      { url: 'about', name: 'information-circle', label: 'About'}
    ];
  }
}
