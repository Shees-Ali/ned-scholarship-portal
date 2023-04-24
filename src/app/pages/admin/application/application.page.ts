import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage extends BasePage implements OnInit {
  application: any;
  isStudent: boolean = false;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {
    this.utiltiy.isPages.next(true);
    const string = this.nav.getQueryParams()['application'];
    if (this.nav.getQueryParams()['isStudent']) {
      this.isStudent = this.nav.getQueryParams()['isStudent'];
    }
    this.application = JSON.parse(string);
  }

  approve() {
    const obj = {
      status: 'accepted',
    };
    this.applicationService.acceptApplication(this.application.key, obj).then(
      (res) => {
        this.userService.updateUser(this.application.student_id, {
          has_granted: true,
        });

        this.nav.navigateTo('admin/dashboard');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ok() {
    this.nav.pop();
  }
}
