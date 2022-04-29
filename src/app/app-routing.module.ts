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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
