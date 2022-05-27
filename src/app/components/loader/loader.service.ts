import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class LoaderService{

 constructor(private loadingCtrl: LoadingController){}

 public load(): Promise<HTMLIonLoadingElement>{
  return this.loadingCtrl.create({
     spinner: 'dots',
     animated: true,
     showBackdrop: true,
     keyboardClose: true,
     message: 'loading please wait...'
   });
 }

}
