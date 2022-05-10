import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';

type RecievedData = {
  selectedBarber: Barber;
  selectedItemIndex: number;
};


@Component({
  selector: 'app-apointment-list-view',
  templateUrl: './apointment-list-view.component.html',
  styleUrls: ['./apointment-list-view.component.scss'],
})
export class ApointmentListViewComponent implements OnInit {

  @Input() recievedData: RecievedData;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }


  public onCloseListView(){
    const returnedData = {
          selectedValue: 0
    };
      this.modalCtrl
      .dismiss(null, 'cancel');
  }

}
