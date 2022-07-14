import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSegmentsComponent } from './account-segments/account-segments.component';


const routes: Routes = [
  {
    path: '', component: AccountSegmentsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AccountsRoutingModule {}
