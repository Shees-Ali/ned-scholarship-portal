import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/database/user.service';

@Injectable({
  providedIn: 'root',
})
export class StudentGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree | void>
    | boolean
    | UrlTree {
    return this.auth.getUser().then(async (res) => {
      const user = await this.userService.getUserData(res?.uid);
      if (!res) {
        return this.router.navigate(['/authentication']);
      }
      if (user.role !== 'student') {
        return this.router.navigate(['/']);
      }
      return true;
    });
  }
}
