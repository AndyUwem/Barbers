import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

 public slidesImages: Array<ImageUrl> = [
   { src: 'assets/barbers-slide1.gif'},
   { src: 'assets/barbers-slide2.gif'},
   { src: 'assets/barbers-slide3.gif'},
 ];

  public cards = [
    {
       tab: '/apointment', iconName: 'cut',
       title: 'Book barbing appointment',
       subTitle: 'Schedule a new barbing session with your favourite barber.'
    },

    {
      tab: '/add-barber', iconName: 'person-add',
      title: 'Add new barber',
      subTitle: 'Add a new barber to your collection of barbers.'
   },

   {
    tab: '/my-barbers', iconName: 'globe',
    title: 'My barbers',
    subTitle: 'View all barbers that are linked to you.'
  },

 {
  tab: '/my-history', iconName: 'book',
  title: 'Check History',
  subTitle: 'View your histories with already linked barbers'
 }
];

constructor(private route: ActivatedRoute) { }

ngOnInit() {

}

}
