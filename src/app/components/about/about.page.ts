import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


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
      this.log(event.detail);
}


private log(data: any): void{ console.log(data); }

}
