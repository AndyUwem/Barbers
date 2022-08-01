import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { AuthService } from '../components/accounts/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private auth: AuthService) {}


  canLoad(): boolean {
      const isAuthenticated = !!this.auth.isAuthenticated;
      if(!isAuthenticated){
        this.router.navigate(['/accounts']);
        return isAuthenticated;
      }

      else{
        return isAuthenticated;
      }
  }
}
