import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {AuthResponseData} from '../common/auth-response-data';
import {catchError, tap} from 'rxjs/operators';

import {Router} from '@angular/router';
import {UserModel} from '../common/user.model';
import {User} from './user';

@Injectable()
export class Auth {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient, router: Router) {
    this.router = router;
    this.httpClient = httpClient;
  }

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  private router: Router;

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA21e2KBQ9fNaKcHp-DiBtJn05np5oqSlA',
      {
      email: email,
      password: password,
       returnSecureToken: true
    } )
      .pipe(catchError(this.handleError), tap(response => {
          this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
      })
      );
  }

  autoLogin(): void {
    let userData: UserModel = JSON.parse(localStorage.getItem('userData'));
    console.log(userData)
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
        this.user.next(loadedUser);
        let expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
        this.autologout(expirationDuration)
    }
  }


  login(email: string, password: string): Observable<AuthResponseData> {
    return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA21e2KBQ9fNaKcHp-DiBtJn05np5oqSlA', {
      email: email,
      password: password,
      returnSecureToken: true
    })
      .pipe(catchError(this.handleError), tap(response => {
        this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
      }));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This pass is not correct';
        break;
    }
    return throwError(errorMessage);
  }


  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    console.log(userId)
    const expirationDate: Date = new Date(new Date().getTime() + expiresIn * 1000);
    let user: User = new User(email, userId, token, expirationDate)
    this.user.next(user);
    this.autologout(expiresIn * 1000);
    console.log(user)
    localStorage.setItem('userData', JSON.stringify(user));
}

  autologout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
        this.logout()
    }, expirationDuration);
  }


  logout(): void {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer = null;
  }

}
