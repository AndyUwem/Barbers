import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})


export class LoaderService{

 constructor(
   private loadingCtrl: LoadingController,
   private toastCtrl: ToastController
   ){}

 public load(): Promise<HTMLIonLoadingElement>{
  return this.loadingCtrl.create({
     spinner: 'dots',
     animated: true,
     showBackdrop: true,
     keyboardClose: true,
     message: 'loading please wait...'
   });
 }


 public showToast(
   header: string,
   message: string,
   position: 'top' | 'bottom' | 'middle',
   icon: string,
   color: string): void{
    this.toastCtrl.create({
     header,
     message,
     position,
     duration: 4000,
     keyboardClose: true,
     mode: 'ios',
     color,
     icon
   })
   .then((toast: HTMLIonToastElement) =>{
    toast.present();
});
}



}
