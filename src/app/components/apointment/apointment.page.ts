import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { ApointmentService } from './apointment.service';

import { ApointmentListOptions } from 'src/app/interface/apointmen-list-options.interface';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';
import { Barber } from 'src/app/interface/barber.interface';
import { Router } from '@angular/router';
import { MyBarbersService } from '../my-barbers/my-barbers.service';
import { TransactionStatusComponent } from 'src/app/reuseables/transaction-status/transaction-status.component';
import { LoaderService } from '../loader/loader.service';
import { BookedAppointment } from 'src/app/interface/booked-appointment.interface';
import { AccountsService } from '../accounts/accounts.service';

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
    private modalCtrl: ModalController,
    private loadingCtr: LoadingController,
    private router: Router,
    private navigationPanelService: NavigationPanelService,
    private loaderService: LoaderService,
    private myBarberService: MyBarbersService,
    private apointmentService: ApointmentService,
    private accountService: AccountsService
    ) { }

  ngOnInit() {
    this.onPageLoad();
  }


  public calculateBookingCost(): void{
    for( const [key, value] of this.apointmentOrderColection ){
        this.totalOrderCost += Number(value.cost);
        }
      this.showCostLoadingIndicator();
  }

  public bookApointment(): void {
     this.loadingCtr.create({
       spinner: 'dots',
       message: 'Booking...',
       keyboardClose: true
     })
     .then((spinner: HTMLIonLoadingElement) => {
       spinner.present();

      this.apointmentService
          .addToMyAppointments(Number(this.accountService.currentUser().id), this.buildNewAppointment())
          .subscribe({
            next: (resultData: any) => {
                spinner.dismiss();
                this.onOpenTransactionStatusModal();
                console.log(resultData);
            },
            error: () => {
              spinner.dismiss();
              this.loaderService
              .showToast('Connection Error!', 'You\'re not connected to the internet', 'top', 'danger');
            }
          });
     });
  }

  public cancelApointment(): void{
          this.router.navigateByUrl(this.navigationPanelService.backToHomeUrl);
  }

  public onShowBarberPage(emitedData: boolean): void{
          this.isSelectBabrberView = emitedData;
          this.myBarberService
              .getSelectedBarber()
              .subscribe((barber: Barber) => this.selectedBarber = barber);
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

  private onOpenTransactionStatusModal(): void{
        this.modalCtrl.create({
          component: TransactionStatusComponent,
          componentProps: {
            inputDataFromParent:  '/navigation-panel/nav/home'
          }
        })
        .then((modal: HTMLIonModalElement) => {
            modal.present();
            return modal.onDidDismiss();
        });
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

      private buildNewAppointment(): BookedAppointment{
        const newBookingSelections = [];
        this.apointmentOrderColection
            .forEach((item: any) => newBookingSelections.push(item));

        const newAppointment = {
            customer: this.accountService.currentUser(),
            hairServiceType: newBookingSelections[0].title,
            hairStyleName: newBookingSelections[1].hairStyleName,
            hairStyleImage: newBookingSelections[1].hairStyleImage,
            hairDieColor: newBookingSelections[2].color,
            cliperBrand: newBookingSelections[3].brand,
            cliperName: newBookingSelections[3].cliperName,
            cliperImage: newBookingSelections[3].cliperImage,
            hairTreatments: newBookingSelections[4].option,
            apointmentDate: this.todaysDate.toUTCString(),
            totalCost: this.totalOrderCost
          };

            return newAppointment;

      }

      private showCostLoadingIndicator(): void{
        this.loadingCtr.create({
          message: 'Calculating Cost...',
          keyboardClose: true,
          spinner: 'bubbles',
          cssClass: 'success'
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
