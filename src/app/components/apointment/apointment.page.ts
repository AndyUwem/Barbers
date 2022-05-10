import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
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
  public isServicesListView: boolean;
  public barbers: Array<Barber>;
  public selectedBarber: Barber;

  constructor(
    private navigationPanelService: NavigationPanelService,
    private apointmentService: ApointmentService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.onPageLoad();
  }

  public onOpenListItemsModal(selectedItemIndex: number){
          this.modalCtrl
          .create({
            component: ApointmentListViewComponent,
            componentProps: {
              recievedData: { selectedBarber: this.selectedBarber, selectedItemIndex }
            }
          })
          .then( modal => {
            modal.present();
            return modal.onDidDismiss();
          })
          .then( resultData => console.log(resultData));
  }

  public getSelectedBarber(index: number): void {
           this.isServicesListView = true;
           this.selectedBarber = {...this.barbers[index]};
      }

  private onPageLoad(): void {
    this.backButtonUrl = this.navigationPanelService.backToHomeUrl;
    this.apointmentListItems =  [...this.apointmentService.getApointmentListItems];
    this.isServicesListView = false;
    this.barbers = [...this.apointmentService.getAllBarbers()];
      }

}
