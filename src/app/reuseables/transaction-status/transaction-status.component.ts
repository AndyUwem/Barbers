import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/components/loader/loader.service';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss'],
})

export class TransactionStatusComponent implements OnInit {

  @Input() inputDataFromParent: string;

  constructor(
    private router: Router,
    private modalCtr: ModalController,
    private loader: LoaderService
    ) { }

  ngOnInit() {}

  done(): void {
    this.loader.load()
    .then((spinner: HTMLIonLoadingElement) => {
      spinner.present();
      this.modalCtr.dismiss();
      this.router.navigateByUrl(this.inputDataFromParent)
      .then(() => spinner.dismiss());
    });
  }
}
