import { Component, Injector, Input } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent extends BasePage {
  @Input() isExpanded?: boolean;
  public routeLinks = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard' },
    {
      link: 'profile-completion',
      name: 'Profile Completion',
      icon: 'verified_user',
    },
    {
      link: 'scholarships',
      name: 'Scholarships',
      icon: 'school',
    },
    {
      link: 'my-applications',
      name: 'My Application',
      icon: 'pages',
    },
    {
      link: 'logout',
      name: 'Log out',
      icon: 'exit_to_app',
    },
  ];
  public routeLinksAdmin = [
    { link: 'dashboard', name: 'Dashboard', icon: 'dashboard' },
    {
      link: 'scholarships',
      name: 'Scholarships',
      icon: 'school',
    },
    {
      link: 'logout',
      name: 'Log out',
      icon: 'exit_to_app',
    },
  ];
  user: any;
  constructor(injector: Injector) {
    super(injector);
  }

  async ngOnInit() {
    const string = await this.storage.get('user_obj');
    if (string) {
      this.user = JSON.parse(string);
      if (this.user.isProfileComplete) {
        this.routeLinks[1].name = 'Update Profile';
      }
    } else {
      this.userService.getCurrentUser().then((res: any) => {
        this.user = res;
        if (this.user.isProfileComplete) {
          this.routeLinks[1].name = 'Update Profile';
        }
        this.storage.set('user_obj', JSON.stringify(res));
      });
    }
  }

  goTo(link: string) {
    if (link == 'logout') {
      return this.authService.logOut();
    }
    this.nav.navigateTo(this.user.role + '/' + link);
  }
}
