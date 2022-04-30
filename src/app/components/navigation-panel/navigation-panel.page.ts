import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.page.html',
  styleUrls: ['./navigation-panel.page.scss'],
})
export class NavigationPanelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public navigationItems = [
    { tab: 'home', name: 'home', label: 'Home'},
    { tab: 'history', name: 'settings', label: 'Settings'},
    { tab: 'settings', name: 'information-circle', label: 'About'}
  ]


}
