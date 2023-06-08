import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.page.html',
  styleUrls: ['./donor.page.scss'],
})
export class DonorPage extends BasePage implements OnInit {
  donor_id: any;
  donor: any;
  sponsorsList: any[] = [];
  isLoading: boolean = false;
  asssitForSemester: boolean = false;
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  async ngOnInit(): Promise<void> {
    this.donor_id = this.nav.getQueryParams()['donor_id'];
    this.user = await this.userService.getUserData(this.donor_id);
  }

  goBack() {
    this.nav.pop();
  }

  async getsponsorsList1() {
    this.isLoading = true;
    this.sponsorsList =
      await this.sponsorshipService.getSponsorsByUserID(
        this.donor_id,
        1000
      );
    console.log(this.sponsorsList);
    this.isLoading = false;
  }

  async requestforSemesterAssist() {
    
  }
}
