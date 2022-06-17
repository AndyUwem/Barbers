import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
import { AccountsService } from '../accounts/accounts.service';
import { LoaderService } from '../loader/loader.service';
import { MyBarbersService } from '../my-barbers/my-barbers.service';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.page.html',
  styleUrls: ['./add-barber.page.scss'],
})
export class AddBarberPage implements OnInit {


  public refCodeForm: FormGroup;
  public filteredBarber: Barber;
  public backButtonUrl: string;
  public isBarberValid = false;
  public barberSearchImages = ['assets/search-icon.png','assets/nodata-img.jpg'];
  public searchTitle: string;

  constructor(
    private modalCtrl: ModalController,
    private loaderService: LoaderService,
    private barberService: MyBarbersService,
    private accountsService: AccountsService
    ) { }

  ngOnInit() {
    this.onPageLoad();
    this.initializeRefCodeForm();
  }


  public cancelBarberSearchOperation(): void{
    this.modalCtrl.dismiss(null,'cancel');
  }


  public cancelBarberSearchResult(): void{
      this.isBarberValid = false;
      this.searchTitle = this.barberSearchImages[0];
      this.refCodeForm.reset();
  }


  public linkWithBarber(): void {
    this.loaderService
        .load()
        .then((spinner: HTMLIonLoadingElement) => {
          spinner.present();
          this.accountsService
          .addBarberToMyList(8287272, this.filteredBarber)
          .subscribe({
                next: (barber: Barber) => {
                  spinner.dismiss();
                  this.modalCtrl
                  .dismiss(barber,'success');
                },
                error: () => this.showConnectionErrorMassage(spinner)
          });
        });

  }


  public searchBarber(): void{
        this.loaderService.load().then((spinner: HTMLIonLoadingElement) => {
             spinner.present();

          this.barberService
              .findBarberByPhone(Number(this.refCodeForm.get('phoneNumber').value))
              .subscribe({
                  next: (filteredBarber: Barber) => {
                      if(filteredBarber){
                      this.filteredBarber = filteredBarber;
                      this.isBarberValid = true;
                      spinner.dismiss();
                    }
                    else {
                      this.searchTitle = this.barberSearchImages[1];
                      this.isBarberValid = false;
                      spinner.dismiss();
                    }
                  },
                  error: () => this.showConnectionErrorMassage(spinner)
              });
        });
  }


  private initializeRefCodeForm(): void{
      this.refCodeForm = new FormGroup({
        phoneNumber: new FormControl(null, Validators.required)
      });
  }

  private onPageLoad(): void {
    this.backButtonUrl = '/my-barbers';
    this.searchTitle = this.barberSearchImages[0];
  }

 private showConnectionErrorMassage(spinner: HTMLIonLoadingElement): void{
  this.loaderService
      .showToast('Connection Error!', 'You\'re not connected to the internet', 'bottom', 'danger');
      spinner.dismiss();
 }

}
