import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.page.html',
  styleUrls: ['./back-button.page.scss'],
})
export class BackButtonPage implements OnInit {

 @Input() url: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  public onBackButtonCtrl(): void {
      this.navCtrl.navigateBack(this.url);
  }
}
