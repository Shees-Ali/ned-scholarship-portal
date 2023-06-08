import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  donorForm: FormGroup<any>;
  breakpoint: number = 0;
  breakpoint2: number = 0;
  span2: number = 2;
  span15: number = 1.5;
  span3: number = 3;
  alumni: boolean = false;
  approved: boolean = false;
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
    this.donorForm = this.formBuilder.group({
      name: ['', Validators.required],
      cnic: [
        '',
        [
          Validators.required,
          Validators.maxLength(13),
          Validators.minLength(13),
        ],
      ],
      city: ['', Validators.required],
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
      sponsorship_name: [''],
      permanent_address: ['', Validators.required],
      amount: ['', Validators.required],
      num_receiver: ['', Validators.required],
      alumni: ['', Validators.required],
      batch: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
    });
  }

  async ngOnInit(): Promise<void> {
    this.breakpoint = window.innerWidth <= 900 ? 1 : 3;
    this.breakpoint2 = window.innerWidth <= 900 ? 1 : 4;
    this.span2 = window.innerWidth <= 900 ? 1 : 2;
    this.span15 = window.innerWidth <= 900 ? 1 : 1.5;
    this.span3 = window.innerWidth <= 900 ? 1 : 3;
    this.user = await this.userService.getCurrentUser();
    console.log(this.user);
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 900 ? 1 : 3;
    this.breakpoint2 = event.target.innerWidth <= 900 ? 1 : 4;
    this.span2 = window.innerWidth <= 900 ? 1 : 2;
    this.span15 = window.innerWidth <= 900 ? 1 : 1.5;
    this.span3 = window.innerWidth <= 900 ? 1 : 3;
  }
  submit() {
    if (!this.donorForm.valid) {
      return this.utiltiy.openSnackBar('Please Fill All the Fields !', 'OK');
    }
    this.utiltiy.showLoader();
    const formValue = this.donorForm.value;
    this.donorService
      .setDonorData(this.user.user_id, formValue)
      .then((res: any) => {
        this.utiltiy.hideLoader();
        if (res) {
          this.nav.navigateTo('donor/studentslist');
        }
      });
    this.approved = !this.approved;
  }
}
