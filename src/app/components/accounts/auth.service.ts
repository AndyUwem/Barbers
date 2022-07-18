import { Injectable } from '@angular/core';

import { LoginData } from 'src/app/interface/login-data.interface';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService{

      constructor( private readonly auth: Auth ){}

      login({ email, password }: LoginData ){
         return signInWithEmailAndPassword(this.auth, email, password);
      }

      registerUser({ email, password }: LoginData ){
        return createUserWithEmailAndPassword(this.auth, email, password);
     }

     signOutUser(){
          signOut(this.auth);
     }
}
