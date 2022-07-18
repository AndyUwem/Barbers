import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthResponseData } from 'src/app/interface/authResponseData.interface';
import { LoginData } from 'src/app/interface/login-data.interface';
import { LoaderService } from '../../loader/loader.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private readonly alertCtrl: AlertController,
    private readonly loaderService: LoaderService,
    private readonly authService: AuthService
    ) { }

    get email(): string{
      return this.loginForm.get('email').value as string;
    }

    get password(): string{
      return this.loginForm.get('password').value as string;
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
      this.login({...this.loginForm.value});
     }
  }

  login(loginData: LoginData) {
        this.loaderService.load()
        .then((spinner: HTMLIonLoadingElement) => {
          spinner.present();
          this.authService
          .login(loginData)
          .subscribe({
            next : (data: AuthResponseData) => {
              spinner.dismiss();
              console.log(data);
            },
            error: (e) => {
              spinner.dismiss();
              console.log(e);
              const errorMassage = e.error.error.message;

              if(errorMassage === 'EMAIL_NOT_FOUND' || errorMassage === 'INVALID_PASSWORD'){
                this.showErrorAlert('Invalid email or password');
              }
            }
          });
        });
  }

  private showErrorAlert(message: string): void{
          this.alertCtrl.create({
           header: 'Login Failed !',
           keyboardClose: true,
           message,
           buttons: ['OK']
        })
        .then((alert: HTMLIonAlertElement) => {
          alert.present();
        });
  }
}
