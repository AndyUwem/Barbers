import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.page.html',
  styleUrls: ['./home-dashboard.page.scss'],
})
export class HomeDashboardPage implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoPlay: true
  };

 public slidesImages: Array<{}> = [
   { src: 'assets/barbers-slide1.gif'},
   { src: 'assets/barbers-slide2.gif'},
   { src: 'assets/barbers-slide3.gif'},
 ]

  public cards = [
    { 
       tab: '/apointment', iconName: 'cut',
       title: 'Book barbing appointment',
       subTitle: 'Schedule a new barbing session with your favourite barber.'
    },

    { 
      tab: '/home', iconName: 'person-add',
      title: 'Add new barber',
      subTitle: 'Add a new barber to your collection of barbers.'
   },

   { 
    tab: 'home', iconName: 'globe',
    title: 'My barbers',
    subTitle: 'View all barbers that are linked to you.'
  },

 { 
  tab: 'home', iconName: 'book',
  title: 'Check History',
  subTitle: 'View your histories with already linked barbers'
 }
]

}
