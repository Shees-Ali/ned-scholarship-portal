import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

interface ApplicantsList {
  id?: number;
  name?: string;
  guardian_name?: string;
  batch?: number;
  application?: boolean;
  download?: boolean;
}
@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.page.html',
  styleUrls: ['./applicant-list.page.scss']
})
export class ApplicantListComponent extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }

  applicants_list: ApplicantsList[] = [
    {
      id: 101,
      name: 'ahmed',
      guardian_name: 'ali',
      batch: 2022,
      application: false,
      download: false,
    },
  ]
  
  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }

  to_application(){
    this.nav.navigateTo('admin/application');
  }
}
