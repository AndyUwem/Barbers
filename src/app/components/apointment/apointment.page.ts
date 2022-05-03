import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.page.html',
  styleUrls: ['./apointment.page.scss'],
})
export class ApointmentPage implements OnInit {

  public back_button_url: string = '/navigation-panel/home';

  constructor() { }

  ngOnInit() {
  }

}
