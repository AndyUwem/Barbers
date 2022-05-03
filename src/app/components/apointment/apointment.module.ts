import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApointmentPageRoutingModule } from './apointment-routing.module';

import { ApointmentPage } from './apointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApointmentPageRoutingModule
  ],
  declarations: [ApointmentPage]
})
export class ApointmentPageModule {}
