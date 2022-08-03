import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public loginForm: FormGroup;
  public isFormValid: boolean;

  constructor(
    private readonly loaderService: LoaderService,
    private readonly authService: AuthService,
    private readonly alertCtrl: AlertController,
    private readonly router: Router
  ) {}

  get email(): string {
    return this.loginForm.get('email').value as string;
  }

  get password(): string {
    return this.loginForm.get('password').value as string;
  }

  get fControl() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.onInitializeLoginForm();
  }

  onInitializeLoginForm(): void {
    this.isFormValid = true;
    this.loginForm = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email, Validators.max(40)],
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });
  }

  onValueChange() {
    this.loginForm.valueChanges.subscribe({
      next: () => (this.isFormValid = true),
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('email or password invalid');
      this.isFormValid = false;
    } else {
      this.login({ ...this.loginForm.value });
    }
  }

  private login(loginData: LoginData) {
    this.loaderService.load().then((spinner: HTMLIonLoadingElement) => {
      spinner.present();
      this.authService.login(loginData).subscribe({
        next: (responseData: AuthResponseData) => {
          spinner.dismiss();
          console.log(responseData);
          this.router.navigateByUrl('/navigation-panel/nav/home');
        },
        error: (e) => {
          spinner.dismiss();

        },
      });
    });
  }

  private showErrorAlert(): void {
    this.alertCtrl
      .create({
        header: 'Login Failed !',
        keyboardClose: true,
        message: 'Invalid email or password',
        buttons: ['OK'],
      })
      .then((alert: HTMLIonAlertElement) => {
        alert.present();
      });
  }
}
