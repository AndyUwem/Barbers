import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

import { interval } from 'rxjs';

import { AuthService } from './components/accounts/auth.service';
import { LoaderService } from './components/loader/loader.service';
import { NavigationPanelService } from './components/navigation-panel/navigation-panel.service';
import { NavRoutes } from './interface/navigation-routes.interface';


@Component({
  selector: 'app-root',
templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{

   menuRoutes: Array<NavRoutes>;
   isLoading = true;
   disableIonMenu  = true;
   private subscription = [];
   private previousAuthState = false;

  constructor(
    private loaderService: LoaderService,
    private navigationService: NavigationPanelService,
    private auth: AuthService,
    private router: Router,
    private menu: MenuController
    ) {}

  ngOnInit() {
     this.loadApplication();
  }

  ngOnDestroy(){
  this.subscription
      .forEach(subscription => subscription.unsubscriptionscribe());
  }


  logOut(){
    this.menu.close()
    .then(() => {
      this.menu.enable(false);
      this.auth.logOut();
    });
  }

  navigateToUserProfile(): void{
      this.router.navigateByUrl('user-profile');
      this.menu.close();
  }

  private loadApplication() {
      this.checkInternetConnection();
      this.getMenuRoutes();

      const authSubscriptionscription = this.auth.isUserAuthenticated
      .subscribe( isAuthenticated => {
        if(!isAuthenticated && this.previousAuthState !== isAuthenticated){
          this.router.navigateByUrl('/accounts');
        }
        this.previousAuthState = isAuthenticated;
      });

      this.subscription.push(authSubscriptionscription);
  }

private checkInternetConnection(){
  setTimeout(() => {
    if(navigator.onLine){
      this.isLoading = false;
    }
    else{
      this.isLoading = true;
      this.loaderService.showToast(
        '',
        'Your are currently offline.',
        'top',
        'wifi-sharp',
        'dark'
      );
    }
  }, 2000);

   const connectionSubscriptionscription = interval(2000).subscribe({
    next: ()=>{
      if(navigator.onLine){
        this.isLoading = false;
      }
    }

  });

  this.subscription.push(connectionSubscriptionscription);
}


private getMenuRoutes(){
 this.menuRoutes = this.navigationService.getMenuRoutes;
}

}
