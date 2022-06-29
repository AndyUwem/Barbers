import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'loader',
    loadChildren: () =>
      import('./components/loader/loader.module').then(
        (m) => m.LoaderPageModule
      ),
  },
  {
    path: 'navigation-panel',
    loadChildren: () =>
      import('./components/navigation-panel/navigation-panel.module').then(
        (m) => m.NavigationPanelPageModule
      ),
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
    path: '',
    redirectTo: 'navigation-panel',
    pathMatch: 'full',
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./components/my-appointments/my-appointments.module').then(
      m => m.MyAppointmentsPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
