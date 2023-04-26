import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { BasePage } from '../base/base.page';
import { FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../services/validators/confirm-password.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage extends BasePage implements OnInit {
  isSignUp: boolean = false;
  signInForm: FormGroup<any>;
  signUpForm: FormGroup<any>;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Small'],
    [Breakpoints.Small, 'Small'],
  ]);
  
  constructor(injector: Injector, private _snackBar: MatSnackBar, private breakpointObserver: BreakpointObserver) {
    super(injector);
    this.signInForm = this.formBuilder.group({
      email: [
        'test@cloud.neduet.edu.pk',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@cloud.neduet.edu.pk'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.signUpForm = this.formBuilder.group(
      {
        first_name: ['', [Validators.required, Validators.maxLength(25)]],
        last_name: ['', [Validators.required, Validators.maxLength(25)]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@cloud.neduet.edu.pk'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirm_password: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirm_password'),
      }
    );
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit() {
    this.utiltiy.isAuthenticationPage.next(true);
  }

  navigate() {
    this.utiltiy.isAuthenticationPage.next(false);
    this.nav.navigateTo('');
  }

  changeTo() {
    this.isSignUp = !this.isSignUp;
  }

  signIn() {
    this.utiltiy.showLoader();
    if (this.signInForm.invalid) {
      this.utiltiy.hideLoader();
      return this.openSnackBar('Sign In Form InValid !', 'Okay');
    }
    const formValue = this.signInForm.value;
    this.authService
      .signIn(formValue.email, formValue.password)
      .then(async (res) => {
        const user = await this.userService.getUserData(res?.uid);
        if (res && user) {
          this.storage.set('user_obj', JSON.stringify(user));
          this.userService.userUpdated.next();
          this.utiltiy.hideLoader();
          if (user.role == 'student') {
            this.nav.navigateTo('student');
          } else if (user.role == 'admin') {
            this.nav.navigateTo('admin');
          }
        }
      })
      .catch((err) => {
        if (err.code == 'auth/user-not-found') {
          this.utiltiy.openSnackBar("User Doesn't Exist", 'OK');
        } else if (err.code == 'auth/wrong-password') {
          this.utiltiy.openSnackBar('Wrong Password', 'OK');
        }
        this.utiltiy.hideLoader();
      });
  }

  signUp() {
    if (this.signUpForm.invalid) {
      this.utiltiy.hideLoader();
      return this.openSnackBar('Sign Up Form InValid !', 'Okay');
    }

    this.authService
      .signUp(this.signUpForm.value)
      .then((res) => {
        if (res) {
          this.openSnackBar('Account Creation Success', 'Okay !', 'success');
          this.nav.navigateTo('student');
        }
      })
      .catch((err) => {
        if (err.code == 'auth/email-already-in-use') {
          this.utiltiy.openSnackBar('Email Already In Use', 'OK');
        }
        this.utiltiy.hideLoader();
      });
  }

  openSnackBar(message: string, action: string, className: string = 'error') {
    this.utiltiy.openSnackBar(message, action, className);
  }
}
