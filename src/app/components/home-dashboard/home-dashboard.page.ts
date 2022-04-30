import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.page.html',
  styleUrls: ['./home-dashboard.page.scss'],
})
export class HomeDashboardPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }


  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoPlay: true
  };

 public slidesImages: Array<{}> = [
   { src: 'assets/barbers-slide1.gif'},
   { src: ''}
 ]

  public cards = [
    { 
       tab: 'home', iconName: 'cut',
       title: 'Book barbing apointment',
       subTitle: 'Schedule a new barbing session with your favourite barber.'
    },

    { 
      tab: 'home', iconName: 'person-add',
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
