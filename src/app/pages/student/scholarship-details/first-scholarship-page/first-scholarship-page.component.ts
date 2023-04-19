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
}
