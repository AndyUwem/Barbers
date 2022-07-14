import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
   this.onInitializeLoginForm();
  }

  onInitializeLoginForm(): void{
    this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.email, Validators.required]),
          password: new FormControl('', [Validators.required])
    });
  }
  onLoginSubmit(): void{
     if(this.loginForm.invalid){
       console.log('email or password invalid');
     }
     else{
      console.log('valid');
     }
  }
}
