import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

interface AcadmicRecords {
  class_year?: string;
  seat_no?: string;
  totalmarks_cgpa?: number;
  marks_gpa?: number;
  percentage?: string;
  merit_postion?: string;
  isEdit?: boolean;
}

@Component({
  selector: 'app-third-form-page',
  templateUrl: './third-form-page.component.html',
  styleUrls: ['./third-form-page.component.scss'],
})
export class ThirdFormPageComponent extends BasePage {
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  academic_records: AcadmicRecords[] = [
    {
      class_year: '',
      seat_no: '',
      totalmarks_cgpa: undefined,
      marks_gpa: undefined,
      percentage: '',
      merit_postion: '',
      isEdit: true,
    },
  ];

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}

  addRecord(): void {
    this.academic_records.push({
      class_year: '',
      seat_no: '',
      totalmarks_cgpa: undefined,
      marks_gpa: undefined,
      percentage: '',
      merit_postion: '',
      isEdit: true,
    });
  }

  removeRecord(index: number): void {
    this.academic_records.splice(index, 1);
  }

  async nextPage() {
    if (this.academic_records.length == 0) {
      return this.utiltiy.openSnackBar('Please Enter Dependents Data', 'OK');
    }

    const string = '';
    this.storage.set('profileCompletion:third', string);
  }

  async prevPage() {
    if (true) {
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
