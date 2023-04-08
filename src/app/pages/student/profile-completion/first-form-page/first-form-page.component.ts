import {
  Component,
  Input,
  OnInit,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
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
    this.userService.getCurrentUser().then((res: any) => {
      this.user = res;
      this.setValues();
    });
  }

  ngOnInit(): void {}

  async setValues() {
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
    this.firstFormGroup.controls['first_name'].disable();
    this.firstFormGroup.controls['last_name'].disable();
    this.firstFormGroup.controls['email'].disable();
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
    const form: string = JSON.stringify(_form);
    this.storage.set('profileCompletion:first', form);
    this.next.emit();
  }
}
