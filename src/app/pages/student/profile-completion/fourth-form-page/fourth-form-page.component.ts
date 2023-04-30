import {
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  OnDestroy,
  OnInit,
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
export class FourthFormPageComponent
  extends BasePage
  implements OnDestroy, OnInit
{
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('fileSelector', { static: false }) file_selector!: ElementRef;
  selectedFiles: FileUpload[] = [];
  currentFileUpload?: FileUpload;
  percentage: number = 0;
  user: any;
  fileUploaded: boolean = false;
  uploadedFiles: Array<any> = [];

  constructor(injector: Injector) {
    super(injector);
    this.authService.getUser().then(async (res: any) => {
      this.user = await this.userService.getUserData(res?.uid);
      this.getUploadedFiles();
    });
  }

  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    if (this.uploadedFiles.length > 0) {
      const files = JSON.stringify(this.uploadedFiles);
      this.storage.set('profileCompletion:fourth', files);
    }
  }

  async getUploadedFiles(): Promise<void> {
    if (this.user.isProfileComplete) {
      const student = await this.studentService.getStudentData(
        this.user.user_id
      );
      if (student) {
        this.uploadedFiles = student.documents;
      }
      return;
    }

    const files = await this.storage.get('profileCompletion:fourth');
    if (files) {
      this.uploadedFiles = JSON.parse(files);
    }
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
      let reader = new FileReader();
      reader.readAsArrayBuffer(files[index]);
      reader.onload = () => { 
        console.log(reader.result);
        file['extra'] = reader.result;
      }
      const isPDF = file.name?.toLowerCase().includes('.pdf');
      if (!isPDF) {
        this.utiltiy.openSnackBar('Only PDF files allowed !', 'Okay', 'error');
      } else {
        this.selectedFiles?.push(file);
      }
    }
  }

  async upload(): Promise<void> {
    const flag = await this.utiltiy.openConfirmationDialog(
      'Are you sure?',
      'Are you sure you want to upload these documents?',
      'No',
      'Yes'
    );

    if (flag) {
      for (let index = 0; index < this.selectedFiles.length + 1; index++) {
        this.selectedFiles[index].progress = true;
        const file = this.selectedFiles[index];
        const res = await this.firebase.pushFileToStorage(
          file,
          this.user.user_id
        );
        this.uploadedFiles.push(res);
        this.selectedFiles.splice(index, 1);
      }

      this.fileUploaded = true;
    }
  }

  cancel(): void {
    this.selectedFiles = [];
  }

  cancelSelected(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  async deleteSelected(index: number): Promise<void> {
    const flag = await this.utiltiy.openConfirmationDialog(
      'Are you sure?',
      'Are you sure you want to Delete this document?',
      'Yes',
      'No'
    );
    if (flag) {
      return;
    }

    this.firebase
      .deleteFile(this.uploadedFiles[index].file_name, this.user.user_id)
      .then((res) => {
        console.log(res);
        this.uploadedFiles.splice(index, 1);
      });
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
    if (this.selectedFiles.length > 0) {
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
