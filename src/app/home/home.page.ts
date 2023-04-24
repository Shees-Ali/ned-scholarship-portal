import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';
// import { TawkMessengerAngular } from '@tawk/tawk-messenger-angular';
declare var Tawk_API: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {
  scholarshipList: any[] = [];
  scholarshipsCount: number = 0;
  limit: number = 6;
  lastItem: any = undefined;
  searchTerm: string = '';
  filter: string = '';
  constructor(injector: Injector) {
    super(injector);
  }
  // public TawkMessengerAngular: TawkMessengerAngular
  async ngOnInit(): Promise<void> {
    this.utiltiy.isHome.next(true);
    await this.getData();
    Tawk_API.init();
    //   this.TawkMessengerAngular.init({
    // 		propertyId: ["6441b7994247f20fefece3d0"],
    // 		widgetId: ["1gugbac93"]
    // })
  }

  async getData() {
    this.utiltiy.showLoader();
    this.scholarshipList = await this.scholarshipService.getScholarShipList(
      this.limit,
      this.lastItem ? this.lastItem.name : undefined,
      this.filter
    );
    this.scholarshipsCount = await this.scholarshipService.getScholarShipCount(
      this.filter
    );
    this.lastItem = this.scholarshipList[this.limit - 1];
    this.utiltiy.hideLoader();
  }

  handlePageEvent($event: any) {
    if (this.limit !== $event.pageSize) {
      this.limit = $event.pageSize;
      this.lastItem = undefined;
      this.getData();
    } else if ($event.pageIndex > 0) {
      this.getData();
    }
  }

  filterChanged() {
    this.getData();
  }

  clearFilter() {
    this.filter = '';
    this.getData();
  }
}
