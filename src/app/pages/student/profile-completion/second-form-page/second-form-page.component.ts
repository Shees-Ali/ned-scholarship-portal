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
  displayedColumns: string[] = [
    'name',
    'relation',
    'age',
    'occupation',
    'isEdit',
  ];
  dependents_data: GuardianDependents[] = [
    {
      name: '',
      relation: '',
      age: 0,
      occupation: '',
      isEdit: false,
    },
  ];

  constructor(injector: Injector) {
    super(injector);
    this.secondFormGroup = this.formBuilder.group({
      guardian_name: ['', [Validators.required]],
      guardian_relation: ['', [Validators.required]],
      guardian_occupation: ['', [Validators.required]],
      gross_income: ['', [Validators.required]],
      number_of_earners: ['', [Validators.required]],
      total_income: ['', [Validators.required]],
      guardian_contact: ['', [Validators.required]],
      guardian_contact_office: ['', [Validators.required]],
      guardian_monetry_assistance: [''],
      guardian_residential_address: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    console.log(this.secondFormGroup);
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

  async nextPage() {}

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
