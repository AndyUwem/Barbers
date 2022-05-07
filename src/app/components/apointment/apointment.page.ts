import { Component, OnInit } from '@angular/core';
import { NavigationPanelService } from '../navigation-panel/navigation-panel.service';
import { ApointmentService } from './apointment.service';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.page.html',
  styleUrls: ['./apointment.page.scss'],
})
export class ApointmentPage implements OnInit {

  public backButtonUrl: string;
  public apointmentListItems = [];

  constructor(
    private navigationPanelService: NavigationPanelService,
    private apointmentService: ApointmentService
    ) { }

  ngOnInit() {
    this.backButtonUrl = this.navigationPanelService.backToHomeUrl;
    this.apointmentListItems =  [...this.apointmentService.getApointmentListItems]
  }

  public setSelectedListItemValue(index: number) {
        
          if(index == 0)
          this.apointmentListItems[index].value = 'Home service'
          else if(index == 1)
          this.apointmentListItems[index].value = 'Dada'
  }

}
