import {
  Component,
  OnInit,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface GuardianDependents {
  name: string;
  relation: string;
  age: number;
  occupation: string;
  isEdit: boolean;
}

@Component({
  selector: 'app-second-form-page',
  templateUrl: './second-form-page.component.html',
  styleUrls: ['./second-form-page.component.scss'],
})
export class SecondFormPageComponent extends BasePage implements OnInit {
  secondFormGroup: FormGroup<any>;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  user: any;
  breakpoint: number = 0;
  span2:number = 2;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);

  dependents_data: GuardianDependents[] = [
    {
      name: '',
      relation: '',
      age: 0,
      occupation: '',
      isEdit: false,
    },
  ];

  constructor(injector: Injector, breakpointObserver: BreakpointObserver) {
    super(injector);
    this.secondFormGroup = this.formBuilder.group({
      guardian_name: ['', [Validators.required]],
      guardian_relation: ['', [Validators.required]],
      guardian_occupation: ['', [Validators.required]],
      gross_income: ['', [Validators.required]],
      number_of_earners: ['', [Validators.required]],
      total_income: ['', [Validators.required]],
      guardian_contact: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      guardian_contact_office: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      guardian_monetry_assistance: [''],
      guardian_residential_address: ['', [Validators.required]],
    });
    this.storage.get('user_obj').then((string) => {
      if (string) {
        this.user = JSON.parse(string);
        this.setValues();
      }
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

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 3;
    this.span2 = (window.innerWidth <= 900) ? 1 : 2;
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 3;  
    this.span2 = (window.innerWidth <= 900) ? 1 : 2;
  }
  async setValues() {
    if (this.user.isProfileComplete) {
      const student = await this.studentService.getStudentData(
        this.user.user_id
      );
      if (student) {
        const form = student.guardian_info;
        this.dependents_data = student.guardian_info.dependents;
        delete form['dependents'];
        this.secondFormGroup.setValue(form);
      }
      return;
    }
    const string = await this.storage.get('profileCompletion:second');
    if (string) {
      const form = JSON.parse(string);
      console.log(form);
      this.dependents_data = form['dependents'];
      delete form['dependents'];
      console.log(form);
      this.secondFormGroup.setValue(form);
    }
  }

  addDependent(): void {
    this.dependents_data.push({
      name: '',
      relation: '',
      age: 0,
      occupation: '',
      isEdit: false,
    });
  }

  removeDependent(index: number): void {
    this.dependents_data.splice(index, 1);
  }

  async nextPage() {
    console.log(this.secondFormGroup.valid);
    console.log(this.secondFormGroup);
    console.log(this.secondFormGroup.value);
    if (this.dependents_data.length == 0) {
      return this.utiltiy.openSnackBar('Please Enter Dependents Data', 'OK');
    }
    if (!this.secondFormGroup.valid) {
      return this.utiltiy.openSnackBar('Please Fill All the Fields !', 'OK');
    }
    const _form = this.secondFormGroup.value;
    _form['dependents'] = this.dependents_data;
    const form: string = JSON.stringify(_form);
    this.storage.set('profileCompletion:second', form);
    this.next.emit();
  }

  async prevPage() {
    if (this.secondFormGroup.dirty) {
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
