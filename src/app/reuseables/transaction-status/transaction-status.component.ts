import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss'],
})
export class TransactionStatusComponent implements OnInit {

  @Input() inputDataFromParent: string;

  constructor() { }

  ngOnInit() {}

}
