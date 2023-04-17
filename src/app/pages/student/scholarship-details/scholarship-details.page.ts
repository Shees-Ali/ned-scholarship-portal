import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-scholarship-details',
  templateUrl: './scholarship-details.page.html',
  styleUrls: ['./scholarship-details.page.scss'],
})
export class ScholarshipDetailsPage extends BasePage implements OnInit {
  selectedTab: number = 1;
  scholarship: any;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  async ngOnInit(): Promise<void> {
    const id = this.nav.getQueryParams()['key'];
    console.log(id);
    this.scholarship = await this.scholarshipService.getScholarshipData(id);
    console.log(this.scholarship)
  }

  changeTab(index: number) {
    this.selectedTab = index;
  }
}
