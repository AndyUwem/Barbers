import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBarbersPageRoutingModule } from './my-barbers-routing.module';

import { MyBarbersPage } from './my-barbers.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';
import { AddBarberPage } from '../add-barber/add-barber.page';
import { AddBarberPageModule } from '../add-barber/add-barber.module';
import { InternetAndEmptyListErrorViewPageModule } from 'src/app/reuseables/error-status/internet-and-empty-list-error-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBarbersPageRoutingModule,
    BackButtonPageModule,
    AddBarberPageModule,
    InternetAndEmptyListErrorViewPageModule
  ],
  declarations: [MyBarbersPage],
  exports: [MyBarbersPage],
  entryComponents: [AddBarberPage]
})
export class MyBarbersPageModule {}
