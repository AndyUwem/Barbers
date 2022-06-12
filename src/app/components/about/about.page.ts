import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/interface/user.interface';
import { AccountsService } from '../accounts/accounts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


  public isLoading: boolean;
  public newCustomerForm: FormGroup;
  public gender = ['none', 'M', 'F'];

  constructor(
    private fb: FormBuilder,
    private accountsService: AccountsService) { }

  ngOnInit() {
    this.onFormInitialization();
  }


ionViewWillEnter(){
  this.isLoading = false;
}


public onSubmit(): void{
  if(!this.newCustomerForm.valid){
    return;
  }

  this.isLoading = !this.isLoading;
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
   const formInput = this.newCustomerForm.controls;

  const customer: User = {
    id: formInput.phone.value,
    firstName: formInput.firstName.value,
    lastName: formInput.lastName.value,
    address: formInput.address.value,
    phone: formInput.phone.value,
    age: formInput.age.value,
    gender: formInput.gender.value
  };


  this.accountsService
      .registerNewCustomer(customer)
      .subscribe({
        next: (responseData: User) => {
          this.isLoading = !this.isLoading;
          this.log(responseData);
        },
        error: () => this.log('something went wrong')
      });
}

private log(data: any): void{ console.log(data); }

}
