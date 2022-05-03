import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBarbersPage } from './my-barbers.page';

const routes: Routes = [
  {
    path: '',
    component: MyBarbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBarbersPageRoutingModule {}
