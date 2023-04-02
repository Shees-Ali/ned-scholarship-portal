import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent extends BasePage {
  constructor(injector: Injector) {
    super(injector);
  }
  @Input() isExpanded?: boolean;

  public routeLinks = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard' },
    {
      link: 'profile-completion',
      name: 'Profile Completion',
      icon: 'account_balance',
    },
  ];

  goTo(link: string) {
    console.log(link);
    this.nav.navigateTo('student/' + link);
  }
}
