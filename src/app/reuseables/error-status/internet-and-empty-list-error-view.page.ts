import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-and-empty-list-error-view',
  templateUrl: './internet-and-empty-list-error-view.page.html',
  styleUrls: ['./internet-and-empty-list-error-view.page.scss'],
})
export class InternetAndEmptyListErrorViewPage implements OnInit {

  @Input() isInternetAvailable: boolean;
  @Input() shouldShowEmptyList: boolean;
  @Input() statusText: string;
  constructor() { }

  ngOnInit() {
  }

}
