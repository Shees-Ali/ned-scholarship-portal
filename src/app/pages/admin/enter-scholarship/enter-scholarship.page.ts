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
  bannerImg: string = '';
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

  onBannerImg($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        if (event.target.result) {
          let f = event.target.result;
          this.bannerImg = f;
        }
      };
    }
  }

  changePicture() {
    let element: HTMLElement = document.getElementById(
      'bannerfile'
    ) as HTMLElement;
    element.click();
  }

  submit() {
    this.utiltiy.showLoader();
    if (!this.scholarshipDetailsFormGroup.valid) {
      return this.utiltiy.openSnackBar('Please Fill All the Fields !', 'OK');
    }
    if (!this.bannerImg){
      return this.utiltiy.openSnackBar('Please Select a Banner Image', 'OK');
    }

    const formValue = this.scholarshipDetailsFormGroup.value;
    formValue["banner_img"] = this.bannerImg;
    formValue["due_date"] = formValue["due_date"].toLocaleDateString();
    this.scholarshipService.setScholarshipData(formValue).then((res) => {
      this.utiltiy.hideLoader();
      if (res) {
        this.nav.navigateTo('admin/scholarships');
      }
    });
  }

  onImage($event: any) {}
}
