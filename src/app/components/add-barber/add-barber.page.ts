import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
import { MyBarbersService } from '../my-barbers/my-barbers.service';

@Component({
  selector: 'app-add-barber',
  templateUrl: './add-barber.page.html',
  styleUrls: ['./add-barber.page.scss'],
})
export class AddBarberPage implements OnInit {

  @Input() myListOfBarbers: Array<Barber>;

  public refCodeForm: FormGroup;
  public filteredBarber: Barber;
  public backButtonUrl: string;
  public isBarberValid = false;
  public searchTitle = 'Find a barber';

  constructor(
    private barberService: MyBarbersService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.onPageLoad();
    this.initializeRefCodeForm();
  }

  ionViewWillEnter(){
   console.log(this.myListOfBarbers);
  }

  public linkWithBarber(): void {
      this.modalCtrl.dismiss({ text: 'hello modal data returned'},
      'cancel'
      );
  }

  public searchBarber(): void{

        const refId: string = this.refCodeForm.get('referenceCode').value;
        const filteredBarber = this
            .myListOfBarbers
            .find((barber: Barber) => barber.id === refId.trim());

            if(filteredBarber){
                  this.filteredBarber = filteredBarber;
                  this.searchTitle = 'barber was found';
                  this.isBarberValid = true;
               }
                else {
                  this.searchTitle = 'barber not found';
                  this.isBarberValid = false;
                }
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
