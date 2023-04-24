import { Component, Injector, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MatDialog } from '@angular/material/dialog';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'submit-application-page',
  templateUrl: './submit-application-page.component.html',
  styleUrls: ['./submit-application-page.component.scss'],
})
export class SubmitApplicationPageComponent extends BasePage {
  acknowledgment: boolean = false;
  @Input('scholarship') scholarship: any;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'Red Text',
        class: 'redText',
      },
      {
        name: 'Bold',
        class: 'boldText',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  cover_letter: any = '';
  canApply: boolean = true;
  constructor(injector: Injector, public dialog: MatDialog) {
    super(injector);
    this.userService.getCurrentUser().then(async (res: any) => {
      let user = res;
      this.canApply = await this.applicationService.checkIfUserApplied(
        user.user_id,
        this.scholarship.key
      );
      console.log(this.canApply);
    });
  }

  async submit() {
    let date = new Date();
    if (this.cover_letter == '') {
      return this.utiltiy.openSnackBar(
        'Cover Letter is required',
        'OK',
        'error'
      );
    }

    if (!this.acknowledgment) {
      return this.utiltiy.openSnackBar('Please check Acknowledgment.', 'OK');
    }

    const acknowledgement = await this.utiltiy.openConfirmationDialog(
      'Acknowledgement',
      'Do you acknowledge that in case of any mistakes in the provided data, NED holds the right to reject any scholarship applications that you might submit with this data. ',
      'No',
      'Yes I Acknowldge'
    );

    if (!acknowledgement) {
      return;
    }

    const user = await this.userService.getCurrentUser();
    const application = {
      student_id: user.user_id,
      student_name: user.first_name + ' ' + user.last_name,
      student_email: user.email,
      scholarship_id: this.scholarship.key,
      cover_letter: this.cover_letter,
      submitted_date: date.toLocaleDateString(),
      status: 'under-review',
    };
    console.log(application);
    this.applicationService.setApplicationsData(application).then((res) => {
      if (!user.has_applied) {
        this.userService.updateUser(user.user_id, {
          has_applied: true,
          has_granted: false,
        });
      }
      this.nav.navigateTo('student/dashboard');
    });
  }
}
