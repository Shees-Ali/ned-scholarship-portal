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
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        email: [
          'test@cloud.neduet.edu.pk',
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
    if (this.signInForm.invalid) {
      return this.openSnackBar('Sign In Form InValid !', 'Okay');
    }
    const formValue = this.signInForm.value;
    this.authService.signIn(formValue.email, formValue.password).then((res) => {
      console.log(res);
      if (res) {
        this.nav.navigateTo('student');
      }
    });
  }

  signUp() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.invalid) {
      return this.openSnackBar('Sign Up Form InValid !', 'Okay');
    }

    this.authService.signUp(this.signUpForm).then((res) => {
      if (res) {
        this.nav.navigateTo('student');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: 'top',
      panelClass: 'error',
    });
  }
}
