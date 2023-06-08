import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.page.html',
  styleUrls: ['./donorlist.page.scss'],
})
export class DonorlistPage extends BasePage implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  donorsList: any[] = [];
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
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  async ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.donorsList = await this.donorService.getDonorsList(1000);
    console.log(this.donorsList);
  }

  toview(donor: any) {
    console.log(donor);
    this.nav.navigateTo('admin/donor-list/donor', {
      queryParams: {
        donor_id: donor.key,
      },
    });
  }

  approve(item: any) {
    this.donorService.updateDonor(item.key, {
      status: 'approved',
    });
    location.reload();
  }
}
