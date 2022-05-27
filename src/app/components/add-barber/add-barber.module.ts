import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBarberPageRoutingModule } from './add-barber-routing.module';

import { AddBarberPage } from './add-barber.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddBarberPageRoutingModule,
    BackButtonPageModule
  ],
  declarations: [AddBarberPage]
})
export class AddBarberPageModule {}
