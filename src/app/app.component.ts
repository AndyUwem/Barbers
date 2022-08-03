import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
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
   private sub = [];
   private previousAuthState = false;

  constructor(
    private loaderService: LoaderService,
    private navigationService: NavigationPanelService,
    private auth: AuthService,
    private router: Router
    ) {}

  ngOnInit() {
     this.loadApplication();
  }

  ngOnDestroy(){
  this.sub.forEach(sub => sub.unsubscribe());
  }

  logOut(){
    this.auth.logOut();
  }

  private loadApplication() {
      this.checkInternetConnection();
      this.getMenuRoutes();

      const authSubscription = this.auth.isUserAuthenticated
      .subscribe( isAuthenticated => {
        if(!isAuthenticated && this.previousAuthState !== isAuthenticated){
          this.router.navigateByUrl('/accounts');
        }
        this.previousAuthState = isAuthenticated;
      });

      this.sub.push(authSubscription);
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

   const connectionSubscription = interval(2000).subscribe({
    next: ()=>{
      if(navigator.onLine){
        this.isLoading = false;
      }
    }

  });

  this.sub.push(connectionSubscription);
}


private getMenuRoutes(){
 this.menuRoutes = this.navigationService.getMenuRoutes;
}

}
