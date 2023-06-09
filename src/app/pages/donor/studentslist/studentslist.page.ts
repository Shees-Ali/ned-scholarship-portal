import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Injector, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.page.html',
  styleUrls: ['./studentslist.page.scss'],
})
export class StudentslistPage extends BasePage implements OnInit {
  studentsList: any;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  user: any;
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);

  constructor(injector: Injector, breakpointObserver: BreakpointObserver) {
    super(injector);
    this.utiltiy.isPages.next(true);
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  async ngOnInit(): Promise<void> {
    this.utiltiy.showLoader();
    const students = await this.studentService.getStudentsList(1000);
    console.log(students);
    this.studentsList = students.filter((x: any) => {
      if (!x.has_granted) {
        return x;
      }
    });

    for (let index = 0; index < this.studentsList.length; index++) {
      const element = this.studentsList[index];
      if (element.isProfileComplete) {
        element['particulars'] =
          await this.studentService.getStudentParticulars(element.user_id);
      }
    }
    let user = await this.userService.getCurrentUser();
    this.user = await this.donorService.getDonorData(user.user_id);
    this.utiltiy.hideLoader();
  }

  studentDetails(student: any) {
    this.nav.navigateTo('donor/student-list/student', {
      queryParams: {
        student_id: student.user_id,
      },
    });
  }
}
