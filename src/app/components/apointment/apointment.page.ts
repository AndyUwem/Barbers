import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { ApointmentService } from './apointment.service';

import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';
import { Barber } from 'src/app/interface/barber.interface';
import { Router } from '@angular/router';
import { MyBarbersService } from '../my-barbers/my-barbers.service';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.page.html',
  styleUrls: ['./apointment.page.scss'],
})
export class ApointmentPage implements OnInit {

  public selectedBarber: Barber;
  public todaysDate: Date = new Date();
  public apointmentOrderColection = new Map();

  public apointmentListItems: Array<ApointmentListOptions>;
  public backButtonUrl: string;

  public isSelectBabrberView: boolean;
  public isCalculateTotalCost = true;
  public hasChildComponent =  true;
  public totalOrderCost = 0;

  constructor(
    private navigationPanelService: NavigationPanelService,
    private apointmentService: ApointmentService,
    private myBarberService: MyBarbersService,
    private modalCtrl: ModalController,
    private loadingCtr: LoadingController,
    private router: Router
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
              if(resultData.role === 'selected'){
                const selectedListItem = resultData.data.selectedListItem;

                this.populateNewApointmentList(selectedItemIndex, selectedListItem);
                 console.log(selectedListItem, selectedItemIndex);
                 this.resetCost();
              }
          });
  }

  public calculateBookingCost(): void{
    for( const [key, value] of this.apointmentOrderColection ){
        this.totalOrderCost += Number(value.cost);
        }
      this.showCostLoadingIndicator();
  }

  public bookApointment(): void {
          console.log(this.apointmentOrderColection.size);
  }

  public cancelApointment(): void{
          this.router.navigateByUrl(this.navigationPanelService.backToHomeUrl);
  }

  public onShowBarberPage(emitedData: boolean): void{
          this.isSelectBabrberView = emitedData;
          this.myBarberService.getSelectedBarber()
          .subscribe((barber: Barber) => this.selectedBarber = barber);
  }

  private onPageLoad(): void {
    this.backButtonUrl = this.navigationPanelService.backToHomeUrl;
    this.apointmentListItems =  [...this.apointmentService.getApointmentListItems];
    this.isSelectBabrberView = true;
      }

    private populateNewApointmentList(listIndex: number, item: any): void{
        switch(listIndex){
          case 0:
          this.apointmentListItems[listIndex]
          .value = item.title;
          this.apointmentOrderColection.set(listIndex, item);
          break;

          case 1:
          this.apointmentListItems[listIndex]
          .value = item.hairStyleName;
          this.apointmentOrderColection.set(listIndex, item);
          break;

          case 2:
          this.apointmentListItems[listIndex]
          .value = item.color;
          this.apointmentOrderColection.set(listIndex, item);
          break;

          case 3:
          this.apointmentListItems[listIndex]
          .value = item.cliperName;
          this.apointmentOrderColection.set(listIndex, item);
          break;

          case 4:
          this.apointmentListItems[listIndex]
          .value = item.option;
          this.apointmentOrderColection.set(listIndex, item);
          break;
     };
      }

      private showCostLoadingIndicator(): void{
        this.loadingCtr.create({
          message: 'Calculating Cost...',
          keyboardClose: true,
          spinner: 'bubbles'
        })
        .then( loadingEl => {
            loadingEl.present();
            setTimeout(()=>{
              loadingEl.dismiss();
              this.isCalculateTotalCost = false;
            }, 3000);
        });
      }

      private resetCost(): void{
        this.isCalculateTotalCost = true;
        this.totalOrderCost = 0;
      }





}
