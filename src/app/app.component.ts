import { Component, OnInit } from '@angular/core';
import { Barber } from './interface/barber.interface';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

   public isLoading: boolean = true;
  
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' }
  ];
  public labels = ['Family', 'Friends'];

  constructor() {}

  ngOnInit() {
     this.loadApplication();
  }

  private loadApplication() {
        setTimeout(() => this.isLoading = false, 5000)
  }


}
