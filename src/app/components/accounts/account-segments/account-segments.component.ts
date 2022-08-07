import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-account-segments',
  templateUrl: './account-segments.component.html',
  styleUrls: ['./account-segments.component.scss'],
})
export class AccountSegmentsComponent {


  isLoading: boolean;
  selectedSegment: string;

  constructor() { }


ionViewWillEnter(){
  this.selectedSegment = 'login';
  this.isLoading = false;
}


onFilteredSegment(e: Event){
      const event = e as CustomEvent<SegmentChangeEventDetail>;
      this.selectedSegment = event.detail.value;
}

}
