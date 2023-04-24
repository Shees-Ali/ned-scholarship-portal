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
  }

  async ngOnInit(): Promise<void> {
    const string = await this.storage.get('user_obj');
    if (string) {
      this.user = JSON.parse(string);
    } else {
      this.userService.getCurrentUser().then((res: any) => {
        this.user = res;
      });
    }
  }

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
}
