import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationPanelService {


  constructor() { }

  public get getTabRoutes(){
    return [
      { url: 'home', name: 'home', label: 'Home'},
      { url: 'settings', name: 'settings', label: 'Settings'},
      { url: 'about', name: 'information-circle', label: 'About'}
    ];
  }


}
