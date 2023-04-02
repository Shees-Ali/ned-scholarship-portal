import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-profile-completion',
  templateUrl: './profile-completion.page.html',
  styleUrls: ['./profile-completion.page.scss'],
})
export class ProfileCompletionPage extends BasePage implements OnInit {
  selectedTab: number = 1;
  firstForm?: FormGroup<any>;
  constructor(injector: Injector) {
    super(injector);
    this.setupForms();
  }

  ngOnInit(): void {}

  async setupForms() {
    this.firstForm = this.formBuilder.group({
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
      phone_number: ['', Validators.required],
      alt_phone_number: ['', Validators.required],
      email: ['', Validators.required],
      home_address: ['', Validators.required],
      permanent_address: ['', Validators.required],
    });
  }

  changeTab(index: number) {
    this.selectedTab = index;
  }

  next() {
    this.selectedTab++;
  }
}
