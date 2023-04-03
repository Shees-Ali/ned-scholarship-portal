import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ned-scholarship-portal';
  isExpanded: boolean = false;
  isSideNavVisible: boolean = true;
  isTabberVisible: boolean = true;
  isAuthenticationPage: boolean = false;

  constructor(authService: AuthService, utilityService: UtilityService) {
    utilityService.isSideNavVisible.subscribe((res: boolean) => {
      this.isSideNavVisible = res;
    });
    utilityService.isTabberVisible.subscribe((res: boolean) => {
      this.isTabberVisible = res;
    });
    utilityService.isAuthenticationPage.subscribe((res: boolean) => {
      this.isAuthenticationPage = res;
    });
  }

  ngOnInit(): void {
    this.isSideNavVisible = true;
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
