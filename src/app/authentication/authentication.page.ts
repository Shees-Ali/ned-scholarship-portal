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
    this.utiltiy.isAuthenticationPage.next(true);
  }

  navigate() {
    this.utiltiy.isAuthenticationPage.next(false);
    this.nav.navigateTo('');
  }
}
