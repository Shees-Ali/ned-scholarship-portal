import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Input() isExpanded?: boolean;

  public routeLinks = [
    { link: 'about', name: 'About', icon: 'dashboard' },
    { link: 'locations', name: 'Locations', icon: 'account_balance' },
  ];
}
