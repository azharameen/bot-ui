import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../auth/login.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  repasswordFormControl = new FormControl('', [
    Validators.required,
  ]);
  fullnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private login: LoginService) { }

  ngOnInit() { }


  onSubmitLogin(data) {
    console.log(data)
  }

  signIn(sign) {
    if (sign === 'google') {
      this.login.googleSignIn();
    } else if (sign === 'facebook') {
      this.login.facebookSignIn();
    } else if (sign === 'github') {
      this.login.githubSignIn();
    } else if (sign === 'twitter') {
      this.login.twitterSignIn();
    } else {
      this.login.phoneSignIn();
    }
  }


}
