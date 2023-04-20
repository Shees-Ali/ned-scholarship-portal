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
  limit: number = 10;
  lastItem: any = undefined;
  searchTerm: string = '';
  filter: string = '';
  constructor(injector: Injector) {
    super(injector);
  }

  async ngOnInit(): Promise<void> {
    this.utiltiy.isPages.next(true);
    await this.getData();
  }

  async getData() {
    this.utiltiy.showLoader();
    console.log(this.lastItem);
    this.scholarshipList = await this.scholarshipService.getScholarShipList(
      this.limit,
      this.lastItem ? this.lastItem.key : undefined
    );
    this.scholarshipsCount =
      await this.scholarshipService.getScholarShipCount();
    this.lastItem = this.scholarshipList[this.limit - 1];
    console.log(this.scholarshipsCount);
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
