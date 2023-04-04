import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input('sidenav') sidenav: any;
  @Input('btnText') btnText: string = 'Download Application';
  @Input('showProfileIcon') showProfileIcon: boolean = true;
  @Output('btnClicked') btnClicked: EventEmitter<any> = new EventEmitter<any>();
}
