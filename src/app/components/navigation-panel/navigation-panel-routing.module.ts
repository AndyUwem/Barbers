import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardPage } from '../home-dashboard/home-dashboard.page';
import { SettingsPage } from '../settings/settings.page';
import { TransactionHistoryPage } from '../transaction-history/transaction-history.page';

import { NavigationPanelPage } from './navigation-panel.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationPanelPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboardPage },
      { path: 'settings', component: SettingsPage },
      { path: 'history', component: TransactionHistoryPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPanelPageRoutingModule {}
