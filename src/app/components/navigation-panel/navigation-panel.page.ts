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
    { tab: 'home', name: 'home-outline', label: 'Home'},
    { tab: 'history', name: 'book-outline', label: 'Schedule'},
    { tab: 'settings', name: 'settings-outline', label: 'settings'}
  ]


}
