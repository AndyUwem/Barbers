import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from 'src/app/interface/login-data.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService
    ) { }

    get email(){
      return this.loginForm.get('email').value;
    }

    get password(){
      return this.loginForm.get('password').value;
    }


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
      console.log({...this.loginForm.value});
     }
  }

  login(loginData: LoginData) {
      this.authService
          .login(loginData)
          .then((data: any) => console.log(data))
          .catch((e: Error) => console.log(e));
  }
}
