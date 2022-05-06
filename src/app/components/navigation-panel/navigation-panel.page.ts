import { Component, OnInit } from '@angular/core';
import { NavigationPanelService } from './navigation-panel.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.page.html',
  styleUrls: ['./navigation-panel.page.scss'],
})
export class NavigationPanelPage implements OnInit {

  public tabRoutes = [];

  constructor(private navigationPanelService: NavigationPanelService) { }

  ngOnInit() {
    this.tabRoutes = [...this.navigationPanelService.getTabRoutes];
  }

}
