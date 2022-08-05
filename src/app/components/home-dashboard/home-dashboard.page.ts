import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomeDashboardService } from './home-dashboard.service';

type ImageUrl = {
  src: string;
};

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.page.html',
  styleUrls: ['./home-dashboard.page.scss'],
})

export class HomeDashboardPage {


  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoPlay: true
  };

 public slidesImages: Array<ImageUrl> = [];

  public cards = [];

constructor(
  private readonly menu: MenuController,
  private homeDashboardService: HomeDashboardService
  ) { }

ionViewWillEnter() {
this.cards = [...this.homeDashboardService.getCards];
this.slidesImages = [...this.homeDashboardService.getSlidesImages];
}

ionViewDidEnter(){
    this.menu.enable(true);
}

}
