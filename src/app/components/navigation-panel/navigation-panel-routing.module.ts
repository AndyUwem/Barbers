import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from '../about/about.page';
import { HomeDashboardPage } from '../home-dashboard/home-dashboard.page';
import { SettingsPage } from '../settings/settings.page';

import { NavigationPanelPage } from './navigation-panel.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationPanelPage,
    children: [
      { path: 'home', component: HomeDashboardPage },
      { path: 'settings', component: SettingsPage },
      { path: 'about', component: AboutPage },
      { path: '', redirectTo: '/navigation-panel/home' }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPanelPageRoutingModule {}
