import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.authService.isLoggedIn.next(false);
  }

  navigate() {
    this.authService.isLoggedIn.next(true);
    this.nav.navigateTo('');
  }
}
