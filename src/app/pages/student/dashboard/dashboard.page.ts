import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  scholarshipList: any[] = [];
  applicationsList: any[] = [];
  limit: number = 3;
  lastItem: any = undefined;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.getData();
  }

  async getData() {
    const user = this.userService.getCurrentUser();
    // this.applicationsList = await this.applicationService.
    this.scholarshipList = await this.scholarshipService.getScholarShipList(
      this.limit,
      this.lastItem ? this.lastItem.key : undefined
    );
  }
}
