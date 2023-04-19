import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'fourth-scholarship-page',
  templateUrl: './fourth-scholarship-page.component.html',
  styleUrls: ['./fourth-scholarship-page.component.scss'],
})
export class FourthScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;

  constructor(injector: Injector) {
    super(injector);
  }
}
