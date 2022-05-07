import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';
import { ApointmentService } from './apointment.service';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.page.html',
  styleUrls: ['./apointment.page.scss'],
})
export class ApointmentPage implements OnInit {

  public backButtonUrl: string;
  public apointmentListItems = [];

  constructor(
    private navigationPanelService: NavigationPanelService,
    private apointmentService: ApointmentService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.backButtonUrl = this.navigationPanelService.backToHomeUrl;
    this.apointmentListItems =  [...this.apointmentService.getApointmentListItems];
  }

  public onOpenListItems(index: number){
          this.modalCtrl
          .create({ component: ApointmentListViewComponent, componentProps: { index } })
          .then( modal => {
            modal.present();
            return modal.onDidDismiss();
          })
          .then( resultData => console.log(resultData.data.index));
  }


}
