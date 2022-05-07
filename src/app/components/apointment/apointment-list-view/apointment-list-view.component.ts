import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-apointment-list-view',
  templateUrl: './apointment-list-view.component.html',
  styleUrls: ['./apointment-list-view.component.scss'],
})
export class ApointmentListViewComponent implements OnInit {

  @Input() index: number;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public onCloseListView(){
      this.modalCtrl
      .dismiss({ index: this.index }, 'cancel');
  }

}
