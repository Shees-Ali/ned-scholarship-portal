import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-profile-completion',
  templateUrl: './profile-completion.page.html',
  styleUrls: ['./profile-completion.page.scss'],
})
export class ProfileCompletionPage extends BasePage implements OnInit {
  selectedTab: number = 2;
  constructor(injector: Injector) {
    super(injector);
    this.utiltiy.isPages.next(true);
  }

  ngOnInit(): void {}

  changeTab(index: number) {
    this.selectedTab = index;
  }

  next() {
    this.selectedTab++;
  }

  back() {
    if (this.selectedTab >= 1) {
      this.selectedTab--;
    }
  }
}
