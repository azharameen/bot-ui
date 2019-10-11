import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fireauth: AngularFireAuth) { }

  googleSignIn() {
    this.fireauth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }

  facebookSignIn() {
    this.fireauth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }

  twitterSignIn() {
    this.fireauth.auth.signInWithPopup(new auth.TwitterAuthProvider())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }

  githubSignIn() {
    this.fireauth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }

  phoneSignIn() {
    const recaptcha = new auth.RecaptchaVerifier('recaptcha-container');
    this.fireauth.auth.signInWithPhoneNumber('+918807039685', recaptcha).then(confirm => {
      return confirm.confirm('335566');
    }).then(user => {
      console.log(user);
    }).catch(e => console.error(e));
  }

}
