import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-scholarship',
  templateUrl: './enter-scholarship.page.html',
  styleUrls: ['./enter-scholarship.page.scss'],
})
export class EnterScholarshipComponent extends BasePage implements OnInit {
  scholarshipDetailsFormGroup: FormGroup<any>;
  constructor(injector: Injector) {
    super(injector);
    this.scholarshipDetailsFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      sponsor_name: ['', Validators.required],
      description: ['', Validators.required],
      criteria: ['', Validators.required],
      due_date: ['', Validators.required],
      // img: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.utiltiy.isPages.next(true);
  }

  submit() {
    if (!this.scholarshipDetailsFormGroup.valid) {
      return this.utiltiy.openSnackBar('Please Fill All the Fields !', 'OK');
    }

    const formValue = this.scholarshipDetailsFormGroup.value;
    this.scholarshipService.setScholarshipData(formValue).then((res) => {
      console.log(res);
      if (res) {
        this.nav.navigateTo('admin/scholarships');
      }
    });
  }

  onImage($event: any) {}
}
