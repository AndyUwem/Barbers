import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'navigation-panel',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./components/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'navigation-panel',
    loadChildren: () => import('./components/navigation-panel/navigation-panel.module').then( m => m.NavigationPanelPageModule)
  },
  {
    path: 'home-dashboard',
    loadChildren: () => import('./components/home-dashboard/home-dashboard.module').then( m => m.HomeDashboardPageModule)
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./components/transaction-history/transaction-history.module').then( m => m.TransactionHistoryPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/settings/settings.module').then( m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
