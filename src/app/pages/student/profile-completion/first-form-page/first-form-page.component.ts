import {
  Component,
  Input,
  OnInit,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-first-form-page',
  templateUrl: './first-form-page.component.html',
  styleUrls: ['./first-form-page.component.scss'],
})
export class FirstFormPageComponent extends BasePage implements OnInit {
  @Input('firstFormGroup') firstFormGroup: any;
  @Output('next') next: EventEmitter<any> = new EventEmitter<any>();
  profileImg: string = '';

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log(this.firstFormGroup);
  }

  onProfilePic($event: any) {
    if ($event.target.files && $event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL($event.target.files[0]); // read file as data url
      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        if (event.target.result) {
          let f = event.target.result;
          this.profileImg = f;
        }
      };
    }
  }

  changePicture() {
    let element: HTMLElement = document.getElementById(
      'coverfile'
    ) as HTMLElement;
    element.click();
  }
}
