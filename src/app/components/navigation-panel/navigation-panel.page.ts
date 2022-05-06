import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.page.html',
  styleUrls: ['./navigation-panel.page.scss'],
})
export class NavigationPanelPage implements OnInit {

  public navigationItems = [
    { tab: 'home', name: 'home', label: 'Home'},
    { tab: 'settings', name: 'settings', label: 'Settings'},
    { tab: 'about', name: 'information-circle', label: 'About'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
