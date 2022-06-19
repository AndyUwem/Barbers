import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';

import { Barber } from 'src/app/interface/barber.interface';
import { AddBarberPage } from '../add-barber/add-barber.page';
import { LoaderService } from '../loader/loader.service';
import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { MyBarbersService } from './my-barbers.service';

@Component({
  selector: 'app-my-barbers',
  templateUrl: './my-barbers.page.html',
  styleUrls: ['./my-barbers.page.scss'],
})
export class MyBarbersPage implements OnInit {

  @Output() showBarberPage = new EventEmitter<boolean>();
  @Input() isUsedAsChild: boolean;

  dataFromModal: string;
  public barbers: Array<Barber>;
  public selectedBarber: Barber;
  public backButtonUrl: string;
  public shouldShowContentsItems =  true;
  public isInternetAvailable =  true;
  public shouldShowEmptyList =  false;

  private myID = 8287272;

  constructor(
     private barbersService: MyBarbersService,
     private loaderService: LoaderService,
     private navigationPanelService: NavigationPanelService,
     private modalCtrl: ModalController
     ) { }



  ngOnInit() {
    this.onLoadBarbers();
  }

  public getSelectedBarber(index: number): void {
    this.selectedBarber = {...this.barbers[index]};
    this.showBarberPage.emit(false);
    this.barbersService.setSelectedBarber(this.selectedBarber);
}

public openAddBarberModal(): void{
 this.modalCtrl.create({
    component: AddBarberPage,
    componentProps: { myListOfBarbers: this.barbers },
    showBackdrop: false,
    swipeToClose: false
})
.then((addBarberModal: HTMLIonModalElement) => {
        addBarberModal.present();
        return addBarberModal.onDidDismiss();
})
.then(( returnedObject: {data: Barber; role: string}) =>{
  if(returnedObject.role !== 'success'){
    return;
   }

  const barber = returnedObject.data;
  let isBarberExist: boolean;

  for(const $barber in this.barbers){
    if(this.barbers[$barber].phone === barber.phone){
      isBarberExist = true;
      this.showItemExistToast('Duplicates Found!','This barber already exist!!');
      return;
    }
  }

  if(!isBarberExist){
      this.barbers.push(barber);
      isBarberExist = false;
      this.onBarbersListEmpty();
      this.showItemExistToast('Linking Successful!','Barber was added to your list');
      }
});

}


public deleteBarber(index: number, slidedItem: IonItemSliding): void{
    const barber: Barber = this.barbers[index];
    this.loaderService.load()
        .then((spinner: HTMLIonLoadingElement) => {
      spinner.present();

      this.barbersService
      .deleteBarberByIndex(this.myID, barber.phone)
      .subscribe({
        next: () => {
          spinner.dismiss();
          this.barbers.splice(index,1);

          slidedItem.close();
          this.loaderService
          .showToast('Deleted', 'Barber was deleted successfully!', 'bottom', 'success');
          this.onBarbersListEmpty();
        },
        error: () => {
          this.loaderService
              .showToast('Connection Error!', 'You\'re not connected to the internet', 'bottom', 'danger');
              spinner.dismiss();
        }
      });
    });
}


ionViewWillLeave(){
  this.isUsedAsChild = false;
}

private onLoadBarbers(): void{
  this.backButtonUrl = this.navigationPanelService.backToHomeUrl;
  this.loaderService.load()
  .then((spinner: HTMLIonLoadingElement) => {
    spinner.present();

    this.barbersService.fetchMyBarbers(this.myID)
    .subscribe({
      next: (responseData: Barber[]) => {

          this.barbers = [...responseData];
          this.onBarbersListEmpty();
        spinner.dismiss();
      },
      error: () => {
        this.isInternetAvailable = false;
        spinner.dismiss();
      }
    });
  });
}

private onBarbersListEmpty(): void{
  if(this.barbers.length <= 0 ){
    this.shouldShowEmptyList = true;
  }
  else {
    this.shouldShowEmptyList = false;
  }
}

private showItemExistToast(header: string, massage: string): void{
  this.loaderService
  .showToast(header, massage, 'bottom', 'dark');
}



// private newBarberObject(): Barber{
//   return {
//     id: '0',
//     firstName: 'Aron',
//     lastName: 'Black',
//     email: 'arronblack12@gmail.com',
//     address: '31, sadin avenue',
//     gender: 'Male',
//     phone: 17128883984,
//     companyName: 'Aron\'s Cut',
//     companyImage:
//       'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/25-mens-dreadlocks-hairstyle.jpg?resize=500%2C586',
//     cliper: [
//       {
//         id: '1',
//         cliperName: 'Chaoba 1x0',
//         cliperImage: '',
//         brand: 'chaoba',
//         cost: 5.00
//       },
//     ],
//     hairStyle: [
//       {
//         id: '1001',
//         hairStyleName: 'Afro',
//         hairStyleImage: '',
//         cost: 20.00,
//       },
//       {
//         id: '1002',
//         hairStyleName: 'Low Cut',
//         hairStyleImage: '',
//         cost: 2.13,
//       },
//     ],
//     hairServiceType: [
//       {
//         title: 'Home Service',
//         subTitle: 'set this apointment at your place.',
//         cost: 10.10
//       },
//       {
//         title: 'Barber\'s Shop',
//         subTitle:
//           'set this apointment at the barber\'s shop.',
//           cost: 6.20
//       },
//     ],
//     hairDieColors: [
//       { color: 'Gold', cost: 5.00 },
//       { color: 'Black', cost: 4.00 },
//       { color: 'None', cost: 0.00 }
//     ],
//     hairTreatmentOptions: [
//       { option: 'Yes', cost: 1.30 },
//       { option: 'No', cost: 0.00 }
//       ]
//   };
// }

}
