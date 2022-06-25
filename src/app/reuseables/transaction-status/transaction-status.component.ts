import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss'],
})

export class TransactionStatusComponent implements OnInit {

  @Input() inputDataFromParent: string;

  constructor(
    private router: Router,
    private modalCtr: ModalController
    ) { }

  ngOnInit() {}

  done(): void {
    this.router.navigate([this.inputDataFromParent]);
    this.modalCtr.dismiss();
  }
}
