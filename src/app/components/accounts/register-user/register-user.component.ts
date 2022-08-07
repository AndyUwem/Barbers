import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseData } from 'src/app/interface/authResponseData.interface';
import { User } from 'src/app/interface/user.interface';
import { NavigationPanelService } from '../../navigation-panel/navigation-panel.service';
import { AccountsService } from '../accounts.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {

  public newCustomerForm: FormGroup;
  public gender = ['none', 'M', 'F'];
  public isLoading = false;
  public isRegistered = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private accounts: AccountsService,
    private navigation: NavigationPanelService
    ) { }


    get email(): string {
      return this.newCustomerForm.get('email').value as string;
    }

    get passowrd(): string {
      return this.newCustomerForm.get('password').value as string;
    }

    get fControl(): {[key: string]: AbstractControl}{
      return  this.newCustomerForm.controls;
    }

  ngOnInit() {
    this.onFormInitialization();
  }

  onSubmit(): void{
    if(!this.newCustomerForm.valid){
      return;
    }
    this.authenticate();
  }

  onRegistrationComplete(){
    this.newCustomerForm.reset();
    this.router.navigateByUrl(this.navigation.backToHomeUrl);
  }

  private onFormInitialization(): void{
    this.newCustomerForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required]),
      age: this.fb.control('', [Validators.required]),
      gender: this.fb.control('', [Validators.required]),
      address: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
   });
}


private createCustomerObject(auth: AuthResponseData): User{

return {
  id: auth.localId,
  firstName: this.fControl.firstName.value,
  lastName: this.fControl.lastName.value,
  address: this.fControl.address.value,
  phone: this.fControl.phone.value,
  age: this.fControl.age.value,
  email: this.fControl.email.value,
  gender: this.fControl.gender.value
};
}

private onCustomerRegisteration(customer: User){
  this.accounts
      .registerNewCustomer(customer)
      .subscribe({
        next: (responseData: User) => {
            this.isLoading = false;
            this.isRegistered = true;
            console.log(responseData);
        },
        error: (err: Error) => {
          this.isLoading = false;
          console.log(err);
        }
      });
}

private authenticate(){
    this.isLoading =  true;
    this.auth
        .registerUser({ email: this.email, password: this.passowrd })
        .subscribe({
          next: (responseData: AuthResponseData) =>{
             const customer = this.createCustomerObject(responseData);
             this.onCustomerRegisteration(customer);
              console.log(responseData);
            },
            error: (e) => {
              this.isLoading = false;
              console.log(e);
            }
        });
}
}
