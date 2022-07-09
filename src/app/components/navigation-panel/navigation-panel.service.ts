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
      { url: '/', name: 'home', label: 'Home'},
      { url: 'navigation-panel/nav/profile', name: 'person-circle', label: 'Profile'},
      { url: 'navigation-panel/nav/settings', name: 'settings', label: 'Settings'},
      { url: 'navigation-panel/nav/about', name: 'information-circle', label: 'About'}
    ];
  }
}
