import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  public item = { src: 'assets/barber-icon.png'}
  
  constructor() { }

  ngOnInit() {
  }

}
