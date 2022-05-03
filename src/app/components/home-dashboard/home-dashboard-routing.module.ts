import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApointmentPage } from '../apointment/apointment.page';

import { HomeDashboardPage } from './home-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardPage,
    children: [
      { path: 'apointment', loadChildren: () => import('../apointment/apointment.module').then( m => m.ApointmentPageModule) },
      { path: 'add-barber', loadChildren: () => import('../add-barber/add-barber.module').then( m => m.AddBarberPageModule) },
      { path: 'my-history', loadChildren: () => import('../my-history/my-history.module').then( m => m.MyHistoryPageModule) },
      { path: 'my-barbers', loadChildren: () => import('../my-barbers/my-barbers.module').then( m => m.MyBarbersPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDashboardPageRoutingModule {}
