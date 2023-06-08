import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.page.html',
  styleUrls: ['./applicant-list.page.scss'],
})
export class ApplicantListComponent extends BasePage implements OnInit {
  scholarship_id: string = '';
  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  sort: string = '';
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

  applicants_list: any[] = [];

  ngOnInit() {
    this.utiltiy.isPages.next(true);
    this.scholarship_id = this.nav.getQueryParams()['key'];
    this.getData();
  }

  toApplication(application: any) {
    this.nav.navigateTo('admin/application', {
      queryParams: {
        application: JSON.stringify(application),
      },
    });
  }

  async getData() {
    this.applicants_list =
      await this.applicationService.getApplicationsByScholarShipID(
        this.scholarship_id
      );
    for (let i = 0; i < this.applicants_list.length; i++) {
      const element = this.applicants_list[i];
      const student = await this.studentService.getStudentData(
        element.student_id
      );
      console.log(student);
      element['marks_gpa'] =
        student.academic_records[student.academic_records.length - 1].marks_gpa;
      element['net_worth'] =
        student.guardian_info.total_income /
        student.guardian_info.number_of_earners;
      element['last_acadmic_result'] =
        student.academic_records[
          student.academic_records.length - 1
        ].class_year;
    }
    console.log(this.applicants_list);
  }

  edit() {
    this.nav.navigateTo('admin/enter-scholarship', {
      queryParams: {
        scholarship_id: this.scholarship_id,
      },
    });
  }

  sortChanged() {
    console.log(this.sort);
    switch (this.sort) {
      case 'a_z':
        console.log("here");
        console.log(this.applicants_list);
        this.applicants_list = this.applicants_list.sort( (a, b) => {
          console.log(a, b);
          if (a.student_name < b.student_name) {
            return -1;
          }
          if (a.student_name > b.student_name) {
            return 1;
          }
          return 0;
        });
        console.log(this.applicants_list);
        break;
      case 'gpa':
        this.applicants_list = this.applicants_list.sort( (a, b) => {
          if (a.marks_gpa > b.marks_gpa) {
            return -1;
          }
          if (a.marks_gpa < b.marks_gpa) {
            return 1;
          }
          return 0;
        });
        break;
      case 'need':
        this.applicants_list = this.applicants_list.sort( (a, b) => {
          if (a.net_worth < b.net_worth) {
            return -1;
          }
          if (a.net_worth > b.net_worth) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        break;
    }
  }

  clearSort() {}
}
