import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'scholarship-card',
  templateUrl: './scholarship-card.component.html',
  styleUrls: ['./scholarship-card.component.scss']
})
export class ScholarshipCardComponent extends BasePage {
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.userService.getCurrentUser().then((res: any) => {
      this.user = res;
    });
  }
  to_apply(){
    this.nav.navigateTo('student/scholarship-details');
  }
  to_edit(){
    this.nav.navigateTo('admin/applicant-list');
  }
}
