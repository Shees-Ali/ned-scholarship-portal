import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);

  constructor(injector: Injector, breakpointObserver: BreakpointObserver) {
    super(injector);
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
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

  studentDetails(student: any) {
    console.log(student);
  }
}
