import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentsPageRoutingModule } from './my-appointments-routing.module';

import { MyAppointmentsPage } from './my-appointments.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppointmentsPageRoutingModule,
    BackButtonPageModule
  ],
  declarations: [MyAppointmentsPage]
})
export class MyAppointmentsPageModule {}
