import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetAndEmptyListErrorViewPageRoutingModule } from './internet-and-empty-list-error-view-routing.module';

import { InternetAndEmptyListErrorViewPage } from './internet-and-empty-list-error-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternetAndEmptyListErrorViewPageRoutingModule
  ],
  declarations: [InternetAndEmptyListErrorViewPage],
  exports: [InternetAndEmptyListErrorViewPage]
})
export class InternetAndEmptyListErrorViewPageModule {}
