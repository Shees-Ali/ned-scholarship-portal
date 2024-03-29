import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'scholarship-card',
  templateUrl: './scholarship-card.component.html',
  styleUrls: ['./scholarship-card.component.scss'],
})
export class ScholarshipCardComponent extends BasePage implements OnInit {
  @Input('scholarship') scholarship?: any;
  user: any;

  constructor(injector: Injector) {
    super(injector);
    this.storage.get('user_obj').then((string) => {
      if (string) {
        this.user = JSON.parse(string);
      }
    });
  }

  async ngOnInit(): Promise<void> {}

  to_apply() {
    this.nav.navigateTo('student/scholarship-details', {
      queryParams: {
        key: this.scholarship.key,
      },
    });
  }

  to_edit() {
    this.nav.navigateTo('admin/applicant-list', {
      queryParams: {
        key: this.scholarship.key,
      },
    });
  }

  apply_now() {
    this.nav.navigateTo('student/scholarship-details', {
      queryParams: {
        key: this.scholarship.key,
      },
    });
  }
}
