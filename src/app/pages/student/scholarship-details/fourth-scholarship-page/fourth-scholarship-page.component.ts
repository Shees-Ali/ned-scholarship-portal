import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'fourth-scholarship-page',
  templateUrl: './fourth-scholarship-page.component.html',
  styleUrls: ['./fourth-scholarship-page.component.scss'],
})
export class FourthScholarshipPageComponent extends BasePage {
  @Input('scholarship') scholarship: any;
  termsAndConditions = [
    "Applicants are required to fill the information through online application process. Requests for amendment will not be entertained after submission of online application.",
    "An awardee is not to hold any other scholarship/stipend during the fellowship period of his/her study.",
    "The candidates who are already availing any other scholarship are not eligible to apply.",
    "Undergraduate scholarship age limit maximum 23 year",
    "Having completed 12th Grade exam no later than 2018.",
    "Merit list will be prepared on the basis of online data / information provided by the applicant. In case any information is found to be untrue/ misrepresented at any stage; the application process will be terminated."
  ];
  
  constructor(injector: Injector) {
    super(injector);
  }
}
