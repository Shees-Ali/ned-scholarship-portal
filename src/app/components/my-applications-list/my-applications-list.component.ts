import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrls: ['./my-applications-list.component.scss'],
})
export class MyApplicationsListComponent extends BasePage implements OnInit {
  @Input('application_list') application_list?: Array<any>;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);

  constructor(injector: Injector, breakpointObserver: BreakpointObserver) {
    super(injector);
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
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit() {}

  toApplication(application: any) {
    this.nav.navigateTo('student/application', {
      queryParams: {
        application: JSON.stringify(application),
        isStudent: true,
      },
    });
  }
}
