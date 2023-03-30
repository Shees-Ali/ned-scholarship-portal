import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'ned-scholarship-portal';
  isExpanded: boolean = false;
  isLoggedIn: boolean = false;

  constructor(authService: AuthService) {
    authService.isLoggedIn.subscribe((res: boolean) => {
      this.isLoggedIn = res;
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = true;
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
