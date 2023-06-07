import { Component, OnInit , Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';
import { NavService } from './services/nav.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

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
  isLoading: boolean = false;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);
  
  constructor(
    authService: AuthService,
    utilityService: UtilityService,
    private nav: NavService,
    breakpointObserver: BreakpointObserver
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
    utilityService.isLoading.subscribe((res: boolean) => {
      this.isLoading = res;
    });

    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  goToAuth() {
    this.nav.navigateTo('');
  }
}
