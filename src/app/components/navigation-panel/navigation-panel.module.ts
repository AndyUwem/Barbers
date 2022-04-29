import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationPanelPageRoutingModule } from './navigation-panel-routing.module';

import { NavigationPanelPage } from './navigation-panel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationPanelPageRoutingModule
  ],
  declarations: [NavigationPanelPage]
})
export class NavigationPanelPageModule {}
