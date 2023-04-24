import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrls: ['./my-applications-list.component.scss'],
})
export class MyApplicationsListComponent extends BasePage implements OnInit {
  @Input('application_list') application_list?: Array<any>;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.application_list);
  }

  toApplication(application: any) {
    this.nav.navigateTo('student/application', {
      queryParams: {
        application: JSON.stringify(application),
        isStudent: true
      },
    });
  }
}
