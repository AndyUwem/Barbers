import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.page.html',
  styleUrls: ['./add-barber.page.scss'],
})
export class AddBarberPage implements OnInit {

  public back_button_url: string = '/navigation-panel/home';
  
  constructor() { }

  ngOnInit() {
  }

}
