import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-fourth-form-page',
  templateUrl: './fourth-form-page.component.html',
  styleUrls: ['./fourth-form-page.component.scss'],
})
export class FourthFormPageComponent extends BasePage {
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  @Output('back') back: EventEmitter<any> = new EventEmitter<any>();
  constructor(injector: Injector) {
    super(injector);
  }

  selected_files: {
    file: any,
    is_upload_in_progress: boolean,
    upload_result: any
  }[] = [];
  
  uploadFile(index: number){

  }
  inititateFileCancel(index: number){
    
  }

  openFileSelector(){

  }

  uploadAll(){

  }
  initiateCancelAll(){

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
