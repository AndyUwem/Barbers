import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationPanelService } from './navigation-panel.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.page.html',
  styleUrls: ['./navigation-panel.page.scss'],
})
export class NavigationPanelPage implements OnInit {

  public tabRoutes = [];
  public iconName: string;

  constructor(
    private navigationPanelService: NavigationPanelService,
    private navService: NavigationPanelService,
    private readonly menuCtrl: MenuController
    ) { }

  ngOnInit() {
    this.tabRoutes = [...this.navigationPanelService.getTabRoutes];
    this.iconName = 'reorder-three-outline';
  }

  onMenuButtonClick(){
    this.menuCtrl.toggle();
    this.navService.sideMenuIconName.asObservable()
    .subscribe({
      next: (iconName: string) =>{
        this.iconName = iconName;
      }
    });
  }
}
