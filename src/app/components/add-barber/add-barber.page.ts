import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public searchTitle = 'Find a barber';
  public isBarberValid = false;

  constructor(
    private loaderService: LoaderService,
    private barberService: MyBarbersService
    ) { }

  ngOnInit() {
    this.onPageLoad();
    this.initializeRefCodeForm();
  }

  public linkBarber(): void{
      this.loaderService.load()
      .then((spinner: HTMLIonLoadingElement) => {
        spinner.present();

      const refId: string = this.refCodeForm.get('referenceCode').value;
      this.barberService
      .findBarberById(refId.trim())
      .subscribe({
        next: (responseData: Barber) => {
          if(responseData){
            console.log(responseData);
            this.filteredBarber = responseData;
            this.isBarberValid = true;
          }

          else{
            this.searchTitle = 'no data found!';
            this.isBarberValid = false;
          }
          spinner.dismiss();
        },
        error: () => {
          this.loaderService.showToast(
            'Connection Error',
             'Please check your internet connection',
             'bottom'
             ).then((toast: HTMLIonToastElement) =>{
               toast.present();
             });
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
