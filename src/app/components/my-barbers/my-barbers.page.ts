import { Component, EventEmitter, Input, OnInit, Output, DoCheck, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
import { MyBarbersService } from './my-barbers.service';

@Component({
  selector: 'app-my-barbers',
  templateUrl: './my-barbers.page.html',
  styleUrls: ['./my-barbers.page.scss'],
})
export class MyBarbersPage implements OnInit, DoCheck, OnDestroy {

  @Output() showBarberPage = new EventEmitter<boolean>();

  public barbers: Array<Barber>;
  public selectedBarber: Barber;
  
  @Input() isUsedAsChild: boolean;
  public isCalledFromBarbersPage =  true;

  constructor(
     private barbersService: MyBarbersService,
     private loadingCtrl: LoadingController,
     ) { }


    ngDoCheck(){
     if(this.isUsedAsChild)
        this.isCalledFromBarbersPage = false;

        else
        this.isCalledFromBarbersPage = true;
    }


  ngOnInit() {
    this.onLoadBarbers();
  }

  public getSelectedBarber(index: number): void {
    // this.isServicesListView = true;
    this.selectedBarber = {...this.barbers[index]};
    this.showBarberPage.emit(false);
    this.barbersService.setSelectedBarber(this.selectedBarber);
}

public addBarber(): void{
  // this.barbersService.addNewBarber(this.newBarberObject())
  // .subscribe((responseData: string) => console.log(responseData));
}

private onLoadBarbers(): void{
  this.loadingBarbersIndicator()
  .then((loader: HTMLIonLoadingElement) => {
    loader.present();

    this.barbersService.getAllBarbers()
    .subscribe((responseData: Barber[]) => {
      this.barbers = [...responseData];
      loader.dismiss();
    });
  });


}

private loadingBarbersIndicator(){
  return this.loadingCtrl.create({
    animated: true,
    spinner: 'dots',
    keyboardClose: true,
    message: 'loading please wait...'
  });
}

ngOnDestroy(){
  console.log('my barbers componet has been destroyed!');
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
