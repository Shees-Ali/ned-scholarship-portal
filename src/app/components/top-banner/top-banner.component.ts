import { Component, Input, Injector } from '@angular/core';
import { User, UserInfo } from '@angular/fire/auth';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
})
export class TopBannerComponent extends BasePage {
  @Input('text') text: string = '';
  userData: User | undefined;
  user: any;
  constructor(injector: Injector) {
    super(injector);
    this.authService.getUser().then(async (res: User | undefined) => {
      this.userData = res;
      this.user = await this.userService.getUserData(res?.uid);
    });
  }
}
