import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { AuthService } from '../components/accounts/auth.service';

import { switchMap, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private auth: AuthService) {}


  canLoad(): Observable<boolean> | boolean | Promise<boolean>{
     return this.auth.isUserAuthenticated.pipe(take(1), switchMap( isAuthenticated =>{
      if(!isAuthenticated){
        return this.auth.autoLogin();
      }
       else{
       return of(isAuthenticated);
       }
     }), tap( isAuthenticated => {
      if(!isAuthenticated){
        this.router.navigateByUrl('/accounts');
        return isAuthenticated;
      }
     }));

  }
}
