import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'loader',
    loadChildren: () =>
      import('./components/loader/loader.module').then(
        (m) => m.LoaderPageModule
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./components/accounts/accounts.module').then(
        (m) => m.AccountsModule
      ),
  },
  {
    path: 'navigation-panel',
    loadChildren: () =>
      import('./components/navigation-panel/navigation-panel.module').then(
        (m) => m.NavigationPanelPageModule
      ),
      canLoad: [AuthGuard]
  },
  {
    path: 'back-button',
    loadChildren: () =>
      import('./reuseables/back-button/back-button.module').then(
        (m) => m.BackButtonPageModule
      ),
  },
  {
    path: 'apointment',
    loadChildren: () =>
      import('./components/apointment/apointment.module').then(
        (m) => m.ApointmentPageModule
      ),
  },
  {
    path: 'my-history',
    loadChildren: () =>
      import('./components/my-history/my-history.module').then(
        (m) => m.MyHistoryPageModule
      ),
  },
  {
    path: 'my-barbers',
    loadChildren: () =>
      import('./components/my-barbers/my-barbers.module').then(
        (m) => m.MyBarbersPageModule
      ),
  },

  {
    path: 'about',
    loadChildren: () => import('../app/components/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./components/my-appointments/my-appointments.module').then(
      m => m.MyAppointmentsPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./components/accounts/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'navigation-panel',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
