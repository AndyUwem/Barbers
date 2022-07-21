import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData } from 'src/app/interface/authResponseData.interface';
import { User } from 'src/app/interface/user.interface';
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
  public isLoading = true;


  constructor(
    private fb: FormBuilder,
    private accountsService: AccountsService,
    private auth: AuthService
    ) { }


    get email(): string {
      return this.newCustomerForm.get('email').value as string;
    }

    get passowrd(): string {
      return this.newCustomerForm.get('password').value as string;
    }

  ngOnInit() {
    this.onFormInitialization();
    setTimeout(() => this.isLoading = !this.isLoading, 1000);
  }

  onSubmit(): void{
    // if(!this.newCustomerForm.valid){
    //   return;
    // }
    // this.isLoading = !this.isLoading;
    // this.handleNewCustomer();

    this.handleNewCustomer();

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

private handleNewCustomer(): void{
//  const formInput = this.newCustomerForm.controls;

// const customer: User = {
//   id: formInput.phone.value,
//   firstName: formInput.firstName.value,
//   lastName: formInput.lastName.value,
//   address: formInput.address.value,
//   phone: formInput.phone.value,
//   age: formInput.age.value,
//   gender: formInput.gender.value
// };

// this.accountsService
// .registerNewCustomer(customer)
// .subscribe({
//   next: (responseData: User) => {
//     this.isLoading = !this.isLoading;
//     console.log(responseData);
//   },
//   error: () => console.log('something went wrong')
// });

this.authenticate();
}

private authenticate(){
  const email = this.email;
  const password = this.passowrd;

    this.auth.registerUser({ email, password })
        .subscribe({
            next: (responseData: AuthResponseData) =>{
              console.log(responseData);
            },
            error: (e) => {
              console.log(e);
            }
        });
}
}
