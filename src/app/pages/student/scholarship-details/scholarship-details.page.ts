import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.page.html',
  styleUrls: ['./scholarship-details.page.scss'],
})
export class ScholarshipDetailsPage extends BasePage implements OnInit {
  selectedTab: number = 1;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  ngOnInit(): void {}

  changeTab(index: number) {
    this.selectedTab = index;
  }
}
