import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.page.html',
  styleUrls: ['./my-applications.page.scss'],
})
export class MyApplicationsPage extends BasePage implements OnInit {
  applicationsList?: any[];
  limit: number = 3;
  lastItem: any = undefined;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.getData();
  }

  async getData() {
    this.utiltiy.showLoader();
    const user = await this.userService.getCurrentUser();
    this.applicationsList =
      await this.applicationService.getApplicationsByUserID(user.user_id, 1000);
    this.utiltiy.hideLoader();
  }

  handlePageEvent($event: any) {
    console.log($event);
    console.log(this.lastItem);
    if (this.limit !== $event.pageSize) {
      this.limit = $event.pageSize;
      this.lastItem = undefined;
      this.getData();
    } else if ($event.pageIndex > 0) {
      this.getData();
    }
  }
}
