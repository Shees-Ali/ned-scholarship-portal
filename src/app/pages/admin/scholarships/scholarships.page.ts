import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.page.html',
  styleUrls: ['./scholarships.page.scss'],
})
export class ScholarshipsPage extends BasePage implements OnInit {
  scholarshipList: any[] = [];
  scholarshipsCount: number = 0;
  limit: number = 5;
  lastItem: any = undefined;
  filter: string = '';
  searchTerm: string = '';
  constructor(injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.utiltiy.isPages.next(true);
    await this.getData();
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
