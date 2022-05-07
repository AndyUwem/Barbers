import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApointmentPageRoutingModule } from './apointment-routing.module';

import { ApointmentPage } from './apointment.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApointmentPageRoutingModule,
    BackButtonPageModule
  ],
  declarations: [ApointmentPage, ApointmentListViewComponent],
  entryComponents: [ApointmentListViewComponent]
})
export class ApointmentPageModule {}
