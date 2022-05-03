import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.page.html',
  styleUrls: ['./back-button.page.scss'],
})
export class BackButtonPage implements OnInit {
  
 @Input('url') url: string;

  constructor() { }

  ngOnInit() {
  }

}
