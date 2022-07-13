import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-account-segments',
  templateUrl: './account-segments.component.html',
  styleUrls: ['./account-segments.component.scss'],
})
export class AccountSegmentsComponent implements OnInit {


  isLoading: boolean;
  selectedSegment: string;

  constructor() { }

  ngOnInit() {
    this.selectedSegment = 'login';
  }


ionViewWillEnter(){
  this.isLoading = false;
}


onFilteredSegment(e: Event){
      const event = e as CustomEvent<SegmentChangeEventDetail>;
      console.log(event.detail);
}

}
