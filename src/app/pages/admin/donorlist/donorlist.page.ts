import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import {takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-donorlist',
  templateUrl: './donorlist.page.html',
  styleUrls: ['./donorlist.page.scss']
})
export class DonorlistPage  extends BasePage implements OnInit {
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

  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
  toview(){

  }
  approve(){
    
  }
}
