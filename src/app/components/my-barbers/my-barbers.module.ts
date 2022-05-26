import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBarbersPageRoutingModule } from './my-barbers-routing.module';

import { MyBarbersPage } from './my-barbers.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBarbersPageRoutingModule,
    BackButtonPageModule
  ],
  declarations: [MyBarbersPage],
  exports: [MyBarbersPage]
})
export class MyBarbersPageModule {}
