import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApointmentPage } from '../apointment/apointment.page';

import { HomeDashboardPage } from './home-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardPage,
    children: [
      { path: 'apointment', component: ApointmentPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDashboardPageRoutingModule {}
