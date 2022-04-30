import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

   public isLoading: boolean = true;
  


  constructor() {}

  ngOnInit() {  
     this.loadApplication();
  }

  private loadApplication() {
        setTimeout(() => this.isLoading = false, 1000)
  }


}
