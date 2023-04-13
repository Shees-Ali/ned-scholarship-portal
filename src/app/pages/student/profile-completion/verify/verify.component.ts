import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent extends BasePage {
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  personal_info: any;
  guardian_info: any;
  academic_record: any;
  documents_list: any;
  ifFormEmpty: boolean = true;
  user: any;

  constructor(injector: Injector) {
    super(injector);
    this.setValues();
    this.userService.getCurrentUser().then((res: any) => {
      this.user = res;
      this.setValues();
    });
  }

  async setValues(): Promise<void> {
    const first_string = await this.storage.get('profileCompletion:first');
    if (first_string) {
      const form = JSON.parse(first_string);
      form['first_name'] = this.user.first_name;
      form['last_name'] = this.user.last_name;
      form['email'] = this.user.email;
      this.personal_info = form;
    }
    const second_string = await this.storage.get('profileCompletion:second');
    if (second_string) {
      const form = JSON.parse(second_string);
      this.guardian_info = form;
    }
    const third_string = await this.storage.get('profileCompletion:third');
    if (first_string) {
      const form = JSON.parse(third_string);
      this.academic_record = form;
    }
  }
}
