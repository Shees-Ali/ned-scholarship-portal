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
  styleUrls: ['./allstudents.page.scss']
})
export class AllstudentsPage extends BasePage implements OnInit {
  constructor(injector: Injector,) {
    super(injector);
  }

  all_students_list: AllStudentsList[] = [
    {
      roll_no: 'CT-087',
      name: 'Anon',
      guardian_name: 'Big Anon',
      email: 'anon@cloud.neduet.edu.pk',
      scholarship_status: 'Not Received',
    },
  ]
  
  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }
}
