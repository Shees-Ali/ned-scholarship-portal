import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/database/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | void> {
    const res = await this.auth.getUser();
    const user = await this.userService.getUserData(res?.uid);
    if (!res) {
      return this.router.navigate(['/authentication']);
    }
    if (user.role !== 'admin') {
      return this.router.navigate(['/pages/student']);
    }
    return;
  }
}
