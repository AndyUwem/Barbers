import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApointmentPage } from './apointment.page';

const routes: Routes = [
  {
    path: '',
    component: ApointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApointmentPageRoutingModule {}
