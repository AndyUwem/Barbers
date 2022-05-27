import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../loader/loader.service';
import { MyBarbersService } from '../my-barbers/my-barbers.service';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.page.html',
  styleUrls: ['./add-barber.page.scss'],
})
export class AddBarberPage implements OnInit {

  public refCodeForm: FormGroup;
  public backButtonUrl: string;

  public searchTitle = 'Find a barber';

  constructor(private loaderService: LoaderService, private barberService: MyBarbersService) { }

  ngOnInit() {
    this.onPageLoad();
    this.initializeRefCodeForm();
  }

  public linkBarber(): void{
      this.loaderService.load()
      .then((spinner: HTMLIonLoadingElement) => {
        spinner.present();

      this.barberService.findBarberById('-N2ESDSME7HTvk-kayqF')
      .subscribe({
        next: (responseData: any) => {

          const results = responseData ? console.log(responseData) : console.log('no data found!');
          spinner.dismiss();

        },
        error: () => {
          console.log('something went wrong');
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
