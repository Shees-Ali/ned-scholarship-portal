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
  selector: 'app-second-form-page',
  templateUrl: './second-form-page.component.html',
  styleUrls: ['./second-form-page.component.scss']
})
export class SecondFormPageComponent extends BasePage implements OnInit {
  @Input('secondFormGroup') secondFormGroup: any;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  profileImg: string = '';

  constructor(injector: Injector) {
    super(injector);
    this.secondFormGroup = this.formBuilder.group({
      guardian_name: ['' , [Validators.required,],],
      guardian_relation: ['', [Validators.required,]],
      guardian_occupation: ['', [Validators.required,]],
      gross_income: ['', [Validators.required,]],
      number_of_earners: ['', [Validators.required,]],
      total_income: ['', [Validators.required,]],
      guardian_contact: ['', [Validators.required,]],
      guardian_contact_office: ['', [Validators.required,]],
      guardian_monetry_assistance:[''],
      guardian_residential_address: ['', [Validators.required,]],
    });
  }

  ngOnInit(): void {
    console.log(this.secondFormGroup);
  }
}
