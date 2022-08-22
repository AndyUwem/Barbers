import { Component, OnInit } from '@angular/core';
import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public backToHomeUrl: string;

  constructor(private navService: NavigationPanelService) { }

  ngOnInit() {
    this.backToHomeUrl = this.navService.backToHomeUrl;
  }


}
