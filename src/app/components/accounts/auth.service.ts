/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LoginData } from 'src/app/interface/login-data.interface';
import { AuthResponseData } from 'src/app/interface/authResponseData.interface';
import { User } from 'src/app/model/user.model';

interface StoredAuthData {
  userId: string;
  tokenId: string;
  tokenExpirationDate: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  get isUserAuthenticated(): Observable<boolean | false> {
    return this._user.asObservable().pipe(
      map((user: User) => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get userId(): Observable<string | null> {
    return this._user.asObservable().pipe(
      map((user: User) => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }

  autoLogin() {
    return from(Preferences.get({ key: 'authData' })).pipe(
      map((storeData) => {
        if (!storeData || !storeData.value) {
          return null;
        }
        const parseData = JSON.parse(storeData.value) as StoredAuthData;
        const expireTime = new Date(parseData.tokenExpirationDate);
        if (expireTime <= new Date()) {
          return null;
        }

        return new User(
          parseData.userId,
          parseData.email,
          parseData.tokenId,
          expireTime
        );
      }),
      tap(user => {
        if(user){
          this._user.next(user);
        }
      }),
      map(user => !!user)
    );
  }

  login({ email, password }: LoginData) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
        ${environment.firebaseConfig.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  registerUser({ email, password }: LoginData) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        ${environment.firebaseConfig.apiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  logOut(): void {
    this._user.next(null);
    Preferences.remove({key: 'authData'});
  }

  private setUserData(userData: AuthResponseData): void {
    const expireTime = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );
    new User(userData.localId, userData.email, userData.idToken, expireTime);

    const _storedAuthData = {
      userId: userData.localId,
      tokenId: userData.idToken,
      tokenExpirationDate: expireTime.toISOString(),
      email: userData.email,
    };
    this.storeAuthData(_storedAuthData);
  }

  private storeAuthData(authData: StoredAuthData) {
    Preferences.set({ key: 'authData', value: JSON.stringify(authData) });
  }
}
