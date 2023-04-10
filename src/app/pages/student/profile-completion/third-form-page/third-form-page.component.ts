import { Component,
  OnInit,
  Injector,
  Output,
  EventEmitter, 
} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';

export interface AcademicRecord {
 year: number;
 seatNo : string;
 totalMarks : number;
 obtainedMarks: number;
 percentage: number;
 position: string;
 isEdit: boolean;
}

@Component({
  selector: 'app-third-form-page',
  templateUrl: './third-form-page.component.html',
  styleUrls: ['./third-form-page.component.scss']
})
export class ThirdFormPageComponent extends BasePage implements OnInit {
  thirdFormGroup: FormGroup<any>;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: string[] = [
    'year',
    'seatNo',
    'totalMarks',
    'obtainedMarks',
    'percentage',
    'position',
    'isEdit',
  ];
  academic_data: AcademicRecord[] = [
    {
      year: 0,
      seatNo : '',
      totalMarks : 0,
      obtainedMarks: 0,
      percentage: 0,
      position: '',
      isEdit: false,
    },
  ];
  constructor(injector: Injector) {
    super(injector);
    this.thirdFormGroup = this.formBuilder.group({
    })
  }
  


  ngOnInit(): void {}
  addRecord(): void {
    this.academic_data.push({
      year: 0,
      seatNo : '',
      totalMarks : 0,
      obtainedMarks: 0,
      percentage: 0,
      position: '',
      isEdit: false,
    });
  }
  removeRecord(index: number): void {
    this.academic_data.splice(index, 1);
  }
  async nextPage() {
    if (this.academic_data.length == 0) {
      return this.utiltiy.openSnackBar('Please Enter Academic Records', 'OK');
    }
    const _form = this.thirdFormGroup.value;
    _form['academics'] = this.academic_data;
    const form: string = JSON.stringify(_form);
    this.storage.set('profileCompletion:third', form);
  }
  async prevPage() {
    if (this.thirdFormGroup.dirty) {
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
