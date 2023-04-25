import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

interface AllStudentsList {
  roll_no?: string;
  name?: string;
  guardian_name?: string;
  email?: string;
  scholarship_status?: string;
}

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.page.html',
  styleUrls: ['./allstudents.page.scss'],
})
export class AllstudentsPage extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  all_students_list: any[] = [];

  ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.getData();
  }

  async getData() {
    this.utiltiy.showLoader();
    this.all_students_list = await this.studentService.getStudentsList(10);
    for (let index = 0; index < this.all_students_list.length; index++) {
      const element = this.all_students_list[index];
      if (element.isProfileComplete) {
        element['particulars'] =
          await this.studentService.getStudentParticulars(element.user_id);
      }
    }
    console.log(this.all_students_list);
    this.utiltiy.hideLoader();
  }
}
