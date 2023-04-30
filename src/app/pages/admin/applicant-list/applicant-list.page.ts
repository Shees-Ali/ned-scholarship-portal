import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.page.html',
  styleUrls: ['./applicant-list.page.scss'],
})
export class ApplicantListComponent extends BasePage implements OnInit {
  scholarship_id: string = '';
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

  applicants_list: any[] = [];

  ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.scholarship_id = this.nav.getQueryParams()['key'];
    this.getData();
  }

  toApplication(application: any) {
    this.nav.navigateTo('admin/application', {
      queryParams: {
        application: JSON.stringify(application),
      },
    });
  }

  async getData() {
    this.applicants_list =
      await this.applicationService.getApplicationsByScholarShipID(
        this.scholarship_id
      );
  }

  edit() {
    this.nav.navigateTo('admin/enter-scholarship', {
      queryParams: {
        scholarship_id: this.scholarship_id,
      },
    });
  }
}
