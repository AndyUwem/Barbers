import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternetAndEmptyListErrorViewPage } from './internet-and-empty-list-error-view.page';

const routes: Routes = [
  {
    path: '',
    component: InternetAndEmptyListErrorViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetAndEmptyListErrorViewPageRoutingModule {}
