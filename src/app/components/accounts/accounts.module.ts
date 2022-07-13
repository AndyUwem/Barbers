import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountSegmentsComponent } from './account-segments/account-segments.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterUserComponent,
    AccountSegmentsComponent
  ],
  exports: [
    LoginComponent,
    RegisterUserComponent,
    AccountSegmentsComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule]
})
export class AccountsModule {}
