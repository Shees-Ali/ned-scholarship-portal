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
    this.userService.userUpdated.subscribe(() => {
      this.setUser();
    });
    this.setUser();
  }

  async ngOnInit() {}

  setUser() {
    this.storage.get('user_obj').then((string) => {
      if (string) {
        this.user = JSON.parse(string);
        if (this.user.isProfileComplete) {
          this.routeLinks[1].name = 'Update Profile';
        }
      }
    });
  }

  goTo(link: string) {
    if (link == 'logout') {
      this.authService.logOut();
      return (this.isExpanded = false);
    }
    return this.nav.navigateTo(this.user.role + '/' + link);
  }
}
