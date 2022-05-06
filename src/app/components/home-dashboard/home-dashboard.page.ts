import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeDashboardService } from './home-dashboard.service';

type ImageUrl = {
  src: string;
};

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.page.html',
  styleUrls: ['./home-dashboard.page.scss'],
})

export class HomeDashboardPage implements OnInit {


  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoPlay: true
  };

 public slidesImages: Array<ImageUrl> = [];

  public cards = [];

constructor(private homeDashboardService: HomeDashboardService) { }

ngOnInit() {
this.cards = [...this.homeDashboardService.getCards];
this.slidesImages = [...this.homeDashboardService.getSlidesImages];
}

}
