import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBarbersPageRoutingModule } from './my-barbers-routing.module';

import { MyBarbersPage } from './my-barbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBarbersPageRoutingModule
  ],
  declarations: [MyBarbersPage]
})
export class MyBarbersPageModule {}
