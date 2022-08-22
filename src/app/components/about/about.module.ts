import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { BackButtonPageModule } from 'src/app/reuseables/back-button/back-button.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AboutPageRoutingModule,
    BackButtonPageModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
