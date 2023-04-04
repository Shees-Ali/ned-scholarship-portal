import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';
import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ned-scholarship-portal';
  isExpanded: boolean = false;
  isAuthenticationPage: boolean = true;
  isPages: boolean = false;
  isHome: boolean = false;
  constructor(
    authService: AuthService,
    utilityService: UtilityService,
    private nav: NavService
  ) {
    utilityService.isPages.subscribe((res: boolean) => {
      this.isPages = res;
      this.isHome = false;
      this.isAuthenticationPage = false;
    });
    utilityService.isHome.subscribe((res: boolean) => {
      this.isHome = res;
      this.isPages = false;
      this.isAuthenticationPage = false;
    });
    utilityService.isAuthenticationPage.subscribe((res: boolean) => {
      this.isAuthenticationPage = res;
      this.isPages = false;
      this.isHome = false;
    });
  }

  ngOnInit(): void {}

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  goToAuth() {
    this.nav.navigateTo('');
  }
}
