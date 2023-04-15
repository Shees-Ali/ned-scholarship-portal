import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent extends BasePage {
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  particulars_of_applicant: any;
  guardian_info: any;
  academic_records: any;
  ifFormEmpty: boolean = true;
  user: any;
  declaration: boolean = false;
  documents: Array<any> = [];
  constructor(injector: Injector) {
    super(injector);
    this.userService.getCurrentUser().then((res: any) => {
      this.user = res;
      this.setValues();
    });
  }

  async setValues(): Promise<void> {
    const student = await this.studentService.getStudentData(this.user.user_id);
    const first_string = await this.storage.get('profileCompletion:first');
    const second_string = await this.storage.get('profileCompletion:second');
    const third_string = await this.storage.get('profileCompletion:third');
    const files = await this.storage.get('profileCompletion:fourth');

    this.declaration = student ?? true;


    if (!first_string || !second_string || !third_string || !files) {
      if (student) {
        this.particulars_of_applicant = student.particulars_of_applicant;
        this.guardian_info = student.guardian_info;
        this.academic_records = student.academic_records;
        this.documents = student.documents;
      }
    }

    if (first_string) {
      const form = JSON.parse(first_string);
      form['first_name'] = this.user.first_name;
      form['last_name'] = this.user.last_name;
      form['email'] = this.user.email;
      this.particulars_of_applicant = form;
    }
    if (second_string) {
      const form = JSON.parse(second_string);
      this.guardian_info = form;
    }
    if (first_string) {
      const form = JSON.parse(third_string);
      this.academic_records = form;
    }
    if (files) {
      this.documents = JSON.parse(files);
    }
  }

  async prevPage() {
    const flag = await this.utiltiy.openConfirmationDialog(
      'Go Back?',
      'Are you sure you want to go back?',
      'No',
      'Yes'
    );
    if (flag) {
      this.back.emit();
    } else {
      return;
    }
  }

  async submit() {
    if (!this.declaration) {
      return this.utiltiy.openSnackBar('Please check Declaration.', 'OK');
    }

    const flag = await this.utiltiy.openConfirmationDialog(
      'Confirm',
      "Are you sure that all the data that you've provided is correct and without any typos?",
      'No',
      'Yes'
    );

    if (!flag) {
      return;
    }

    const acknowledgement = await this.utiltiy.openConfirmationDialog(
      'Acknowledgement',
      'Do you acknowledge that in case of any mistakes, NED holds the right to reject any scholarship applications that you might submit with this data. ',
      'No',
      'Yes I Acknowldge'
    );

    if (!acknowledgement) {
      return;
    }

    const obj = {
      student_id: this.user.user_id,
      particulars_of_applicant: this.particulars_of_applicant,
      guardian_info: this.guardian_info,
      academic_records: this.academic_records,
      documents: this.documents,
    };

    this.studentService.setStudentData(this.user.user_id, obj).then((res) => {
      this.userService.updateUser(this.user.user_id, {
        isProfileComplete: true,
      });
    });
  }

  getFormattedKey(keyName: any) {
    let words = keyName.split('_');
    let formattedString = words
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedString;
  }
}
