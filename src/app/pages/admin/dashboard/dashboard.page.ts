import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  student_count: number = 0;
  users_count: number = 0;
  scholarship_count: number = 0;
  constructor(injector: Injector,) {
    super(injector);
  }

  async ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.student_count = await this.studentService.countStudents();
    this.users_count = await this.userService.countUsers();
    this.scholarship_count = await this.scholarshipService.getScholarShipCount();
  }

  to_enter_scholarship(){
    this.nav.navigateTo('admin/enter-scholarship');
  }

  to_view_scholarships(){
    this.nav.navigateTo('admin/scholarships');
  }

  to_view_students(){
    this.nav.navigateTo('admin/allstudents');
  }
}
