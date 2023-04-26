import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input('sidenav') sidenav: any;
  @Input('btnText') btnText: string = '';
  @Input('showProfileIcon') showProfileIcon: boolean = true;
  @Input() isExpanded?: boolean;
  @Output('btnClicked') btnClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output('menuBtnClicked') menuBtnClicked: EventEmitter<any> = new EventEmitter<any>();
  isMenuOpen: boolean = false;

  showmenu(){
    this.isMenuOpen = !this.isMenuOpen;
    this.menuBtnClicked.emit(this.isMenuOpen);
  }
}
