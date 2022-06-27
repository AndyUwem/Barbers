import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Barber } from 'src/app/interface/barber.interface';
import { SelectedItemFromChildList } from 'src/app/interface/selected-item-data.interface';

type DataFromParent = {
  selectedBarber: Barber;
  selectedItemIndex: number;
};


@Component({
  selector: 'app-apointment-list-view',
  templateUrl: './apointment-list-view.component.html',
  styleUrls: ['./apointment-list-view.component.scss'],
})
export class ApointmentListViewComponent implements OnInit {

  @Input() dataFromParent: DataFromParent;
  public barber: Barber;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    // console.log(this.dataFromParent);
     this.barber = {...this.dataFromParent.selectedBarber};
  }


  public onCloseListView(){
      this.modalCtrl
      .dismiss(null,'canceled');
  }

  public getSelectedItem(item: any): void{
    const dataToParent: SelectedItemFromChildList = {
      selectedListItem: item,
      selectedItemIndexFromParent: this.dataFromParent.selectedItemIndex
      };
  this
  .modalCtrl
  .dismiss(dataToParent, 'selected');
  }





}
