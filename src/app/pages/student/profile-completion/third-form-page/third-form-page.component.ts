import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface AcadmicRecords {
  class_year?: string;
  seat_no?: string;
  totalmarks_cgpa?: number;
  marks_gpa?: number;
  percentage?: string;
  merit_postion?: string;
  isEdit?: boolean;
}

@Component({
  selector: 'app-third-form-page',
  templateUrl: './third-form-page.component.html',
  styleUrls: ['./third-form-page.component.scss'],
})
export class ThirdFormPageComponent extends BasePage {
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  user: any;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);

  academic_records: AcadmicRecords[] = [
    {
      class_year: '',
      seat_no: '',
      totalmarks_cgpa: undefined,
      marks_gpa: undefined,
      percentage: '',
      merit_postion: '',
      isEdit: true,
    },
  ];

  constructor(injector: Injector, breakpointObserver: BreakpointObserver) {
    super(injector);
    this.authService.getUser().then(async (res: any) => {
      this.user = await this.userService.getUserData(res?.uid);
      this.setValues();
    });
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

  ngOnInit(): void {}

  async setValues(): Promise<any> {
    if (this.user.isProfileComplete) {
      const student = await this.studentService.getStudentData(
        this.user.user_id
      );
      if (student) {
        this.academic_records = student.academic_records;
      }
      return;
    }

    const string = await this.storage.get('profileCompletion:third');
    if (string) {
      const data = JSON.parse(string);
      console.log(data);
      this.academic_records = data;
    }
  }

  addRecord(): void {
    this.academic_records.push({
      class_year: '',
      seat_no: '',
      totalmarks_cgpa: undefined,
      marks_gpa: undefined,
      percentage: '',
      merit_postion: '',
      isEdit: true,
    });
  }

  removeRecord(index: number): void {
    this.academic_records.splice(index, 1);
  }

  async nextPage() {
    if (this.academic_records.length == 0) {
      return this.utiltiy.openSnackBar('Please Enter Academic Data', 'OK');
    }

    const string = JSON.stringify(this.academic_records);
    this.storage.set('profileCompletion:third', string);
    this.next.emit();
  }

  async prevPage() {
    if (true) {
      const flag = await this.utiltiy.openConfirmationDialog(
        'Go Back?',
        'Are you sure you want to go back? Doing so will reset the form.',
        'No',
        'Yes'
      );
      if (flag) {
        this.back.emit();
      } else {
        return;
      }
    } else {
      this.back.emit();
    }
  }
}
