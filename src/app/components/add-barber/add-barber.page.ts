import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
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
  public searchTitle = 'Find a barber';

  constructor(
    private modalCtrl: ModalController,
    private barberService: MyBarbersService,
    private loaderService: LoaderService
    ) { }

  ngOnInit() {
    this.onPageLoad();
    this.initializeRefCodeForm();
  }

  ionViewWillEnter(){

  }

  public linkWithBarber(): void {
      this.modalCtrl.dismiss(this.filteredBarber,
      'success'
      );
  }

  public searchBarber(): void{
        this.loaderService.load().then((spinner: HTMLIonLoadingElement) => {
                spinner.present();

          const refId: string = this.refCodeForm.get('referenceCode').value;
          this.barberService.findBarberById(refId)
              .subscribe({
                  next: (filteredBarber: Barber) => {
                      if(filteredBarber){
                      this.filteredBarber = filteredBarber;
                      this.searchTitle = 'barber was found';
                      this.isBarberValid = true;
                      spinner.dismiss();
                    }
                    else {
                      this.searchTitle = 'barber not found';
                      this.isBarberValid = false;
                      spinner.dismiss();
                    }
                  },
                  error: () => {
                    console.log('something went wrong..');
                    spinner.dismiss();
                  }
              });
        });
  }

  private initializeRefCodeForm(): void{
      this.refCodeForm = new FormGroup({
          referenceCode: new FormControl('', Validators.required)
      });
  }

  private onPageLoad(): void {
    this.backButtonUrl = '/my-barbers';
  }



}
