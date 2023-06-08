import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.page.html',
  styleUrls: ['./studentslist.page.scss'],
})
export class StudentslistPage extends BasePage implements OnInit {
  studentsList: any;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  async ngOnInit(): Promise<void> {
    const students = this.studentService.getStudentsList(1000);
    console.log(students);
  }
}
