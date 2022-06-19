import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApointmentPageRoutingModule } from './apointment-routing.module';

import { ApointmentPage } from './apointment.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';
import { ApointmentListViewComponent } from './apointment-list-view/apointment-list-view.component';
import { MyBarbersPageModule } from '../my-barbers/my-barbers.module';
import { TransactionStatusComponent } from 'src/app/reuseables/transaction-status/transaction-status.component';
import { TransactionStatusModule } from 'src/app/reuseables/transaction-status/transaction-status.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApointmentPageRoutingModule,
    TransactionStatusModule,
    BackButtonPageModule,
    MyBarbersPageModule
  ],
  declarations: [ApointmentPage, ApointmentListViewComponent],
  entryComponents: [ApointmentListViewComponent, TransactionStatusComponent]
})
export class ApointmentPageModule {}
