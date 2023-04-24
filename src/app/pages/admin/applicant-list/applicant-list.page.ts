import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.page.html',
  styleUrls: ['./applicant-list.page.scss'],
})
export class ApplicantListComponent extends BasePage implements OnInit {
  scholarship_id: string = '';
  constructor(injector: Injector) {
    super(injector);
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
