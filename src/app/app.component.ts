import { Component, OnInit } from '@angular/core';
import { LoaderService } from './components/loader/loader.service';
@Component({
  selector: 'app-root',
templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  public isLoading = true;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
     this.loadApplication();
  }

  private loadApplication() {
        setTimeout(() => {
          if(navigator.onLine){
            this.isLoading = false;
          }
          else{
            this.isLoading = true;
            this.loaderService.showToast(
              'Internet connection was lost!',
              'top'
            ).then((toast: HTMLIonToastElement) => toast.present());
          }
        }, 2000);
  }


}
