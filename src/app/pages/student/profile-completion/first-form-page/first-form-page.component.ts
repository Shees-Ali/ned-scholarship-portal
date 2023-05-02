import {
  Component,
  Input,
  OnInit,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-first-form-page',
  templateUrl: './first-form-page.component.html',
  styleUrls: ['./first-form-page.component.scss'],
})
export class FirstFormPageComponent extends BasePage implements OnInit {
  firstFormGroup: FormGroup<any>;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  profileImg: string = '';
  user?: any;
  breakpoint: number = 0;
  breakpoint2: number = 0;
  span2:number = 2;
  span15:number = 1.5;
  span3:number = 3;

  constructor(injector: Injector) {
    super(injector);
    this.firstFormGroup = this.formBuilder.group({
      category_admission: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      father_name: ['', Validators.required],
      class: ['', Validators.required],
      roll_no: ['', Validators.required],
      discipline: ['', Validators.required],
      batch: ['', Validators.required],
      district: ['', Validators.required],
      province: ['', Validators.required],
      phone_number: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      alt_phone_number: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      email: ['', Validators.required],
      home_address: ['', Validators.required],
      permanent_address: ['', Validators.required],
    });
    this.storage.get('user_obj').then((string) => {
      if (string) {
        this.user = JSON.parse(string);
        this.setValues();
      }
    });
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 3;
    this.breakpoint2 = (window.innerWidth <= 900) ? 1 : 4;
    this.span2 = (window.innerWidth <= 900) ? 1 : 2;
    this.span15 = (window.innerWidth <= 900) ? 1 : 1.5;
    this.span3 = (window.innerWidth <= 900) ? 1 : 3;
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 3;
    this.breakpoint2 = (event.target.innerWidth <= 900) ? 1 : 4;
    this.span2 = (window.innerWidth <= 900) ? 1 : 2;
    this.span15 = (window.innerWidth <= 900) ? 1 : 1.5;
    this.span3 = (window.innerWidth <= 900) ? 1 : 3;
  }
  async setValues() {
    if (this.user.isProfileComplete) {
      const student = await this.studentService.getStudentData(
        this.user.user_id
      );
      if (student) {
        const form = student.particulars_of_applicant;
        this.profileImg = form['profile_img'] ?? '';
        delete form['profile_img'];
        this.firstFormGroup.setValue(form);
      }
      this.firstFormGroup.controls['first_name'].disable();
      this.firstFormGroup.controls['last_name'].disable();
      this.firstFormGroup.controls['email'].disable();
      return;
    }

    const string = await this.storage.get('profileCompletion:first');
    if (string) {
      const form = JSON.parse(string);
      form['first_name'] = this.user.first_name;
      form['last_name'] = this.user.last_name;
      form['email'] = this.user.email;
      this.firstFormGroup.setValue(form);
    } else {
      if (this.user) {
        this.firstFormGroup.controls['first_name'].setValue(
          this.user.first_name
        );
        this.firstFormGroup.controls['last_name'].setValue(this.user.last_name);
        this.firstFormGroup.controls['email'].setValue(this.user.email);
      }
    }
  }

  onProfilePic($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        if (event.target.result) {
          let f = event.target.result;
          this.profileImg = f;
        }
      };
    }
  }

  changePicture() {
    let element: HTMLElement = document.getElementById(
      'coverfile'
    ) as HTMLElement;
    element.click();
  }

  goToNext() {
    console.log(this.firstFormGroup);
    if (!this.profileImg) {
      return this.utiltiy.openSnackBar('Please Select Profile Picture', 'OK');
    }
    if (!this.firstFormGroup.valid) {
      return this.utiltiy.openSnackBar('Please Fill All the Fields !', 'OK');
    }
    const _form = this.firstFormGroup.value;
    _form['first_name'] = this.user.first_name;
    _form['last_name'] = this.user.last_name;
    _form['email'] = this.user.email;
    _form['profile_img'] = this.profileImg;
    const form: string = JSON.stringify(_form);
    this.storage.set('profileCompletion:first', form);
    this.next.emit();
  }
}
