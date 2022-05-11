import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { Barber } from 'src/app/interface/barber.interface';
import { SelectedItemFromChildList } from 'src/app/interface/selected-item-data.interface';
import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';
import { ApointmentService } from './apointment.service';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.page.html',
  styleUrls: ['./apointment.page.scss'],
})
export class ApointmentPage implements OnInit {

  public todaysDate: Date = new Date();
  public backButtonUrl: string;
  public apointmentListItems: Array<ApointmentListOptions>;
  public isServicesListView: boolean;
  public barbers: Array<Barber>;
  public selectedBarber: Barber;
  public apointmentOrderColection = new Set<SelectedItemFromChildList>();

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
              dataFromParent: { selectedBarber: this.selectedBarber, selectedItemIndex }
            }
          })
          .then( modal => {
            modal.present();
            return modal.onDidDismiss();
          })
          .then((resultData: any) =>{
           const selectedListItem = resultData.data.selectedListItem;

           this.populateNewApointmentList(selectedItemIndex, selectedListItem);
            console.log(selectedListItem, selectedItemIndex);
          });
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

    private populateNewApointmentList(listIndex: number, item: any): void{
        switch(listIndex){
          case 0:
          this.apointmentListItems[listIndex]
          .value = item.title;
          break;

          case 1:
          this.apointmentListItems[listIndex]
          .value = item.hairStyleName;
          break;

          case 2:
          this.apointmentListItems[listIndex]
          .value = item.title;
          break;

          case 3:
          this.apointmentListItems[listIndex]
          .value = item;
          break;

          case 4:
          this.apointmentListItems[listIndex]
          .value = item.cliperName;
          break;

          case 5:
          this.apointmentListItems[listIndex]
          .value = item.title;
          break;
     };
      }





}
