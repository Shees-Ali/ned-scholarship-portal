import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base/base.page';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage extends BasePage implements OnInit {
  isSignUp: boolean = false;
  signInForm: FormGroup<any>;
  signUpForm?: any;
  constructor(injector: Injector) {
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
    const formValue = this.signInForm.value;
    this.authService.signIn(formValue.email, formValue.password).then((res) => {
      console.log(res);
      if (res) {
        this.nav.navigateTo('pages/dashboard');
      }
    });
  }
}
