import { Injectable } from '@angular/core';

import { LoginData } from 'src/app/interface/login-data.interface';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from 'src/app/interface/authResponseData.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

      constructor( private http: HttpClient){
      }

      login({ email, password }: LoginData ){
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
        ${environment.firebaseConfig.apiKey}`,{ email, password, returnSecureToken: true });
      }

    registerUser({ email, password }: LoginData ){
       return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        ${environment.firebaseConfig.apiKey}`,{ email, password, returnSecureToken: true });
     }

    //  signOutUser(){
    //      return this.afAuth.signOut();
    //  }

    // getAuthState(): void{
    //   this.afAuth.authState
    //   .subscribe({
    //     next: (user: any) => {
    //        if(user){
    //         this.userData = user;
    //         localStorage
    //         .setItem('user', JSON.stringify(this.userData));
    //        }
    //        else{
    //           localStorage.setItem('user', 'null');
    //        }
    //     },
    //     error: (e: Error) => console.log(e)
    //   });
    // }

    // isUserLoggedIn(): boolean{
    //  const user = JSON.parse(localStorage.getItem('user'));
    //  return user !== null;
    // }
}
