import {
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';
import { FileUpload } from 'src/app/models/file-upload.model';

@Component({
  selector: 'app-fourth-form-page',
  templateUrl: './fourth-form-page.component.html',
  styleUrls: ['./fourth-form-page.component.scss'],
})
export class FourthFormPageComponent extends BasePage {
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('fileSelector', { static: false }) file_selector!: ElementRef;
  file_selection_form: FormGroup;
  selectedFiles: FileUpload[] = [];
  currentFileUpload?: FileUpload;
  percentage: number = 0;
  constructor(injector: Injector) {
    super(injector);
    this.file_selection_form = new FormGroup({
      file_selection: new FormControl(),
    });
  }

  openFileSelector() {
    console.log(this.file_selector);
    const file_selection = this.file_selector.nativeElement;
    file_selection.click();
  }

  selectFile(event: any): void {
    const files = event.target.files;
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      const file: FileUpload = new FileUpload(element);
      const isPDF = file.name?.toLowerCase().includes('.pdf');
      if (!isPDF) {
        this.utiltiy.openSnackBar('Only PDF files allowed !', 'Okay', 'error');
      } else {
        this.selectedFiles?.push(file);
      }
    }
  }

  upload(): void {
    this.selectedFiles.forEach((file: any) => {
      this.firebase.pushFileToStorage(file);
    });
  }

  cancel(): void {
    this.selectedFiles = [];
  }

  cancelSelected(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  openFileUpload() {
    let element: HTMLElement = document.getElementById(
      'fileUpload'
    ) as HTMLElement;
    element.click();
  }

  async nextPage() {
    this.next.emit();
  }

  async prevPage() {
    this.back.emit();
  }
}
