import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationPanelPage } from './navigation-panel.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationPanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationPanelPageRoutingModule {}
