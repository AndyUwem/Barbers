import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

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
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about/about.module').then( m => m.AboutPageModule)
  },
  
  {
    path: '',
    redirectTo: '/navigation-panel',
    pathMatch: 'full'
  },  {
    path: 'apointment',
    loadChildren: () => import('./components/apointment/apointment.module').then( m => m.ApointmentPageModule)
  },
  {
    path: 'add-barber',
    loadChildren: () => import('./components/add-barber/add-barber.module').then( m => m.AddBarberPageModule)
  },
  {
    path: 'my-barbers',
    loadChildren: () => import('./components/my-barbers/my-barbers.module').then( m => m.MyBarbersPageModule)
  },
  {
    path: 'my-history',
    loadChildren: () => import('./components/my-history/my-history.module').then( m => m.MyHistoryPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
