import { Component, OnInit } from '@angular/core';
import { LoaderService } from './components/loader/loader.service';
import { NavigationPanelService } from './components/navigation-panel/navigation-panel.service';
@Component({
  selector: 'app-root',
templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

   menuRoutes = [];
   isLoading = true;

  constructor(
    private loaderService: LoaderService,
    private navigationService: NavigationPanelService
    ) {}

  ngOnInit() {
     this.loadApplication();
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
}

private getMenuRoutes(){
 this.menuRoutes = this.navigationService.getMenuRoutes;
}

}
