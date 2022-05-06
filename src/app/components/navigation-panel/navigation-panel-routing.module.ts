import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavigationPanelPage } from './navigation-panel.page';

const routes: Routes = [
  {
    path: 'nav',
    component: NavigationPanelPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-dashboard/home-dashboard.module').then( m => m.HomeDashboardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: '',
        redirectTo: '/navigation-panel/nav/home',
        pathMatch: 'full'
       }
    ]
  },

  {
    path: '',
    redirectTo: '/navigation-panel/nav/home',
    pathMatch: 'full'
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPanelPageRoutingModule {}
