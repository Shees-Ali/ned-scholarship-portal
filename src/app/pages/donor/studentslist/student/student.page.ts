import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage extends BasePage implements OnInit {
  student_id: any;
  student: any;
  applicationsList: any[] = [];
  isLoading: boolean = false;
  asssitForSemester: boolean = false;
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  async ngOnInit(): Promise<void> {
    this.student_id = this.nav.getQueryParams()['student_id'];
    this.student = await this.userService.getUserData(this.student_id);
  }

  goBack() {
    this.nav.pop();
  }

  async getApplicationsList() {
    this.isLoading = true;
    this.applicationsList =
      await this.applicationService.getApplicationsByUserID(
        this.student_id,
        1000
      );
    console.log(this.applicationsList);
    this.isLoading = false;
  }

  async requestforSemesterAssist() {
    const acknowledgement = await this.utiltiy.openConfirmationDialog(
      'Acknowledgement',
      'Do you acknowledge that NED holds the right to accept or reject your sponsorship.',
      'No',
      'Yes I Acknowldge'
    );

    if (!acknowledgement) {
      return;
    }

    const obj = {
      student_id: this.student_id,
      donor_id: this.user.user_id,
    };
    this.sponsorshipService.setSponsorshipData(obj);
  }
}
