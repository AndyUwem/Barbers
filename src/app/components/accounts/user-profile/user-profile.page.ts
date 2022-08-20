import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { NavigationPanelService } from '../../navigation-panel/navigation-panel.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  public user: User;

  constructor(
    private readonly accounts: AccountsService,
    private readonly navSrvice: NavigationPanelService,
    private readonly router: Router
    ) { }

  ngOnInit() {
    this.user = this.accounts.currentUser();
  }

  navigateBackToHome(){
        this.router.navigateByUrl(this.navSrvice.backToHomeUrl);
  }
}
