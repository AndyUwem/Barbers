import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { AccountsModule } from '../accounts/accounts.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutPageRoutingModule,
    AccountsModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
