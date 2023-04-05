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

export interface GuardianDependents {
  position: number;
  name: string;
  relation: string;
  age: number;
  occupation: string;
}

const DEPENDENTS_DATA: GuardianDependents[] = [
  {position: 1, name: 'Ahmed', relation: 'brother', age: 30 , occupation: 'studying'},
  {position: 2, name: 'Ali', relation: 'sister', age: 12 , occupation: 'job'},
]

const COLUMNS_SCHEMA = [
  {
    key: "position",
    type: "number",
    label: "S.No"
},
  {
      key: "name",
      type: "text",
      label: "Full Name"
  },
  {
    key: "relation",
    type: "text",
    label: "Relation"
  },
  {
    key: "age",
    type: "number",
    label: "Age"
  },
  {
      key: "occupation",
      type: "text",
      label: "Studying, Class/Job"
  },
  {
      key: "isEdit",
      type: "isEdit",
      label: ""
  }
]

@Component({
  selector: 'app-second-form-page',
  templateUrl: './second-form-page.component.html',
  styleUrls: ['./second-form-page.component.scss'],
})
export class SecondFormPageComponent extends BasePage implements OnInit {
  @Input('secondFormGroup') secondFormGroup: any;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  profileImg: string = '';
  displayedColumns: string[] = ['position', 'name', 'relation', 'age', 'occupation', 'isEdit'];
  dataSource: any = DEPENDENTS_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

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
