import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  exports: [LoginComponent, RegisterUserComponent]
})

export class AccountsModule{}
