import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { BackButtonPageModule } from '../back-button/back-button.module';
import { TransactionStatusComponent } from './transaction-status.component';


@NgModule({
  declarations: [TransactionStatusComponent],
  exports: [TransactionStatusComponent],
  imports: [IonicModule, BackButtonPageModule]
})

export class TransactionStatusModule {}
