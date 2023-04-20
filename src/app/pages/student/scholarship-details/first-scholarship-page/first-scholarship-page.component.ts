import { Component, Input, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'first-scholarship-page',
  templateUrl: './first-scholarship-page.component.html',
  styleUrls: ['./first-scholarship-page.component.scss'],
})
export class FirstScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;

  constructor(injector: Injector) {
    super(injector);
  }

  getFormattedKey(keyName: any) {
    let words = keyName.split('_');
    let formattedString = words
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedString;
  }
}
