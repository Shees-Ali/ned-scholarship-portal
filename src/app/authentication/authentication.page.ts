import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';
import { FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../services/validators/confirm-password.validator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage extends BasePage implements OnInit {
  isSignUp: boolean = false;
  signInForm: FormGroup<any>;
  signUpForm: FormGroup<any>;

  constructor(injector: Injector, private _snackBar: MatSnackBar) {
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
        first_name: ['Shees', Validators.required],
        last_name: ['Ali', Validators.required],
        email: [
          'sheesali088@cloud.neduet.edu.pk',
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
    console.log(this.signInForm.value);
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
          this.utiltiy.hideLoader();
          if (user.role == 'student') {
            this.nav.navigateTo('student');
          } else if (user.role == 'admin') {
            console.log(user);
            this.nav.navigateTo('admin');
          }
        }
      })
      .catch((err) => {
        this.utiltiy.hideLoader();
      });
  }

  signUp() {
    console.log(this.signUpForm.value);
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
        this.utiltiy.hideLoader();
      });
  }

  openSnackBar(message: string, action: string, className: string = 'error') {
    this.utiltiy.openSnackBar(message, action, className);
  }
}
