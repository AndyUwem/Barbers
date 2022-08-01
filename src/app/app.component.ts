import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
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
   private connectionInterval: Subscription;

  constructor(
    private loaderService: LoaderService,
    private navigationService: NavigationPanelService
    ) {}

  ngOnInit() {
     this.loadApplication();
  }

  ngOnDestroy(){
  this.connectionInterval.unsubscribe();
  }

  private loadApplication() {
      this.checkInternetConnection();
      this.getMenuRoutes();
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

 this.connectionInterval = interval(2000).subscribe({
    next: ()=>{
      if(navigator.onLine){
        this.isLoading = false;
      }
    }

  });
}


private getMenuRoutes(){
 this.menuRoutes = this.navigationService.getMenuRoutes;
}

}
